import { View } from '@tarojs/components';
import { Tabs } from '@nutui/nutui-react-taro'
import {useState} from "react";

function Index(){
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <View>
      <Tabs
        value={tab1value}
        activeType='smile'
        onChange={(value) => {
          setTab1value(value)
        }}
        align='left'
        direction='horizontal'
      >
        <Tabs.TabPane title='已预约'> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title='待付款'> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title='待服务'> Tab 3 </Tabs.TabPane>
        <Tabs.TabPane title='已完成'> Tab 4 </Tabs.TabPane>
      </Tabs>
    </View>
  );
}

export default Index;
