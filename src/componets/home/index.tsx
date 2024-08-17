import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {useState} from 'react';
import {Swiper, NoticeBar, Image, Dialog, Grid} from '@nutui/nutui-react-taro';
import { IconFont } from '@nutui/icons-react-taro'
import findShop from "@images/shop.svg";

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
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
      <IconFont name="dongdong" style={{ marginRight: '10px' }} />
      <NoticeBar content={text} />
      <Image src={findShop} height='20%' width='20%' style={{background: '#F0F0F0'}}  onClick={openStoreList}>
      </Image>

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
