const dotEnv = require('dotenv')

/**
 * @module FRAMEWORK
 * @description Configure Environment variables registers on .env.development or .env.application file
 */
export class Environment {
  static register () {
    const nodeEnv = process.env.NODE_ENV || 'development'
    dotEnv.config({ path: `.env.${nodeEnv}` })
  }
}
