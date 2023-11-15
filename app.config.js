const path = require('path')

module.exports = {
  // 别名
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@tmp': path.resolve(__dirname, '.tmp'),
  },
  outputPath: 'dist',
  modulePrefix: 'vue_',
  devPort: '3002',
  proxyTable: {
    '/api': {
      target: 'http://localhost:4003/',
      changeOrigin: true
    }
  },
}
