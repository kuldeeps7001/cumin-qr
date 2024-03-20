import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Box height={'40vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Spinner />
        </Box>
    );
}