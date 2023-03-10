const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
    case 'production':
        ENV_FILE_NAME = '.env.production';
        break;
    case 'staging':
        ENV_FILE_NAME = '.env.staging';
        break;
    case 'test':
        ENV_FILE_NAME = '.env.test';
        break;
    case 'development':
    default:
        ENV_FILE_NAME = '.env';
        break;
}

try {
    dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {}

// CORS when consuming StreamPay from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "https://stream-commerce-backend.herokuapp.com/";

// CORS to avoid issues when consuming StreamPay from a client
const STORE_CORS = process.env.STORE_CORS || "https://stream-commerce-backend.herokuapp.com:8000";

// Database URL (here we use a local database called stream-pay-development)
const DATABASE_URL =
    process.env.DATABASE_URL || "postgres://stream-commerce-backend.herokuapp.com//medusa-store";

// StreamPay uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// StreamPay keys
const STREAM_PAY_API_KEY = process.env.STREAM_PAY_API_KEY || "";
const STREAM_PAY_WEBHOOK_SECRET = process.env.STREAM_PAY_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
    `medusa-fulfillment-manual`,
    `medusa-payment-manual`,
    // Uncomment to add Stripe support.
    // You can create a Stripe account via: https://stripe.com
    // {
    //   resolve: `medusa-payment-stripe`,
    //   options: {
    //     api_key: STRIPE_API_KEY,
    //     webhook_secret: STRIPE_WEBHOOK_SECRET,
    //   },
    // },
];

module.exports = {
    projectConfig: {
        redis_url: REDIS_URL,
        // For more production-like environment install PostgresQL
        database_url: DATABASE_URL,https://stream-commerce-admin.herokuapp.com/
        database_type: "postgres",
        database_database: "./medusa-db.sql",
        database_type: "sqlite",
        store_cors: STORE_CORS,
        admin_cors: ADMIN_CORS,
    },
    plugins,
};
