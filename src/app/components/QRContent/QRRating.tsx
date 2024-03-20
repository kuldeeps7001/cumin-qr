import { QRVariant } from "@/types/QRVariant";
import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export default function QRRating({ value, setValue }: QRVariant) {
  return (
    <>
      <FormControl>
        <FormLabel mt={4} htmlFor="qr-message" fontWeight={"semibold"}>
          Google Reviews Link
        </FormLabel>
        <Input
          value={value}
          placeholder="https://g.page/your-business/review?rc"
          onChange={(e) => setValue({ value: e.target.value })}
        />
      </FormControl>
      <Box mt={2} width={"full"} bg={"gray.100"} p={4}>
        <Text pl={4} fontSize={'16px'}>
          <ol>
            <li>
              Log into your{" "}
              <a style={{ textDecoration : 'underline', color : 'blue' }} href="https://www.google.com/business/">
                Google Business Profile
              </a>{" "}
              .
            </li>
            <li>
              Look for your business on Google Search and click the link that
              states the number of reviews you have.
            </li>
            <li>Now select the “Get more reviews” button.</li>
            <li>
              {
                "There's your Google reviews link! Copy and paste into an textbox above."
              }
            </li>
          </ol>
        </Text>
      </Box>
    </>
  );
}
