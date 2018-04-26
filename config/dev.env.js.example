'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// DEV_HOST: 本地开发URL
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: JSON.stringify('http://mallapi.dev.2jia1baby.com'),

  DEV_HOST: 'mall.dev.2jia1baby.com'
})
