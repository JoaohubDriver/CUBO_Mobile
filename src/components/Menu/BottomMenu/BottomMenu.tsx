import React, { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Button, Pressable } from "react-native";

type Option = {
  label: string;
  icon: any;
  onClick: () => void;
}

type BottomMenuProps = {
  active?: number;
  options: Option[];
  className?: string;
}


export default function BottomMenu({ 
  active,
  options,
  className 
}: BottomMenuProps) {

  return (
    <View className={`flex flex-row justify-around py-3 items-center bg-white border-gray-200 ${className}`}>
      {
        options.map((option, index) => (
          <Pressable key={index} onPress={option.onClick}>
            <View className="flex flex-col items-center">
              <Ionicons 
                name={option.icon} 
                size={23} 
                color={active === index ? '#61dafb' : '#999999'}
                className="self-center" 
                
              />
              <Text className={`text-sm ${active === index ? 'text-sky-400' : 'text-gray-500'}`}>
                {option.label}
              </Text>
            </View>
          </Pressable>
        ))
      }
    </View>
  )
}