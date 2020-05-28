/*
 * @Author: liyang
 * @Date: 2020-05-28 16:30:41
 * @LastEditTime: 2020-05-28 17:24:13
 * @LastEditors: liyang
 * @Description:
 */
const config = {
  projectName: 'demo',
  date: '2018-8-28',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      'env'
    ],
    plugins: [
      'transform-class-properties',
      'transform-decorators-legacy',
      'transform-object-rest-spread'
    ]
  },
  defineConstants: {
  },
  copy: {
    patterns: [],
    options: {}
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        url: {
          enable: true,
          limit: 10240
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: ['taro-ui'],
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
