import React, { useState } from 'react';
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Dashboard from '../../containers/user/profile';
import StopWatch from '../../components/Timer/StopWatch/StopWatch';
import UserLocation from '../../components/Location/UserLocation'

import BottomMenu from '../../components/Menu/BottomMenu/BottomMenu'

export default function App() {

  const [tab, setTab] = useState(0);

  const options = [
    {
      label: 'Início',
      icon: 'home',
      onClick: () => setTab(0)
    },
    {
      label: 'Cronômetro',
      icon: 'stopwatch',
      onClick: () => setTab(1)
    },
    {
      label: 'Localização',
      icon: 'location',
      onClick: () => setTab(2)
    },
    {
      label: 'Perfil',
      icon: 'person',
      onClick: () => setTab(3)
    }
  ]

  return (
    <View className="h-full flex flex-column justify-between">
      { 
        tab === 0 && (
          <View className="flex flex-column items-center pt-8 mt-8"> 
            <Text>Seja bem-vindo ao Cubo!</Text>
          </View>
        ) 
      } 
      {
        tab === 1 && (
          <View className="flex flex-column items-center pt-8 mt-8"> 
            <StopWatch />
          </View>
        )
      }
      {
        tab === 2 && (
          <View className="flex flex-column items-center pt-8 mt-8"> 
            <UserLocation />
          </View>
        )
      }
      {
        tab === 3 && <Dashboard /> 
      }

      <BottomMenu active={tab} options={options} />
    </View>
  );
}