import { Box, Container, Flex, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  return (
    <Container maxW={"7xl"} py={8}>
      <Text
        textAlign={"center"}
        lineHeight={"32px"}
        fontSize={32}
        mb={6}
        fontWeight={"semibold"}
      >
        Create QR Code in 3 Steps
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={4}
        justifyItems={"center"}
        mt={12}
      >
        <Box
          p={5}
          textAlign={"center"}
          borderWidth="1px"
          borderColor={"gray.200"}
          borderRadius={"xl"}
          width={"100%"}
          cursor={"pointer"}
          _hover={{
            borderColor: "red.400",
          }}
        >
          <Link href="/qr-types">
            <Flex justify={"center"}>
              <Image
                src={"/static/Selection.svg"}
                height={"120"}
                width={"260"}
                alt={"Select QR Type"}
              />
            </Flex>
            <Tag bg={"red.400"} color={"white"} mb={4}>
              Step 1
            </Tag>
            <Text fontSize={18} fontWeight={"semibold"}>
              Choose The Type
            </Text>
          </Link>
        </Box>
        <Box
          p={5}
          textAlign={"center"}
          borderWidth="1px"
          borderColor={"gray.200"}
          borderRadius={"xl"}
          width={"100%"}
          cursor={"pointer"}
          _hover={{
            borderColor: "red.400",
          }}
        >
          <Link href="/qr-types">
            <Flex justify={"center"}>
              <Image
                src={"/static/Generation.svg"}
                height={"120"}
                width={"260"}
                alt={"Select QR Type"}
              />
            </Flex>
            <Tag bg={"red.400"} color={"white"} mb={4}>
              Step 2
            </Tag>
            <Text fontSize={18} fontWeight={"semibold"}>
              Generate QR Code
            </Text>
          </Link>
        </Box>
        <Box
          p={5}
          textAlign={"center"}
          borderWidth="1px"
          borderColor={"gray.200"}
          borderRadius={"xl"}
          width={"100%"}
          cursor={"pointer"}
          _hover={{
            borderColor: "red.400",
          }}
        >
          <Link href="/qr-types">
            <Flex justify={"center"}>
              <Image
                src={"/static/Customize.svg"}
                height={"120"}
                width={"260"}
                alt={"Select QR Type"}
              />
            </Flex>
            <Tag bg={"red.400"} color={"white"} mb={4}>
              Step 3
            </Tag>
            <Text fontSize={18} fontWeight={"semibold"}>
              Customize & Download
            </Text>
          </Link>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
