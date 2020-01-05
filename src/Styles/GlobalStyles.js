import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
// import AtomyLight from "./fonts/AtomyLight.ttf";
// import AtomyMedium from "./fonts/AtomyMedium.ttf";
// import AtomyBold from "./fonts/AtomyBold.ttf";
// import SpoqaHanSansThin from "./fonts/SpoqaHanSansThin.ttf";
// import SpoqaHanSansLight from "./fonts/SpoqaHanSansLight.ttf";
// import SpoqaHanSansRegular from "./fonts/SpoqaHanSansRegular.ttf";
// import SpoqaHanSansBold from "./fonts/SpoqaHanSansBold.ttf";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    body {
        background-color: ${props => props.theme.dTheme};
        color: ${props => props.theme.whiteColor};
        font-family: "Nanum Gothic", sans-serif;
        font-weight: normal;
        font-size: 16px;
    }
    a {
        font-family: "Nanum Gothic", sans-serif;
        font-weight: normal;
        color: ${props => props.theme.whiteColor};
        text-decoration: none;
    }
    input {
        font-family: "Nanum Gothic", sans-serif;
        font-weight: normal;
        outline: none;
    }
    button {
        outline: none;
    }
`;
