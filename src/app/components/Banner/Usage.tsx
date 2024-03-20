import { Box, Container, Flex, Text } from "@chakra-ui/react";

const useCases = [
  {
    title: "Business Cards",
    description:
      "Add a QR code to your business card that links to your contact information or your LinkedIn profile.",
  },
  {
    title: "Event Invitations",
    description:
      "Send out invitations to your event with a QR code that links to the event details or a map.",
  },
  {
    title: "Product Packaging",
    description:
      "Add a QR code to your product packaging that links to a how-to video or a user manual.",
  },
  {
    title: "Restaurant Menus",
    description:
      "Add a QR code to your restaurant menu that links to your online menu or a digital coupon.",
  },
  {
    title: "Real Estate",
    description:
      "Add a QR code to your real estate sign that links to a virtual tour of the property.",
  },
  {
    title: "Retail",
    description:
      "Add a QR code to your retail store window that links to a promotional video or a coupon.",
  },
  {
    title: "Print Advertising",
    description:
      "Add a QR code to your print ad that links to a promotional video or a coupon.",
  },
  {
    title: "Educational Materials",
    description:
      "Add a QR code to your educational materials that links to additional resources or a video.",
  },
  {
    title: "Business Documents",
    description:
      "Add a QR code to your business documents that links to additional resources or a video.",
  },
  {
    title: "Social Media",
    description:
      "Add a QR code to your social media profiles that links to your website or a promotional video.",
  },
  {
    title: "Email Signatures",
    description:
      "Add a QR code to your email signature that links to your website or your contact information.",
  },
  {
    title: "Digital Marketing",
    description:
      "Add a QR code to your digital marketing materials that links to a promotional video or a coupon.",
  },
];

export default function Usage() {
  return (
    <Container maxW={"7xl"} mt={4}>
      <Box p={4} py={12}>
        <Text textAlign={"center"} lineHeight={'32px'} fontSize={32} mb={6} fontWeight={"semibold"}>
          QR Code Solutions & {" "}
          <Text as={"span"} color={"red.400"}>
            Use Cases
          </Text>
        </Text>
        <Flex mt={12} justify={"center"} flexWrap={"wrap"} gap={8}>
          {useCases.map((useCase) => (
            <Box
              key={useCase.title}
              textAlign={"center"}
              fontSize={20}
              fontWeight={"semibold"}
              mb={4}
              borderWidth={"1px"}
              borderColor={"gray.200"}
              p={8}
              borderRadius={"xl"}
              w={{ base: '100%', md: '30%', sm : '40%' }}
            >
              {useCase.title}
              <Text mt={2} fontSize={16} color={"gray.500"}>
                {useCase.description}
              </Text>
            </Box>
          ))}{" "}
        </Flex>
      </Box>
    </Container>
  );
}
