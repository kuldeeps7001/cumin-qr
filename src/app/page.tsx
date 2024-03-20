import { Box, Divider } from "@chakra-ui/react";
import Banner from "./components/Banner/Banner";
import HeroQR from "./components/Banner/HeroQRGenerate";
import DynamicCompare from "./components/Banner/DynamicCompare";
import Steps from "./components/Banner/Steps";
import Features from "./components/Banner/Features";
import Usage from "./components/Banner/Usage";
import { QRCodes } from "@/data/QRTypes";

export default function Home() {
  return (
    <div>
      <Banner />
      <Divider my={6} />
      <HeroQR qrTypesMain={QRCodes} />
      <Divider my={6} />
      <DynamicCompare />
      <Divider my={6} />
      <Steps />
      {/* <Divider  my={6} /> */}
      <Box bg={"gray.50"}>
        <Features />
      </Box>
      <Usage />
    </div>
  );
}
