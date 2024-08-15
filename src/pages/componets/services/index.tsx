import { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components';


function Index(){
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <View>
      <Tabs
        value={tab1value}
        activeType='card'
        onChange={(value) => {
          setTab1value(value)
        }}
        align='left'
        direction='vertical'
        autoHeight
      >
        <Tabs.TabPane title='推拿专项'> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title='经络专项'> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title='经典项目'> Tab 3 </Tabs.TabPane>
        <Tabs.TabPane title='人气套餐'> Tab 4 </Tabs.TabPane>
      </Tabs>
    </View>
  );
}

export default Index;
