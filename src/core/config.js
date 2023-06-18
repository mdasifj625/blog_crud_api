import dotenv from 'dotenv'
dotenv.config()
const Config = {
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.NODE_ENV,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  DB_CONNECTION_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
}

export { Config }
