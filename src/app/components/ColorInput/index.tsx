import { Box, HStack, Input } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

export default function ColorInput({ onChange, name, value } : {name : string, value?: string, onChange ?: (e :  ChangeEvent<HTMLInputElement>) => void}) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
      colorInputRef?.current?.click();
  };

  return (
    <HStack width={60}>
      <Input flex={3} defaultValue={value} bg={'gray.50'} type="text" onClick={handleButtonClick} contentEditable={false} placeholder={'#ffffff'}  />
      <Input
        name={name}
        value={value}
        flex={1}
        type="color"
        ref={colorInputRef}
        onChange={onChange}
        px={'2px'}
      ></Input>
    </HStack>
  );
}
