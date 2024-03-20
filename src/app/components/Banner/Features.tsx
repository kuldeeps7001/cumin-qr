import { Box, Container, Flex, Text } from "@chakra-ui/react";

export default function Features() {
  return (
    <Container maxW={"7xl"} mt={4}>
      <Box p={4} py={12}>
        <Text textAlign={"center"} lineHeight={'32px'} fontSize={32} mb={6} fontWeight={"semibold"}>
          Explore Our Amazing{" "}
          <Text as={"span"} color={"red.400"}>
            Features
          </Text>
        </Text>
        <Flex mt={12} justify={"center"} flexWrap={'wrap'} gap={8}>
        {[
          "Unlimited QR Codes",
          "Customizable QR Codes",
          "Trackable QR Codes *Coming Soon*",
          "Dynamic QR Codes *Coming Soon*",
          "Easy to Use",
          "High Resolution QR Codes",
          "No Signup Required",
          "Free to Use",
        ].map((feature) => (
          <Box
            key={feature}
            textAlign={"center"}
            fontSize={18}
            fontWeight={"semibold"}
            mb={4}
            bg={'white'}
            p={8}
            borderRadius={'xl'}
          >
            <Text as={"span"} color={"red.400"}>
              ✓
            </Text>{" "}
            {feature}
          </Box>
        ))}
        </Flex>
      </Box>
    </Container>
  );
}
