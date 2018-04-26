'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// DEV_HOST: 本地开发URL
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: JSON.stringify('你的ip'),

  DEV_HOST: '你的域名'
})
