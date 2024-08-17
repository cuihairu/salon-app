import { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components';


function Index(){
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <View style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Tabs
        value={tab1value}
        activeType='card'
        onChange={(value) => {
          setTab1value(value)
        }}
        align='left'
        direction='vertical'
        autoHeight
        style={{ flex: 1 ,backgroundColor: '#e0e0e0'}}
      >
        <Tabs.TabPane title='推拿专项'>
          <View style={{ backgroundColor: '#ffffff', padding: '10px' }}>Tab 1 内容</View>
        </Tabs.TabPane>
        <Tabs.TabPane title='经络专项'>
          <View style={{ backgroundColor: '#ffffff', padding: '10px' }}>Tab 2 内容</View>
        </Tabs.TabPane>
        <Tabs.TabPane title='经典项目'>
          <View style={{ backgroundColor: '#ffffff', padding: '10px' }}>Tab 3 内容</View>
        </Tabs.TabPane>
        <Tabs.TabPane title='人气套餐'>
          <View style={{ backgroundColor: '#ffffff', padding: '10px' }}>Tab 4 内容</View>
        </Tabs.TabPane>
      </Tabs>
    </View>
  );
}

export default Index;
