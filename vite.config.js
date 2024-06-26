export default {
    proxy: {
      '/send-email': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-email/, '')
      }
    }
  }
  