import React, { Component } from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultRoute } from "./Routes";
import "swiper/css/swiper.css";
import { BlockLoading } from "react-loadingg";

const Wrapper = styled.div`
  user-select: none;
`;

const BlockLoadingDiv = styled.div`
  z-index: 500;
  position: fixed;
  background-color: #1f1f25;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  opacity: 1;
  transform: scale(2, 2) translate(25%, 25%);
  transition: opacity 1s, z-index 1s, transform 1s;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <>
        <GlobalStyles />
        <Router>
          <Wrapper>
            {this.state.isLoading ? (
              <BlockLoadingDiv>
                <BlockLoading size={"large"} />
              </BlockLoadingDiv>
            ) : (
              <BlockLoadingDiv style={{ opacity: 0, zIndex: -50 }}>
                <BlockLoading size={"large"} />
              </BlockLoadingDiv>
            )}
            <DefaultRoute />
          </Wrapper>
        </Router>
      </>
    );
  }
}
