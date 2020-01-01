import React from "react";
import styled from "styled-components";

const Container = styled.input`
  background-color: ${props => props.theme.whiteColor};
  border-radius: 4px;
  border: 0px;
  font-size: ${props => props.fontsize};
  padding: ${props => props.padding};
  padding-right: 30px;
`;

const Input = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  fontsize = "14px",
  padding = "10px 20px 10px 10px"
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
  />
);

export default Input;
