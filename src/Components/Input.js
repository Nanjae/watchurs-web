import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0px;
  background-color: ${props => props.bgColor};
  font-size: ${props => props.fontsize};
  padding: ${props => props.padding};
  width: ${props => props.width};
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  fontsize = "14px",
  padding = "0px",
  width = "88%"
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    fontsize={fontsize}
    padding={padding}
    width={width}
  />
);

export default Input;
