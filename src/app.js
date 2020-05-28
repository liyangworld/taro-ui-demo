/*
 * @Author: liyang
 * @Date: 2020-05-28 16:30:41
 * @LastEditTime: 2020-05-28 17:26:36
 * @LastEditors: liyang
 * @Description:
 */
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/basic/index',
      'pages/view/index',
      'pages/view/article/index',
      'pages/feedback/index',
      'pages/data-entry/index',
      'pages/layout/index',
      'pages/navigation/index',
      'pages/navigation/indexes/index',
      'pages/advanced/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
