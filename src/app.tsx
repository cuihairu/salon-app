import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import { View } from '@tarojs/components'

import '@nutui/nutui-react/dist/style.css'
// 全局样式
import './app.less'

function App({ children }) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className='app-container'>
      { children }
    </View>
  );
}

export default App
