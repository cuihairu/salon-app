import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import { View } from '@tarojs/components'
// 全局样式
import './app.less'
import '@nutui/nutui-react-taro/dist/style.css'

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
