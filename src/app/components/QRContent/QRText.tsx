import { QRVariant } from "@/types/QRVariant";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";


export default function QRText({ value, setValue }: QRVariant) {

  // const [debouncedInputValue, setDebouncedInputValue] = React.useState("");

  // const handleInputChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
  //   setValue(e.target.value);
  // };

  // React.useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setDebouncedValue(inputValue);
  //   }, 500);
  //   return () => clearTimeout(timeoutId);
  // }, [inputValue, 500]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue({ value : e.target.value });
  }

//   const _changeText(newText:string) {
//     setValue(newText)
//   }

// const changeText = useDebounce(_changeText, 1000)

  return (
    <FormControl >
      <FormLabel htmlFor="qr-text" fontWeight={"semibold"}>
        Text content
      </FormLabel>
      <Textarea
        placeholder="Type here..."
        rows={3}
        name="qr-text"
        shadow="sm"
        focusBorderColor="brand.400"
        value={value}
        onChange={handleChange}
      />
    </FormControl>
  );
}
