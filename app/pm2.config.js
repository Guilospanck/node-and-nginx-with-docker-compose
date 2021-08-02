module.exports = {
  apps: [{
    name: 'iot_filter',
    script: 'dist/main.js',
    env_development: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
