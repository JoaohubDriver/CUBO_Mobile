import React, { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, Button, Pressable } from "react-native";

type Option = {
  label: string;
  icon: any;
  onClick: () => void;
}

type BottomMenuProps = {
  options: Option[];
  className?: string;
}


export default function BottomMenu({ 
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
                color="#61dafb"
                className="self-center" 
                
              />
              <Text className="text-gray-500 text-sm">{option.label}</Text>
            </View>
          </Pressable>
        ))
      }
    </View>
  )
}