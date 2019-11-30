import React, { Component } from "react";
import styled from "styled-components";
import BoardTable from "../Components/BoardTable";
import BoardCard from "../Components/BoardCard";

const Wrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 100%;
  margin-bottom: 12px;
`;

const BoardDiv = styled.div`
  width: 60%;
  min-width: 1140px;
`;

const GoogleAdsLeftDiv = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 600px;
  margin-right: 50px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const GoogleAdsRightDiv = styled.div`
  position: relative;
  min-width: 300px;
  min-height: 600px;
  margin-left: 50px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

let scrollTop = window.scrollY;

export default class Home extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    scrollTop = window.scrollY;
    this.setState({ scrollTop });
  };

  render() {
    return (
      <Wrapper>
        <GoogleAdsLeftDiv style={{ top: scrollTop + 20 }}>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 300, height: 600 }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot="6765307417"
          ></ins>
        </GoogleAdsLeftDiv>
        <BoardDiv>
          <BoardTable />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </BoardDiv>
        <GoogleAdsRightDiv style={{ top: scrollTop + 20 }}>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 300, height: 600 }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot="5316494373"
          ></ins>
        </GoogleAdsRightDiv>
      </Wrapper>
    );
  }
}
