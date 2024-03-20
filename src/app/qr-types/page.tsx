"use client";

import { QRCodes } from "@/data/QRTypes";
import { useSelectedQrType } from "@/store/heroQr";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'QR Code Types',
//   description: 'Explore multiple QR code types. Click on any type to generate QR.',
// }

export type QRTypeProp = {
  label: string;
  value: string;
  description?: string;
  image?: JSX.Element;
  icon?: JSX.Element;
};

export default function QrTypes() {
  const {setSelectedQrType} = useSelectedQrType() as { setSelectedQrType : (value: string) => void};

  return (
    // <Container maxW={"100%"}  py={8}>
    <>
      <Box justifyContent={"center"} display={"flex"} alignItems={"center"}>
        {" "}
        <Image
          src={"/static/Selection.svg"}
          alt="Qr type select"
          height={"300"}
          width={"550"}
        />{" "}
      </Box>
      <Box maxW={"100%"} bg={"gray.100"} py={16}>
        <Text
          textAlign={"center"}
          lineHeight={"32px"}
          mb={6}
          fontSize={32}
          fontWeight={"semibold"}
        >
          Explore muliple{" "}
          <Text as={"span"} color={"red.400"}>
            QR types
          </Text>
        </Text>
        <Text textAlign={"center"} fontSize={"lg"} mb={12} color={"gray.500"}>
          Click on any type to generate QR
        </Text>
        <Flex justify={"center"} gap={6} flexWrap={"wrap"}>
          {QRCodes.map((qr) => (
            <Box
              key={qr.label}
              textAlign={"center"}
              borderWidth="1px"
              borderColor={"gray.200"}
              borderRadius={"xl"}
              bg={"white"}
              //   width={"100%"}
              cursor={"pointer"}
              _hover={{
                borderColor: "red.400",
                bg: "red.50",
              }}
              onClick={() => setSelectedQrType(qr.value)}
              w={{ base: "80%", md: "25%", sm: "45%" }}
            >
              <Link href={`/qr/${qr.value}`}>
                <Box p={5}>
                <Flex justify={"center"}>{qr.image}</Flex>
                <Text fontSize={18} my={4} fontWeight={"semibold"}>
                  {qr.label}
                </Text>
                <Text color={"gray.500"} textAlign={"center"} fontSize={14}>
                  {qr.description}
                </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}
