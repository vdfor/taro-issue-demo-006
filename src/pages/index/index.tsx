import { Component } from 'react'
import { navigateTo } from '@tarojs/taro';
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Button type="primary" onClick={() => { navigateTo({url: '/pages/sub/sub-one/index'}) }}>跳转</Button>
      </View>
    )
  }
}
