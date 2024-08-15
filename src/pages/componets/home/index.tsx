import { View ,
  CommonEventFunction,
  SwiperProps as TaroSwiperProps,
} from '@tarojs/components';
import { Swiper , NoticeBar } from '@nutui/nutui-react-taro'


const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]

const text = 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'


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
      <NoticeBar  content={text} />
    </View>
  );
}

export default Index;
