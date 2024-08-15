import { View } from '@tarojs/components';
import { Avatar } from '@nutui/nutui-react-taro';
import './index.less'

function Index() {
  return (
    <View className='profile-header'>
      <View className='flex-wrp' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          size='large'
          src='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
          style={{
            marginRight: '10px',
            backgroundColor: '#f0f0f0',
            padding: '10px',
        }}
        />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <View style={{ fontSize: '16px', marginBottom: '5px' }}>我的名字</View>
          <View style={{ fontSize: '12px', marginBottom: '2px' }}>普通会员</View>
          <View style={{ fontSize: '12px' }}>VIP0000001</View>
        </View>
      </View>
      <View>
      </View>
    </View>
  );
}

export default Index;

