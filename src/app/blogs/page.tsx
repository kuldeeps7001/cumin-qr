import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import blogs from "@/data/blogs.json";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Create & Customize Your Dynamic QR code for FREE. Generate simple & advanced QR codes. Easy, customizable & trackable.',
}

export default function Blogs() {
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
            <Text as={"span"} color={"red.400"}>
            How To Create, Use And Share QR Codes?
            </Text>
          </Heading>
          <Text fontSize={'lg'} lineHeight={'1.4rem'} color={"gray.500"}>
            Create & Customize Your Dynamic QR code for FREE. Generate simple &
            advanced QR codes. Easy, customizable & trackable.
          </Text>
        </Stack>

        {/* <Box
          position={"relative"}
          rounded={"2xl"}
          width={"full"}
          overflow={"hidden"}
          textAlign={'center'}
          justifyContent={'center'}
          display={'flex'}
        > */}
          <Image
            alt={"Hero Image"}
            src={"/static/blogHero.png"}
            // fit={"cover"}
            // align={"center"}
            width={"400"}
            height={"300"}
          />
        {/* </Box> */}
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 4, sm: 3 }}
        spacing={6}
        justifyItems={"center"}
        my={12}
      >
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.url}`}>
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
                backgroundColor: "red.50",
              }}
            >
              <Image
                style={{ margin: "auto", marginBottom: "28px" }}
                height={50}
                width={50}
                src={blog.image}
                alt={blog.title}
              />
              <Text
                as={"span"}
                fontSize={"20"}
                lineHeight={"1.25"}
                fontWeight={"semibold"}
              >
                {blog.title}
              </Text>{" "}
              <Text
                mt={3}
                color={"gray.600"}
                fontSize={"1rem"}
                opacity={".7"}
                lineHeight={"1.4rem"}
              >
                {blog.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}
