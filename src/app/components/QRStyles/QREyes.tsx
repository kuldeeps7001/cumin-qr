import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { BorderBox } from ".";
import eyeData from "@/data/eyes.json";
import ColorInput from "../ColorInput";
import { ChangeEvent } from "react";
import { HeroQrType } from "@/store/heroQr";

export default function QREyes({
  eyeColor,
  eyeRadius,
  setValue,
}: {
  eyeColor: any;
  eyeRadius: any;
  setValue: (data: any) => void;
}) {

  const handleEyeColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: color, name } = e.target;
    let newHaha;
    if (name === "inner") {
      newHaha = eyeColor.map((item : HeroQrType) => ({ ...item, inner: color }));
    } else {
      newHaha = eyeColor.map((item : HeroQrType) => ({ ...item, outer: color }));
    }
    setValue({ eyeColor: newHaha });
  };

  const handleEyeVariantChange = (type: number[], variant : string) => { 
    let  newHaha
    if(variant === 'outer'){
      newHaha = eyeRadius.map((item : HeroQrType) => ({ ...item, outer : type }));
    } else {
      newHaha = eyeRadius.map((item : HeroQrType) => ({ ...item, inner : type }));
    }
    setValue({ eyeRadius: newHaha });
   }


  const checkActive = (selected: number[], type: number[]) => {
    return selected.every((item, i) => item === type[i]); 
  }

  return (
    <VStack gap={4} alignItems={"flex-start"} mt={6}>
      <Box mt={2}>
        <Text fontSize="md" color="gray.600">
          SELECT EYE-BALL
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          {"This will be the color and shape of your QR code's eye-balls"}
        </Text>
      </Box>
      <ColorInput name="inner" value={eyeColor[0].inner} onChange={handleEyeColorChange} />
      <HStack spacing={4} mt={2} flexWrap={'wrap'}>
        {eyeData.map((type, i) => (
          <BorderBox
            key={i}
            active={checkActive(eyeRadius[0].inner, type)}
            onClick={() => handleEyeVariantChange(type, 'inner')}
          >
            <Box
              borderColor={"black"}
              borderWidth={"3px"}
              backgroundColor={"black"}
              borderTopLeftRadius={type[0]}
              borderTopRightRadius={type[1]}
              borderBottomRightRadius={type[2]}
              borderBottomLeftRadius={type[3]}
              p={3}
            />
          </BorderBox>
        ))}
      </HStack>
      <Box mt={6}>
        <Text fontSize="md" color="gray.600">
          SELECT EYE-FRAME
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          {"This will be the color and shape of your QR code's eye-frames"}
        </Text>
      </Box>
      <ColorInput name="outer" value={eyeColor[0].outer}  onChange={handleEyeColorChange} />
      <HStack spacing={4} mt={2} flexWrap={'wrap'}>
        {eyeData.map((type, i) => (
          <BorderBox
            key={i}
            active={checkActive(eyeRadius[0].outer, type)}
            onClick={() => handleEyeVariantChange(type, 'outer')}
          >
            <Box
              borderColor={"black"}
              borderWidth={"3px"}
              borderTopLeftRadius={type[0]}
              borderTopRightRadius={type[1]}
              borderBottomRightRadius={type[2]}
              borderBottomLeftRadius={type[3]}
              p={3}
            />
          </BorderBox>
        ))}
      </HStack>
    </VStack>
  );
}
