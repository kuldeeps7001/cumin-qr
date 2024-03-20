import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import ColorInput from "../ColorInput";
import { ChangeEvent } from "react";
import { TbGrain } from "react-icons/tb";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function QRPattern({ qrStyle, fgColor, setValue }: { qrStyle: 'squares' | 'dots'; fgColor: any; setValue: (data: any) => void}) {

  const handlePatternSelect = (type : 'dots' | 'squares') => {
    setValue({ qrStyle: type });
  };

  const handleFgColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: color } = e.target;
    setValue({ fgColor: color });
  };

  return (
    <VStack gap={4} alignItems={"flex-start"} mt={6}>
      <Box mt={2}>
        <Text fontSize="md" color="gray.600">
          SELECT A PATTERN
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          {"This will be the color and shape of your QR code's data-pattern"}
        </Text>
      </Box>
      <HStack gap={6}>
        <Box
          onClick={() => handlePatternSelect('dots')}
          height={16}
          width={16}
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"md"}
          cursor={"pointer"}
          borderWidth={"2px"}
          borderColor={qrStyle === 'dots' ? "blue.400" : "gray.200"}
        >
          <TbGrain size={40} />
        </Box>
        <Box
          onClick={() => handlePatternSelect('squares')}
          height={16}
          width={16}
          p={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"md"}
          cursor={"pointer"}
          borderWidth={"2px"}
          borderColor={qrStyle === 'squares' ? "blue.400" : "gray.200"}
        >
          <AiOutlineAppstoreAdd size={40} />
        </Box>
      </HStack>
      <Text fontSize="md" mt={2} color="gray.600">
        COLOR
      </Text>
      <ColorInput name='fgColor' value={fgColor} onChange={handleFgColorChange} />
    </VStack>
  );
}
