import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0px;
  background-color: ${props => props.bgColor};
  font-size: ${props => props.fontsize};
  padding: ${props => props.padding};
  width: ${props => props.width};
  ${props => props.style};
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  padding = "0px",
  width = "88%",
  style
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    padding={padding}
    width={width}
    style={style}
  />
);

export default Input;
