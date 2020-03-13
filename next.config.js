const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    scope: '/',
    disable: false,
    register: true,
    sw: 'service-worker.js'
  }
})
