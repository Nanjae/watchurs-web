import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0px;
  padding: 0px;
  margin: 0px;
  width: 85%;
  ${props => props.style};
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  style
}) => (
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    style={style}
  />
);

export default Input;
