import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {useState} from 'react';
import {Swiper, NoticeBar, Image, Dialog, Grid, Space,Divider,Toast} from '@nutui/nutui-react-taro';
import { Star, Book,ShoppingFollow,Store} from '@nutui/icons-react-taro'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
];

const text = 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。';

const stores = [
  { name: '泰州店', address: '江苏省泰州市', latitude: 119.95206, longitude: 32.497865 },
];

function Index() {
  const [visible, setVisible] = useState(false);

  const onChange = (e) => {
    console.log(`onChange is trigger ${e}`);
  };

  const openStoreList = () => {
    setVisible(true);
  };

  const openMap = (latitude, longitude, name) => {
    Taro.openLocation({
      latitude,
      longitude,
      name,
      scale: 18,
    });
  };

  return (
    <View>
      <Swiper defaultValue={1} autoPlay indicator onChange={onChange}>
        {list.map((item, index) => (
          <Swiper.Item key={item}>
            <Image
              src={item}
              height='100%'
              width='100%'
              loading
              onError={() => {
                console.log('image load error', index, item);
              }}
            />
          </Swiper.Item>
        ))}
      </Swiper>
      <NoticeBar content={text} />
      <Divider />
      <Grid columns={2} gap='20px' center direction='horizontal' style={
        {
          width: '100%',
          height: '100%',
        }
      }
      >
        <Space wrap>
          <Grid.Item  style={{width:'100%'}} text='查找最近的店'>
              <Store color='Tan' size='80' style={{ marginRight: '10px' }} onClick={openStoreList}>
              </Store>
          </Grid.Item>
          <Grid.Item style={{width:'100%'}} text='最近的活动'>
            <ShoppingFollow color='Tan' size='80' style={{ marginRight: '10px' }} onClick={()=>{
              Toast.show('debug',{
                title: '最近的活动',
                content: '更多的活动马上到来',
                type: 'success',
                duration: 2,
                position: 'top',
                icon: <ShoppingFollow />,
                lockScroll: true,
                onClose:()=>{
                  console.log('close')
                },
              })
            }}
            >
            </ShoppingFollow>
          </Grid.Item>
          <Grid.Item style={{width:'100%'}} text='养生常识'>
            <Book color='Tan' size='80' style={{ marginRight: '10px' }} onClick={()=>{
              Toast.show('debug',{
                title: '养生常识',
                content: '更多的常识马上到来',
                type: 'success',
                duration: 1,
                position: 'center',
                icon: <Book />,
                lockScroll: true,
                onClose:()=>{
                  console.log('close')
                },
              })
            }}
            >
            </Book>
          </Grid.Item>
        </Space>
      </Grid>
      <Dialog
        visible={visible}
        title='门面店列表'
        onClose={() => setVisible(false)}
      >
        {stores.map((store, index) => (
          <View
            key={index}
            style={{ padding: '10px 0', borderBottom: '1px solid #ccc', cursor: 'pointer' }}
            onClick={() => openMap(store.latitude, store.longitude, store.name)}
          >
            {store.name} - {store.address}
          </View>
        ))}
      </Dialog>
    </View>
  );
}

export default Index;
