import { QRVariant } from "@/types/QRVariant";
import {
  Box,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

type Props = {
  value: string;
  handleChange: (value: any) => void;
  name: string;
  placeHolder: string;
  label: string;
};

const SocialInput = ({
  value,
  handleChange,
  placeHolder,
  label,
  name,
}: Props) => {
  return (
    <Box mt={2} width={"full"}>
      <FormLabel htmlFor="facebook" fontWeight={"semibold"}>
        {label}
      </FormLabel>
      <Input
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default function QRSocial({ value, setValue }: QRVariant) {
  const [selected, setSelected] = useState("facebook");
  const emptyObj = {
    facebook: "",
    twitter: "",
    instagram: "",
    linkedIn: "",
    youTube: "",
  };
  const [socialValues, setSocialValues] = useState(emptyObj);

  const handleChange = (value: string) => {
    setSelected(value);
    setValue({ value: "" });
    setSocialValues(emptyObj);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSocialValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    let dataToSend;
    if (selected === "facebook") {
      dataToSend = `https://www.facebook.com/${value}`;
    } else if (selected === "twitter") {
      dataToSend = `https://www.twitter.com/${value}`;
    } else if (selected === "instagram") {
      dataToSend = `https://www.instagram.com/${value}`;
    } else if (selected === "linkedIn") {
      dataToSend = `https://www.linkedin.com/in/${value}`;
    } else if (selected === "youTube") {
      dataToSend = `https://www.youtube.com/user/${value}`;
    }
    setValue({ value: dataToSend });
  };

  return (
    <Stack direction={"column"} width={"full"}>
      <RadioGroup onChange={handleChange} value={selected}>
        <Stack direction="row" flexWrap={'wrap'}>
          <Radio value="facebook">Facebook</Radio>
          <Radio value="twitter">Twitter</Radio>
          <Radio value="instagram">Instagram</Radio>
          <Radio value="linkedIn">LinkedIn</Radio>
          <Radio value="youTube">YouTube</Radio>
        </Stack>
      </RadioGroup>
      <Box mt={2} width={"full"}>
        {selected === "facebook" ? (
          <SocialInput
            value={socialValues.facebook}
            handleChange={handleInputChange}
            name="facebook"
            label="Facebook username"
            placeHolder="abcdef"
          />
        ) : selected === "twitter" ? (
          <SocialInput
            value={socialValues.twitter}
            handleChange={handleInputChange}
            name="twitter"
            label="Twitter username"
            placeHolder="abcdef"
          />
        ) : selected === "instagram" ? (
          <SocialInput
            value={socialValues.instagram}
            handleChange={handleInputChange}
            name="instagram"
            label="Instagram username"
            placeHolder="abcdef"
          />
        ) : selected === "linkedIn" ? (
          <SocialInput
            value={socialValues.linkedIn}
            handleChange={handleInputChange}
            name="linkedIn"
            label="LinkedIn username"
            placeHolder="abcdef"
          />
        ) : selected === "youTube" ? (
          <SocialInput
            value={socialValues.youTube}
            handleChange={handleInputChange}
            name="youTube"
            label="YouTube username"
            placeHolder="abcdef"
          />
        ) : null}
      </Box>
    </Stack>
  );
}
