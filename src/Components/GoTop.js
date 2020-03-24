import React from "react";
import styled from "styled-components";
import IconArrowTop from "../Assets/Common/IconArrowTop.png";

const GoTop = styled.div`
  position: fixed;
  background-color: ${props => props.theme.whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 10px;
  width: 18px;
  height: 18px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.blackColor};
  opacity: 0.3;
  cursor: pointer;
`;

const ArrowTopIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 16px;
  height: 16px;
`;

export default () => {
  const goTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <GoTop>
      <ArrowTopIcon onClick={goTopHandler} url={IconArrowTop} />
    </GoTop>
  );
};
