import React, { useState } from "react";
import styled from "styled-components";
import "swiper/css/swiper.css";
import { useWindowScroll } from "@react-hook/window-scroll";

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  bottom: -201px;
  right: 30px;
  width: 30px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.goTopEnter ? 1 : 0.7)};
  transition: bottom 0.3s, opacity 0.5s;
  cursor: pointer;
`;

const Line = styled.div`
  background-color: ${(props) =>
    props.goTopEnter ? props.theme.highlightColor : props.theme.fontMainColor};
  height: 80px;
  width: 2px;
  margin-bottom: 100px;
  transition: background-color 0.5s;
`;

const Text = styled.div`
  color: ${(props) =>
    props.goTopEnter ? props.theme.highlightColor : props.theme.fontMainColor};
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transform: rotate(-90deg) translate(50%, 0%);
  transition: color 0.5s;
`;

export default () => {
  const [goTopEnter, setGoTopEnter] = useState(false);
  const scrollY = useWindowScroll();

  return (
    <>
      <Wrapper
        style={scrollY > 500 ? { bottom: 30 } : { bottom: -201 }}
        onMouseEnter={() => {
          setGoTopEnter(true);
        }}
        onMouseLeave={() => {
          setGoTopEnter(false);
        }}
        goTopEnter={goTopEnter}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Line goTopEnter={goTopEnter} />
        <Text goTopEnter={goTopEnter}>Back To Top</Text>
      </Wrapper>
    </>
  );
};
