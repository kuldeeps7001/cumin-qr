import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { QRVariant } from "@/types/QRVariant";

export default function QRUrl({ value, setValue }: QRVariant) {
  return (
    <FormControl>
      <FormLabel htmlFor="qr-url" fontWeight={"semibold"}>
        URL
      </FormLabel>
      <Input
        id="qr-url"
        placeholder="https://example.com"
        value={value}
        onChange={(e) => setValue({ value: e.target.value })}
      />
    </FormControl>
  );
}
