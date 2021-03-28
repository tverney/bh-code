require('dotenv').config()
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const webpackRules = [
  {
    enforce: 'post',
    test: /fontkit[/\\]index.js$/,
    loader: 'transform-loader?brfs'
  },
  {
    enforce: 'post',
    test: /unicode-properties[/\\]index.js$/,
    loader: 'transform-loader?brfs'
  },
  {
    enforce: 'post',
    test: /linebreak[/\\]src[/\\]linebreaker.js/,
    loader: 'transform-loader?brfs'
  },
  { test: /src[/\\]assets/, loader: 'arraybuffer-loader' },
  { test: /\.afm$/, loader: 'raw-loader' }
]
module.exports = phase => {
  return withBundleAnalyzer({
    images: {
      domains: [
        'upload.wikimedia.org',
        'wikimedia.org',
        'netlify.app',
        'netzei-cms-s3.s3.amazonaws.com'
      ]
    },
    target: PHASE_DEVELOPMENT_SERVER !== phase ? 'serverless' : '',
    distDir: 'dist',
    webpack: (config, options) => {
      config.resolve.alias['fs'] = 'pdfkit/js/virtual-fs.js'
      config.externals.push('pdfkit')
      config.module.rules.push(...webpackRules)
      return config
    }
  })
}
