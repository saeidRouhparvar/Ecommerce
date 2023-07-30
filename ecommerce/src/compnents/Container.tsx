import {Box, BoxProps} from "@chakra-ui/react";

interface Interface extends BoxProps{
    reset?:any
    children?:any
}
const Container = ({children,...reset}:Interface) => {

    return (
        <Box px={"12px"} {...reset}>
            {children}
        </Box>
    )
}
export default Container;