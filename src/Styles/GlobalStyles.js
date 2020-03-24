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
    @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
    body {
        background-color: ${props => props.theme.whiteColor};
        color: ${props => props.theme.blackColor};
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: normal;
        font-size: 16px;
        /* text-rendering: optimizeLegibility; */
    }
    a {
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: normal;
        color: ${props => props.theme.blackColor};
        text-decoration: none;
        /* text-rendering: optimizeLegibility; */
    }
    input {
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: normal;
        outline: none;
        /* text-rendering: optimizeLegibility; */
    }
    button {
        font-family: 'Nanum Gothic', sans-serif;
        border: 0px;
        outline: none;
    }
`;
