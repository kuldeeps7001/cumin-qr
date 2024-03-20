import { QRVariant } from "@/types/QRVariant";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export default function QRSms({ value, setValue }: QRVariant) {
  const [formData, setFormData] = useState({
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    const dataTosend = `sms:${newData.phone}?body=${encodeURIComponent(
      newData.message
    )}`;
    setValue({ value: dataTosend });
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormControl>
      <FormLabel htmlFor="qr-sms" fontWeight={"semibold"}>
        Phone number
      </FormLabel>
      <Input
        id="qr-sms"
        name="phone"
        placeholder="0123456789"
        value={formData.phone}
        onChange={handleChange}
      />
      <FormLabel mt={4} htmlFor="qr-message" fontWeight={"semibold"}>
        Prefilled message
      </FormLabel>
      <Textarea
        placeholder="message"
        rows={3}
        name="message"
        shadow="sm"
        focusBorderColor="brand.400"
        value={formData.message}
        onChange={handleChange}
      />
    </FormControl>
  );
}
