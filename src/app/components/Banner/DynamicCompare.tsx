"use client";

import { ReactElement, ReactNode } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { BiQrScan } from "react-icons/bi";
import { LuQrCode } from "react-icons/lu";

interface FeatureProps {
  title: string;
  children: ReactNode;
  icon: ReactElement;
}

const Feature = ({ title, icon, children }: FeatureProps) => {
  return (
    <Stack alignItems={"center"} w={"80%"}>
      <Flex
        w={20}
        h={20}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} mb={4} fontSize={'lg'}>{title}</Text>
      <Box color={"gray.600"} fontSize={'md'}>{children}</Box>
    </Stack>
  );
};

export default function DynamicQRCompare() {
  return (
    <Container maxW={"7xl"}>
      <Box p={4} py={24}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={16}
          justifyItems={"center"}
        >
          <Feature
            icon={<Icon as={LuQrCode} w={14} h={14} color={"#F56565"} />}
            title={"Static QR Codes"}
          >
            <ul>
              <li>Fixed information encoded at the time of creation.</li>
              <li>
                Suitable for unchanging information like website links, contact
                details, or general information.
              </li>
              <li>
                Suitable for scenarios where information does not change
                frequently.
              </li>
              <li>Typically lack tracking and analytics features.</li>
              <li>
                Fixed information; risk of misuse if the code falls into the
                wrong hands.
              </li>
            </ul>
          </Feature>
          <Feature
            icon={<Icon as={BiQrScan} w={14} h={14} color={"#F56565"} />}
            title={"Dynamic QR Codes"}
          >
            <ul>
              <li>Can have content updated after generation.</li>
              <li>
                Beneficial when information needs regular updates, such as
                promotions, advertisements, or changing links.
              </li>
              <li>
                Suitable for marketing campaigns requiring data on user
                engagement.
              </li>
              <li>
                Often include tracking and analytics tools for monitoring user
                engagement, geographic locations of scans, and campaign
                effectiveness.
              </li>
              <li>
                Ability to change content adds a layer of security; useful for
                deactivating or updating codes due to security concerns.
              </li>
            </ul>
          </Feature>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
