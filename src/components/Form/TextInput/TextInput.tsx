
import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

type TextInputProps = {
  label?: string;
  value: string;
  icon?: any;
  placeholder?: string;
  style?: string;
  labelClassName?: string;
  inputClassName?: string;
  invalid?: boolean;
  invalidMessage?: string;
  onChange?: (text: string) => void;
};

export default function TextInputComponent({
  ...props
}: TextInputProps) {


  function handleOnChange(text: string) {
    props.onChange?.(text);
  }

  return (
    <View className={`flex flex-column ${props.style}`}>
      { 
        props.label && (
          <Text className={props?.labelClassName}>
            {props.label}
          </Text>
        )
      }
      <View className="flex flex-row items-center">
        <TextInput
          value={props.value}
          onChangeText={(text) => handleOnChange(text)}
          placeholder={props?.placeholder}
          className={`
            w-full border rounded-md p-2 
            ${ props?.inputClassName }
            ${  props.invalid ? 'border-red-500' : 'border-grey-400' }
          `}
        />
      </View>
      { 
        (props.invalid && props.invalidMessage) && (
          <Text className="text-red-500">
            {props.invalidMessage}
          </Text>
        )
      }
    </View>
  );
}