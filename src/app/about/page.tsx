import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',  
  description: 'We help business or individual to generate QR code for their business or personal use. We are passionate about making QR code generation easy and accessible for everyone. Our mission is to provide a simple yet powerful tool for creating QR codes that can be used in various applications, whether it\'s for business, personal, or educational purposes. At our core, we believe that technology should be user-friendly and inclusive. That\'s why we\'ve designed our QR code generator to be intuitive and straightforward, catering to users of all skill levels. Whether you\'re a small business owner looking to enhance your marketing efforts, a teacher seeking innovative ways to engage your students, or simply someone who wants to share information seamlessly, our platform is here to empower you. Join us on this journey of simplifying QR code generation and unlocking the potential of this versatile technology. We\'re excited to have you on board! Feel free to explore our website and start generating your QR codes today!',
}

const AboutUsPage = () => {
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
          About{" "}
          <Text as={"span"} color={"red.400"}>
            Us
          </Text>
        </Text>
        <Text fontSize="xl" mb={6}>
          {
            "Welcome to our QR Code Generator website! We're passionate about making QR code generation easy and accessible for everyone."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "Our mission is to provide a simple yet powerful tool for creating QR codes that can be used in various applications, whether it's for business, personal, or educational purposes."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "At our core, we believe that technology should be user-friendly and inclusive. That's why we've designed our QR code generator to be intuitive and straightforward, catering to users of all skill levels."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "Whether you're a small business owner looking to enhance your marketing efforts, a teacher seeking innovative ways to engage your students, or simply someone who wants to share information seamlessly, our platform is here to empower you."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "Join us on this journey of simplifying QR code generation and unlocking the potential of this versatile technology. We're excited to have you on board!"
          }
        </Text>
        <Text fontSize="lg">
          Feel free to explore our website and start generating your QR codes
          today!
        </Text>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
