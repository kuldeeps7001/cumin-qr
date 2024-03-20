import {
  AspectRatio,
  Box,
  Container,
  HStack,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BorderBox } from ".";
import Image from "next/image";

export default function QRBranding({
  logoPaddingStyle,
  setValue,
  logoWidth,
  logoHeight,
  logoPadding,
  logoImage,
}: {
  logoPaddingStyle: "square" | "circle";
  logoWidth: number;
  logoImage: string;
  logoHeight: number;
  logoPadding: number;
  setValue: (data: any) => void;
}) {
  const logoPaddingType = ["square", "circle"];

  const handleLogoPaddingStyle = (type: string) => {
    setValue({ logoPaddingStyle: type });
  };

  const handleLogoStyleChange = (value: number, type: string) => {
    setValue({ [type]: value });
  };

  const retrievePathFile = (files: any) => {
    const file = files[0];
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      console.error("Only png and jpg/jpeg allowed.");
    } else {
      const target: any = {};
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        target.name = "logoImage";
        target.value = reader.result;
        target.logoName = file.name;
        setValue({ logoImage: reader.result });
      };
    }
  };

  return (
    <VStack gap={4} alignItems={"flex-start"} mt={6}>
      <Box>
        <Text fontSize="md" color="gray.600">
          SELECT A LOGO (png or jpg/jpeg)
        </Text>
        <Text fontSize="md" mt={2} color="gray.600">
          This will appear at the center of your QR code
        </Text>
      </Box>
      {/* image upload  */}
      <Container mx={0} my={2} px={0} width="100%" height={"200px"}>
        {logoImage ? (
          <Box
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            display={"flex"}
            flexDirection={"column"}
            height={"200px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={logoImage}
              alt="brand"
              height={logoHeight * 2}
              width={logoWidth * 2}
            />
            <Text
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setValue({ logoImage: "" })}
              color={"blue.500"}
            >
              Remove
            </Text>
          </Box>
        ) : (
          <AspectRatio height={"200px"} _before={{ pb: "50%" }}>
            <Box
              borderColor="gray.300"
              borderStyle="dashed"
              borderWidth="2px"
              rounded="md"
              shadow="sm"
              role="group"
              transition="all 150ms ease-in-out"
              _hover={{
                shadow: "md",
                cursor: "pointer",
              }}
              as={motion.div}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <Box position="relative" height="100%" width="100%">
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  height="100%"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                >
                  <Stack
                    height="100%"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justify="center"
                    spacing="4"
                  >
                    <Stack p="8" textAlign="center" spacing="1">
                      <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                        Drop images here
                      </Heading>
                      <Text fontWeight="light">or click to upload</Text>
                    </Stack>
                  </Stack>
                </Box>
                <Input
                  type="file"
                  height="100%"
                  width="100%"
                  position="absolute"
                  top="0"
                  left="0"
                  opacity="0"
                  aria-hidden="true"
                  accept="image/*"
                  onChange={(e) => retrievePathFile(e.target.files)}
                  _hover={{
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </AspectRatio>
        )}
      </Container>
      {/* sizes */}
      <Box width={"full"}>
        <Text fontSize="md" color="gray.600">
          Logo height
        </Text>
        <Slider
          aria-label="slider-ex-1"
          min={20}
          max={60}
          defaultValue={logoHeight}
          onChange={(value) => handleLogoStyleChange(value, "logoHeight")}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box width={"full"}>
        <Text fontSize="md" color="gray.600">
          Logo width
        </Text>
        <Slider
          aria-label="slider-ex-1"
          min={20}
          max={60}
          defaultValue={logoWidth}
          onChange={(value) => handleLogoStyleChange(value, "logoWidth")}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box width={"full"}>
        <Text fontSize="md" color="gray.600">
          Logo padding
        </Text>
        <Slider
          aria-label="slider-ex-1"
          min={2}
          max={12}
          defaultValue={logoPadding}
          onChange={(value) => handleLogoStyleChange(value, "logoPadding")}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box>
        <Text fontSize="md" color="gray.600">
          Logo padding type
        </Text>
        <HStack spacing={5} mt={2}>
          {logoPaddingType.map((type) => (
            <BorderBox
              key={type}
              active={logoPaddingStyle === type}
              onClick={() => handleLogoPaddingStyle(type)}
            >
              {type === "square" ? (
                <Box borderColor={"black"} borderWidth={"3px"} p={3} />
              ) : (
                <Box
                  borderColor={"black"}
                  borderWidth={"3px"}
                  borderTopLeftRadius={"50%"}
                  borderTopRightRadius={"50%"}
                  borderBottomLeftRadius={"50%"}
                  borderBottomRightRadius={"50%"}
                  p={3}
                />
              )}
            </BorderBox>
          ))}
        </HStack>
      </Box>
    </VStack>
  );
}
