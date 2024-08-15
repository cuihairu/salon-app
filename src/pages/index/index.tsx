import { useState } from 'react';
import { View } from '@tarojs/components';
import './index.less';
import Footer from '../componets/footer/footer';
import HomeView from '../componets/home/index';
import ServicesView from '../componets/services/index'
import AppointmentView from '../componets/appointment/index';
import ProfileView from '../componets/profile/index';

function Index() {
  const [activeView, setActiveView] = useState('home');

  const renderActiveView = () => {
    switch (activeView) {
      case 'services':
        return <ServicesView />;
      case 'appointment':
        return <AppointmentView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <View className='components-page'>
      <View className='content'>
        {renderActiveView()}
      </View>
      <Footer onTabSwitch={setActiveView} />
    </View>
  );
}

export default Index;
