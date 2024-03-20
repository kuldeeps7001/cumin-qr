import React from "react";
import { Box, Text, Link, Container } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Welcome to our QR code generator help page! We\'re here to assist you with any questions or issues you may have. If you need help or have any inquiries regarding the usage of our QR code generator, please don\'t hesitate to reach out to our support team.'
}

const HelpPage = () => {
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
          Help Center{" "}
        </Text>
        <Text fontSize="xl" mb={4}>
          {
            "Welcome to our QR code generator help page! We're here to assist you with any questions or issues you may have."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            " If you need help or have any inquiries regarding the usage of our QR code generator, please don't hesitate to reach out to our support team."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          You can contact us via email at{" "}
          <Link href="mailto:support@cuminqr.com">support@example.com</Link> or
          through our <Link href="/contact">contact form</Link> on our website.
        </Text>
        <Text fontSize="lg">
          Our team is dedicated to providing prompt and helpful assistance to
          ensure that you have a seamless experience using our QR code
          generator.
        </Text>
      </Box>
    </Container>
  );
};

export default HelpPage;
