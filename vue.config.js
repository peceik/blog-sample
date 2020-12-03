module.exports = {
  // 개발 서버 설정
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      '/api': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost:9090',
        changeOrigin : true,
        // bypass: function(req, res, proxyOptions) {
        //     console.log('proxy bypass', req);
        //     return false;
        // },

      },
      '/v1': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'https://test-api-blockchain.line-beta.me',
        changeOrigin : true,
        // bypass: function(req, res, proxyOptions) {
        //     console.log('proxy bypass', req);
        //     return false;
        // },

      },
      '/login':{
        target: 'http://localhost:9090',
        changeOrigin : true,
      }
    },
    port: 4000,
  },
  // configureWebpack: {
  //   plugins: [
  //     new VuetifyLoaderPlugin()
  //   ],
  // },
};
