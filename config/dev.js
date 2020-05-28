/*
 * @Author: liyang
 * @Date: 2020-05-28 16:30:41
 * @LastEditTime: 2020-05-28 16:52:37
 * @LastEditors: liyang
 * @Description:
 */
/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  h5: {
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true,
      port: 9091
    }
  }
}
