import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'At QR Code Generator, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and how it is protected. Personal information such as your name, email address, or any other details you provide when using our service are kept confidential and are only used for the purpose of providing and improving our services. We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent. Your information is stored securely and is only accessible to authorized personnel. We may collect non-personal information such as browser type, operating system, and IP address for statistical purposes and to improve our website\'s performance and user experience. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns regarding your privacy, please contact us.'
}

const PrivacyPolicyPage = () => {
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
          Privacy Policy{" "}
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "At QR Code Generator, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how it is used, and how it is protected."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "Personal information such as your name, email address, or any other details you provide when using our service are kept confidential and are only used for the purpose of providing and improving our services."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent. Your information is stored securely and is only accessible to authorized personnel."
          }
        </Text>
        <Text fontSize="lg" mb={4}>
          {
            "We may collect non-personal information such as browser type, operating system, and IP address for statistical purposes and to improve our website's performance and user experience."
          }
        </Text>
        <Text fontSize="lg">
          {
            "By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns regarding your privacy, please contact us."
          }
        </Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicyPage;
