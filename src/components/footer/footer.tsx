import {useState} from 'react';
import {Tabbar ,TabbarItem} from '@nutui/nutui-react-taro';
import {Home, Category, Clock, User} from '@nutui/icons-react-taro';
import Taro from '@tarojs/taro';

const Footer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleSwitch = (index) => {
    console.log(index);
    setActiveTab(index);// 更新选中状态
    switch (index) {
      case 0:
        Taro.switchTab({ url: '/pages/index/index' });
        break;
      case 1:
        Taro.switchTab({ url: '/pages/services/services' });
        break;
      case 2:
        Taro.switchTab({ url: '/pages/appointment/appointment' });
        setActiveTab(index);
        break;
      case 3:
        Taro.switchTab({ url: '/pages/profile/profile' });
        break;
      default:
        break;
    }
  };
  return (
    <Tabbar defaultValue={0} fixed value={activeTab} onSwitch={handleSwitch}>
      <TabbarItem title="首页" icon={<Home/>}/>
      <TabbarItem title="项目" icon={<Category/>}/>
      <TabbarItem title="预约" icon={<Clock/>}/>
      <TabbarItem title="我的" icon={<User/>}/>
    </Tabbar>
  );
};

export default Footer;
