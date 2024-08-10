import { View } from '@tarojs/components'
import './index.less'
import Footer from "../../components/footer/footer";


function Index() {
  return (
    <View className="page-container">
      <View className="content">
        欢迎来到首页！
      </View>
      <Footer/>
    </View>
  )
}

export  default Index
