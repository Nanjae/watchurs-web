import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
    body {
        color: ${(props) => props.theme.darkFont};
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 14px;
    }
    a {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        color: ${(props) => props.theme.darkFont};
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
