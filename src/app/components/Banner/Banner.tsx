import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { CgQr } from "react-icons/cg";

export default function Banner() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Create once,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Create & Customize Your Dynamic QR code for FREE. Generate simple &
            advanced QR codes. Easy, customizable & trackable.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Link href="/qr/text">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
                leftIcon={<CgQr color={"white"} size={28} />}
              >
                Generate QR Code
              </Button>
            </Link>
            {/* <Button
              colorScheme="gray"
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
            >
              How It Works
            </Button> */}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            // height={'300px'}
            rounded={"2xl"}
            // boxShadow={'2xl'}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/static/hero.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
