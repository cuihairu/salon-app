import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import './services.less'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View>
        欢迎使用 NutUI React 开发 Taro 多端项目222222222222222。
      </View>
      <View>
        <Button type="primary"> NutUI React Button </Button>
      </View>
    </View>
  )
}

export default Index
