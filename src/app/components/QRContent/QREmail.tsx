import { QRVariant } from "@/types/QRVariant";
import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

export default function QREmail({ value, setValue }: QRVariant) {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    const dataTosend = `mailto:${newData.email}?subject=${encodeURIComponent(newData.subject)}&body=${encodeURIComponent(newData.message)}`;
    setValue({ value: dataTosend });
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormControl>
      <FormLabel htmlFor="email" fontWeight={"semibold"}>
        Email adddress
      </FormLabel>
      <Input
        name="email"
        placeholder="abcdef@abc.com"
        value={formData.email}
        onChange={handleChange}
      />
      <FormLabel mt={4} htmlFor="subject" fontWeight={"semibold"}>
        Prefilled subject
      </FormLabel>
      <Input
        name="subject"
        placeholder="subject"             
        value={formData.subject}
        onChange={handleChange}
      />
      <FormLabel mt={4} htmlFor="message" fontWeight={"semibold"}>
        Prefilled message
      </FormLabel>
      <Textarea
        rows={3}
        name="message"
        placeholder="message"
        value={formData.message}
        onChange={handleChange}
      />
    </FormControl>
  );
}
