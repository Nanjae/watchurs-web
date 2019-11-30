import React, { Component } from "react";
import styled from "styled-components";
import BoardTable from "../Components/BoardTable";
import BoardCard from "../Components/BoardCard";

const Wrapper = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: left;
`;

const BoardDiv = styled.div`
  width: 1140px;
  min-width: 1140px;
`;

const GoogleAdsLeftDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  height: 600px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const GoogleAdsRightDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  height: 600px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

const GoogleAdsBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  min-height: 90px;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.lightGrayColor};
`;

let scrollTop = window.scrollY;
let windowHeight = window.innerHeight;

export default class Home extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.windowResize);
  }

  handleScroll = () => {
    scrollTop = window.scrollY;
    this.setState({ scrollTop });
  };

  windowResize = () => {
    windowHeight = window.innerHeight;
    this.setState({ windowHeight });
  };

  render() {
    return (
      <Wrapper>
        <GoogleAdsLeftDiv
          style={{ top: scrollTop, height: windowHeight < 720 ? 250 : 600 }}
        >
          <ins
            className="adsbygoogle"
            style={{
              display: "inline-block",
              width: 300,
              height: windowHeight < 720 ? 250 : 600
            }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot={windowHeight < 720 ? "6765307417" : "9707983766"}
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
          <GoogleAdsBottomDiv>
            <ins
              className="adsbygoogle"
              style={{ display: "inline-block", width: 970, height: 90 }}
              data-ad-client="ca-pub-2379639620636294"
              data-ad-slot="3631344781"
            ></ins>
          </GoogleAdsBottomDiv>
        </BoardDiv>
        <GoogleAdsRightDiv
          style={{ top: scrollTop, height: windowHeight < 720 ? 250 : 600 }}
        >
          <ins
            className="adsbygoogle"
            style={{
              display: "inline-block",
              width: 300,
              height: windowHeight < 720 ? 250 : 600
            }}
            data-ad-client="ca-pub-2379639620636294"
            data-ad-slot={windowHeight < 720 ? "5316494373" : "7927998232"}
          ></ins>
        </GoogleAdsRightDiv>
      </Wrapper>
    );
  }
}
