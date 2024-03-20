import { QRVariant } from "@/types/QRVariant";
import {
  Box,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function QRAppStore({ value, setValue }: QRVariant) {
  const [selected, setSelected] = useState("playStore");

  const handleChange = (value: string) => {
    setSelected(value);
    setValue({ value: "" });
  };

  return (
    <Stack direction={"column"} width={"full"}>
      <RadioGroup onChange={handleChange} value={selected}>
        <Stack direction="row">
          <Radio value="playStore">Google play store</Radio>
          <Radio value="appStore">Apple app store</Radio>
        </Stack>
      </RadioGroup>
      <Box mt={2} width={"full"}>
        {selected === "playStore" ? (
          <>
            <FormLabel htmlFor="playStore" fontWeight={"semibold"}>
              Play store url
            </FormLabel>
            <Input
              placeholder="https://play.google.com/store/apps/details?id=com.example.app"
              name="playStore"
              value={value}
              onChange={(e) => setValue({ value: e.target.value })}
            />
          </>
        ) : (
          <>
            <FormLabel htmlFor="appStore" fontWeight={"semibold"}>
              App store url
            </FormLabel>
            <Input
              placeholder="https://apps.apple.com/us/app/your-app/id284882215"
              name="appStore"
              value={value}
              onChange={(e) => setValue({ value: e.target.value })}
            />
          </>
        )}
      </Box>
    </Stack>
  );
}
