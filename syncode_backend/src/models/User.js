import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 6,
      select: false, // Don't return password by default
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  }, {
    timestamps: true,
});


//hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});


//compare password match
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};


//generate password reset token
userSchema.methods.getResetPassword = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');
  this.resetPaswordToken = crypto
    .crypto('sha256')
    .update(resetToken)
    .digest('hex')

  //set expire to 10 mins
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
}

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;

