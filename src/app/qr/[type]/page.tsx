import HeroQR from "@/app/components/Banner/HeroQRGenerate";
import { QRCodes } from "@/data/QRTypes";
import { Box, Text } from "@chakra-ui/react";
import { Metadata } from "next";

 type Props = {
  params: { type: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const {type} = params;
 
  return {
    title: `Create ${type} QR code`,
  }
}

export default function CreateQR({ params }: Props) {
const {type} = params;
     
  return (
    // <Container maxW={"7xl"} mt={4}>
      <Box  py={12}>
        <Text
          textAlign={"center"}
          lineHeight={"32px"}
          fontSize={32}
          mb={14}
          fontWeight={"semibold"}
        >
          Easily generate your{" "}
          <Text as={"span"} color={"red.400"}>
          QR codes
          </Text>
        </Text>
        <HeroQR qrTypesMain={QRCodes} hero={false} type={type} />
      </Box>
    // </Container>
  );
}
