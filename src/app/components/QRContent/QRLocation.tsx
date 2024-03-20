import { QRVariant } from "@/types/QRVariant";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export default function QRLocation({ value, setValue }: QRVariant) {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    const dataTosend = `geo:${newData.latitude},${newData.longitude}`;
    setValue({ value: dataTosend });
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <FormControl>
      <FormLabel htmlFor="qr-latitude" fontWeight={"semibold"}>
        Latitude
      </FormLabel>
      <Input
        type="number"
        id="qr-latitude"
        name="latitude"
        placeholder="latitude"
        value={formData.latitude}
        onChange={handleChange}
      />
      <FormLabel mt={4} htmlFor="qr-longitude" fontWeight={"semibold"}>
        Longitude
      </FormLabel>
      <Input
        type="number"
        id="qr-longitude"
        name="longitude"
        placeholder="longitude"
        value={formData.longitude}
        onChange={handleChange}
      />
    </FormControl>
  );
}
