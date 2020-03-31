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
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    body {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.darkFont};
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 14px;
    }
    a {background-color: ${props => props.theme.white};
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: normal;
        color: ${props => props.theme.darkFont};
        text-decoration: none;
    }
    /* input {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: normal;
        outline: none;
    }
    button {
        font-family: 'Noto Sans KR', sans-serif;
        border: 0px;
        outline: none;
    } */
`;
