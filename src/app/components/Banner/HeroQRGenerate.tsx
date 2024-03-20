"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import RenderQR from "../RenderQR";
import { Suspense, useEffect, useState } from "react";
import { TypeCompnent } from "../QRContent";
import QRStyles from "../QRStyles";
import { HeroQrType, useHeroQr } from "@/store/heroQr";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { QRTypeProp } from "@/app/qr-types/page";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  selected?: string;
  hero?: boolean;
}

type typeProp = { label: string; value: string; icon: JSX.Element };

function TypeBox(props: Props) {
  const { children, onClick, active, selected, hero } = props;

  return (
    <>
      {hero ? (
        <Box
          _hover={{
            shadow: "base",
          }}
          bg={active ? "gray.100" : "white"}
          shadow={active ? "base" : ""}
          borderWidth="1px"
          alignSelf={{ base: "center", lg: "flex-start" }}
          borderColor={"gray.200"}
          borderRadius={"xl"}
          cursor={"pointer"}
          px={4}
          py={3}
          onClick={onClick}
        >
          {children}
        </Box>
      ) : (
        <Link href={`/qr/${selected}`}>
          <Box
            _hover={{
              shadow: "base",
            }}
            bg={active ? "gray.100" : "white"}
            shadow={active ? "base" : ""}
            borderWidth="1px"
            alignSelf={{ base: "center", lg: "flex-start" }}
            borderColor={"gray.200"}
            borderRadius={"xl"}
            cursor={"pointer"}
            px={4}
            py={3}
            onClick={onClick}
          >
            {children}
          </Box>
        </Link>
      )}
    </>
  );
}

export function QRTypesComponent({
  hero = true,
  qrTypesMain,
  selectedQRType,
  handleSelectType,
  type,
}: {
  qrTypesMain: typeProp[];
  selectedQRType: typeProp | null;
  handleSelectType: (type: typeProp) => void;
  hero?: boolean;
  type?: string;
}) {
  const [data, setData] = useState<{
    main: typeProp[];
    secondary: typeProp[];
  } | null>(null);

  useEffect(() => {
    const index = qrTypesMain.findIndex((qr) => qr.value === type);
    if (index > 7) {
      arraymove(qrTypesMain, index, 7);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    setData({
      main: qrTypesMain.slice(0, !hero ? 8 : 6),
      secondary: qrTypesMain.slice(!hero ? 8 : 6),
    });
  }, [qrTypesMain, hero]);

  const handleDropdownSelect = (type: typeProp) => {
    handleSelectType(type);
    const index = qrTypesMain.findIndex((qr) => qr.value === type.value);
    arraymove(qrTypesMain, index, 7);
  };

  function arraymove(arr: any, fromIndex: number, toIndex: number) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    setData({
      main: arr.slice(0, !hero ? 8 : 6),
      secondary: arr.slice(!hero ? 8 : 6),
    });
  }

  return (
    <HStack flexWrap={"wrap"} spacing={4} alignItems={"center"}>
      {data &&
        data.main.map((type) => (
          <TypeBox
            key={type.label}
            active={selectedQRType?.value === type.value}
            onClick={() => handleSelectType(type)}
            selected={type?.value}
            hero={hero}
          >
            <Text
              display={"flex"}
              gap={3}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              {type.icon} {type.label}
            </Text>
          </TypeBox>
        ))}
      {hero ? (
        <Link href="/qr-types">
          <Box
            _hover={{
              shadow: "base",
            }}
            bg={"white"}
            borderWidth="1px"
            alignSelf={{ base: "center", lg: "flex-start" }}
            borderColor={"gray.200"}
            borderRadius={"xl"}
            cursor={"pointer"}
            px={4}
            py={3}
          >
            <Tooltip
              label={
                <ul>
                  {data?.secondary.map((qr) => (
                    <li key={qr.value}>{qr.label}</li>
                  ))}
                </ul>
              }
              aria-label="more-tooltip"
            >
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                {"More..."}
              </Text>
            </Tooltip>
          </Box>
        </Link>
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            More
          </MenuButton>
          <MenuList zIndex={99}>
            {data?.secondary.map((type) => (
              <Link key={type.value} href={`/qr/${type.value}`}>
                <MenuItem
                  key={type.label}
                  onClick={() => handleDropdownSelect(type)}
                >
                  <Text
                    display={"flex"}
                    gap={3}
                    fontSize={"md"}
                    fontWeight={"semibold"}
                  >
                    {type.icon} {type.label}
                  </Text>
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      )}
    </HStack>
  );
}

export default function HeroQR({
  qrTypesMain,
  hero,
  type,
}: {
  qrTypesMain: QRTypeProp[];
  hero?: boolean;
  type?: string;
}) {
  const { setQr, setDefault } = useHeroQr() as HeroQrType;
  const [selectedQRType, setSelectedQRType] = useState<QRTypeProp | null>(null);

  useEffect(() => {
    setSelectedQRType(qrTypesMain[0]);
  }, [qrTypesMain]);

  useEffect(() => {
    if (!hero && type) {
      setSelectedQRType(
        qrTypesMain.find((qr) => qr.value === type) || qrTypesMain[0]
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const handleSelectType = (type: QRTypeProp) => {
    setSelectedQRType(type);
    setDefault();
  };

  return (
    <Container maxW={"7xl"}>
      <Suspense fallback={<p>Loading feed...</p>}>
        <QRTypesComponent
          qrTypesMain={qrTypesMain as typeProp[]}
          handleSelectType={handleSelectType}
          selectedQRType={selectedQRType as typeProp | null}
          hero={hero}
          type={type}
        />
      </Suspense>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 6 }}
        direction={{ base: "column", md: "row" }}
      >
        <Box flex="4">
          <Box
            p={5}
            borderWidth="1px"
            borderColor={"gray.200"}
            borderRadius={"xl"}
            mt={4}
          >
            <VStack gap={4}>
              <TypeCompnent type={selectedQRType?.value} />
              <Divider />
              <QRStyles />
            </VStack>
          </Box>
        </Box>
        <Box flex="3" mt={4} position={"sticky"} top={20}>
          <RenderQR />
        </Box>
      </Stack>
    </Container>
  );
}
