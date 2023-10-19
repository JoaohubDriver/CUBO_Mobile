
import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

type TextInputProps = {
  label?: string;
  value: string;
  icon?: any;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  invalidFunction?: () => boolean;
  onChange?: (text: string) => void;
};

export default function TextInputComponent({
  ...props
}: TextInputProps) {

  const [touched, setTouched] = useState(false);
  const [invalid, setInvalid] = useState(false);

  function handleOnChange(text: string) {
    setTouched(true);
    setInvalid(text.length > 4);
    props.onChange?.(text);
  }

  return (
    <View className="flex flex-column">
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
          onChangeText={(text) => props.onChange?.(text)}
          placeholder={props?.placeholder}
          className={`
            w-full border rounded-md p-2 mb-3 border-gray-300
            ${ props?.inputClassName }
          `}
        />
      </View>
    </View>
  );
}