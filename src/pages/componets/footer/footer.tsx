import {useState} from 'react';
import {Tabbar ,TabbarItem} from '@nutui/nutui-react-taro';
import {Home, Category, Clock, User} from '@nutui/icons-react-taro';

// Use an array to store the view components or identifiers
const views = ['home', 'services', 'appointment', 'profile'];

const Footer = ({onTabSwitch}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSwitch = (index) => {
    setActiveTab(index);
    // Call the parent component's function to switch view
    onTabSwitch(views[index]);
  };

  return (
    <Tabbar defaultValue={0} fixed value={activeTab} onSwitch={handleSwitch}>
      <TabbarItem title='首页' icon={<Home />} />
      <TabbarItem title='项目' icon={<Category />} />
      <TabbarItem title='预约' icon={<Clock />} dot />
      <TabbarItem title='我的' icon={<User />} />
    </Tabbar>
  );
};

export default Footer;
