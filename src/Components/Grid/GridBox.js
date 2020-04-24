import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const GridBox = styled.div`
  width: 290px;
  height: 190px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridOpacity = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.url === null ? Theme.black : Theme.themeOrigin};
  opacity: ${(props) => (props.focused ? "0.6" : "0.3")};
  transition: opacity 0.3s;
`;

const GridInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position-x: ${(props) => (props.focused ? "100%" : "90%")};
  background-position-y: ${(props) => (props.focused ? "90%" : "100%")};
  transition: background-position-x 0.3s, background-position-y 0.3s;
`;

const GridText = styled.div`
  position: absolute;
  color: ${(props) => props.theme.darkWhite};
  transition: font-size 0.3s;
  font-weight: 400;
`;

export default ({
  row = 1,
  column = 1,
  theme = null,
  cursor = null,
  url = null,
  text = null,
  textSize = 14,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <GridBox
      onMouseEnter={() => {
        setFocused(true);
      }}
      onMouseLeave={() => {
        setFocused(false);
      }}
      style={{
        width: 290 * row + 10 * (row - 1),
        height: 190 * column + 10 * (column - 1),
        backgroundColor: theme,
        cursor: cursor,
      }}
    >
      <GridInner focused={focused} url={url}>
        <GridOpacity focused={focused} url={url}></GridOpacity>
        <GridText
          focused={focused}
          style={{ fontSize: focused ? textSize + 6 : textSize }}
        >
          {text}
        </GridText>
      </GridInner>
    </GridBox>
  );
};
