import { QRVariant } from "@/types/QRVariant";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function QRPhone({ value, setValue }: QRVariant) {
  const [phone, setPhone] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPhone(value);
    setValue({ value: `tel:${value}` });
  }

  return (
    <FormControl>
      <FormLabel htmlFor="qr-phone" fontWeight={'semibold'}>
        Phone number
      </FormLabel>
      <Input  value={phone} placeholder="9876543210" onChange={handleChange} />
    </FormControl>
  );
}
