import { createClient } from 'redis';

let redisClient = null;

const connectRedis = async () => {
    try {
        redisClient = createClient({
            url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,
        })

        redisClient.on('error', (err) => console.error('Redis Client Error: ', err.message));
        redisClient.on('connect', () => console.log('Redis Client Connected'));

    } catch (error) {
        console.error('Redis connection error:', error.message);
        //dont exit, redis is optional for basic functionality.
        return null;
    }
};

export { connectRedis, redisClient }