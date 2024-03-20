import {
  Box,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ColorInput from "../ColorInput";

export default function QROthers({ quietZone, bgColor, setValue, ecLevel }: {ecLevel : 'L' | 'M' | 'Q' |'H', bgColor : string, quietZone : number, setValue: (data: any) => void }) {

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setValue({ [name]: value });
  };

  const handleQuiteZoneChange = (data : any) => {
    setValue({ quietZone: data });
  }

  return (
    <VStack gap={4} alignItems={"flex-start"} mt={6}>
      <Box mt={2}>
        <Text fontSize="md" color="gray.600">
          SELECT BACKGROUND
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          {"Select a background color for your QR code."}
        </Text>
      </Box>
      <ColorInput value={bgColor} name='bgColor' onChange={handleChange} />
      <Box width={"full"}>
        <Text fontSize="md" color="gray.600">
          Quite Zone
        </Text>
        <Slider min={20} max={80} aria-label="slider-ex-1" defaultValue={quietZone} name="quietZone" onChange={handleQuiteZoneChange}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box width={"full"}>
        <Text fontSize="md" color="gray.600">
          Error Correction Level
        </Text>
        <Select placeholder="Select option" value={ecLevel} name="ecLevel" onChange={handleChange}>
          <option value="L">L - low (7%)</option>
          <option value="M">M - medium (15%)</option>
          <option value="Q">Q - high (25%)</option>
          <option value="H">H - best (30%)</option>
        </Select>
      </Box>
    </VStack>
  );
}
