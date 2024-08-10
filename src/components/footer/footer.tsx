import {useState} from 'react';
import {Tabbar ,TabbarItem} from '@nutui/nutui-react-taro';
import {Home, Category, Clock, User} from '@nutui/icons-react-taro';
import Taro from '@tarojs/taro';

// 使用 map 来管理 index 到 url 的映射
const tabMap = {
  0: '/pages/index/index',
  1: '/pages/services/services',
  2: '/pages/appointment/appointment',
  3: '/pages/profile/profile',
};


const Footer = () => {
  // React
  const [activeTab, setActiveTab] = useState(0);
  const handleSwitch = (index) => {
    const url = tabMap[index] || tabMap[0];
    console.log("tab bar index:%d url:%s",index, url);
    setActiveTab(index);
    Taro.switchTab({url});
  };
  return (
    <Tabbar defaultValue={0} fixed value={activeTab} onSwitch={handleSwitch}>
      <TabbarItem title="首页" icon={<Home/>}/>
      <TabbarItem title="项目" icon={<Category/>}/>
      <TabbarItem title="预约" icon={<Clock/>} dot/>
      <TabbarItem title="我的" icon={<User/>}/>
    </Tabbar>
  );
};

export default Footer;
