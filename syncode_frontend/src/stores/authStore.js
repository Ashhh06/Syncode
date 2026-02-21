import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authService } from "../services/authServices.js"; 
import toast from "react-hot-toast";

export const useAuthStore = create(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
  
      // Login
      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const response = await authService.login({ email, password });
          const { user, token } = response.data;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          toast.success('Login successful!');
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Login failed';
          toast.error(message);
          return { success: false, error: message };
        }
      },


      // Register
      register: async (name, email, password) => {
        set({ isLoading: true });
        try {
          const response = await authService.register({ name, email, password });
          const { user, token } = response.data;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          toast.success('Registration successful!');
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Registration failed';
          toast.error(message);
          return { success: false, error: message };
        }
      },


      // Logout
      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        toast.success('Logged out successfully');
      },

      // Initialize auth from localStorage
      initializeAuth: () => {
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');
        
        if (token && userStr) {
          try {
            const user = JSON.parse(userStr);
            set({
              user,
              token,
              isAuthenticated: true,
            });
          } catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        }
      },


      // Forgot password
      forgotPassword: async (email) => {
        set({ isLoading: true });
        try {
          const response = await authService.forgotPassword(email);
          set({ isLoading: false });
          toast.success(response.message || 'Password reset email sent');
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Failed to send reset email';
          toast.error(message);
          return { success: false, error: message };
        }
      },




      // Reset password
      resetPassword: async (resetToken, password) => {
        set({ isLoading: true });
        try {
          const response = await authService.resetPassword(resetToken, password);
          const { user, token } = response.data;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          set({
            user,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          toast.success('Password reset successful!');
          return { success: true };
        } catch (error) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Password reset failed';
          toast.error(message);
          return { success: false, error: message };
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);