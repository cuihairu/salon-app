import { View } from '@tarojs/components';
import { Swiper } from '@nutui/nutui-react-taro'
import {
  CommonEventFunction,
  SwiperProps as TaroSwiperProps,
} from '@tarojs/components'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]

function Index(){
  const onChange: CommonEventFunction<TaroSwiperProps.onChangeEventDetail> = (
    e
  ) => {
    console.log(`onChange is trigger ${e}`)
  }
  return (
    <View>
      <Swiper defaultValue={1} autoPlay indicator onChange={onChange}>
        {list.map((item, index) => (
          <Swiper.Item key={item}>
            <img
              width='100%'
              height='100%'
              onClick={() => console.log(index)}
              src={item}
              alt=''
            />
          </Swiper.Item>
        ))}
      </Swiper>
    </View>
  );
}

export default Index;
