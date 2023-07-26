import { extendTheme } from "@chakra-ui/react";
import ButtonStyle from "./compnents/Styles/ButtonStyles";

const theme = extendTheme({
    components : {
        Button: ButtonStyle,
    }
})