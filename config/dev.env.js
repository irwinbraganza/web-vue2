'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SENDGRID_API_KEY: '"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"'
})
