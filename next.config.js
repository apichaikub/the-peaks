const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
      domains: ['s3-alpha-sig.figma.com', 'media.guim.co.uk'],
  },
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
    disable: process.env.NODE_ENV === 'development',
  },
})
