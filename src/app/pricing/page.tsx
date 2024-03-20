import React from "react";
import { Box, Container,  Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Our QR code generation service is currently available for free! Enjoy all the features without any cost. There are no hidden fees or limitations. You can generate as many QR codes as you need, customize them to your liking, and download them for use in your projects. We\'re dedicated to providing a seamless experience for our users without charging any fees. We\'re committed to providing a valuable service to our users without charging any fees. Enjoy the convenience of QR code generation without breaking the bank!'
}

const PricingPage = () => {
  return (
    <Container maxW={"7xl"} py={"20"}>
      <Box p={4} py={12}>
      <Text
          textAlign={"center"}
          lineHeight={"32px"}
          fontSize={32}
          mb={6}
          fontWeight={"semibold"}
        >
          Pricing{" "}
        </Text>
        <Text fontSize="xl" mb={4}>
          {
            "Our QR code generation service is currently available for free! Enjoy all the features without any cost."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "There are no hidden fees or limitations. You can generate as many QR codes as you need, customize them to your liking, and download them for use in your projects. We're dedicated to providing a seamless experience for our users without charging any fees."
          }
        </Text>
        <Text fontSize="lg">
          {
            "We're committed to providing a valuable service to our users without charging any fees. Enjoy the convenience of QR code generation without breaking the bank!"
          }
        </Text>
      </Box>
    </Container>
  );
};

export default PricingPage;
