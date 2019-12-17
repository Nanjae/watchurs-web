import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0
    }
`;

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  animation: ${Animation} 1s linear infinite;
  font-size: 20px;
  font-weight: bold;
`;

export default () => <Loader>WATCHURS 로딩 중...</Loader>;
