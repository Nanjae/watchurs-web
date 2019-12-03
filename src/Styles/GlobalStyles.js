import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AtomyLight from "./fonts/AtomyLight.ttf";
import AtomyMedium from "./fonts/AtomyMedium.ttf";
import AtomyBold from "./fonts/AtomyBold.ttf";
import SpoqaHanSansThin from "./fonts/SpoqaHanSansThin.ttf";
import SpoqaHanSansLight from "./fonts/SpoqaHanSansLight.ttf";
import SpoqaHanSansRegular from "./fonts/SpoqaHanSansRegular.ttf";
import SpoqaHanSansBold from "./fonts/SpoqaHanSansBold.ttf";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
    /* @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    * {
        box-sizing:border-box;
    }
    @font-face {
        font-family: "SpoqaHanSans";
        font-weight: 100;
        src: url(${SpoqaHanSansThin});
    }
    @font-face {
        font-family: "SpoqaHanSans";
        font-weight: 200;
        src: url(${SpoqaHanSansLight});
    }
    @font-face {
        font-family: "SpoqaHanSans";
        font-weight: 400;
        src: url(${SpoqaHanSansRegular});
    }
    @font-face {
        font-family: "SpoqaHanSans";
        font-weight: 600;
        src: url(${SpoqaHanSansBold});
    }
    @font-face {
        font-family: "Atomy";
        font-weight: 200;
        src: url(${AtomyLight});
    }
    @font-face {
        font-family: "Atomy";
        font-weight: 400;
        src: url(${AtomyMedium});
    }
    @font-face {
        font-family: "Atomy";
        font-weight: 600;
        src: url(${AtomyBold});
    } */
    body {
        background-color: ${props => props.theme.dTheme};
        color: ${props => props.theme.aTheme};
        font-family: "Nanum Gothic", sans-serif;
        font-weight: normal;
        font-size: 14px;
    }
    a {
        color: ${props => props.theme.aTheme};
        text-decoration: none;
    }
    input {
        outline: none;
    }
    button {
        outline: none;
    }
`;
