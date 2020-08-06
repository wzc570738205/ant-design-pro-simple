/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-08-05 09:34:05
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-08-06 11:30:22
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
    "/bdsp/interManager": {
      target: `http://47.105.123.78:8030`,
      changeOrigin: true
    }
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};
