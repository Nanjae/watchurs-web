import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const GoogleAdsLeftDiv = styled.div`
  position: fixed;
  top: 200px;
  left: 40px;
  width: 300px;
  height: 600px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const GoogleAdsRightDiv = styled.div`
  position: fixed;
  top: 200px;
  right: 40px;
  width: 300px;
  height: 600px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

export default class GoogleAds extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <Wrapper>
        <GoogleAdsLeftDiv>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 160, height: 600 }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot="6765307417"
          ></ins>
        </GoogleAdsLeftDiv>
        <GoogleAdsRightDiv>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 160, height: 600 }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot="5316494373"
          ></ins>
        </GoogleAdsRightDiv>
      </Wrapper>
    );
  }
}
