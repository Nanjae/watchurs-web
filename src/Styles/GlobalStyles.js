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
    @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
    }
    a {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        text-decoration: none;
    }
    .swiper-stack-custom {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        padding-bottom: 40px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active.swiper-pagination-bullet-active-main {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #007AFF;
        opacity: 0.8;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active-prev {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #007AFF;
        opacity: 0.4;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #007AFF;
        opacity: 0.4;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active-next {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #007AFF;
        opacity: 0.4;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 100%;
        background: #007AFF;
        opacity: 0.4;
    }
`;
