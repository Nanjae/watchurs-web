import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import HeaderImage from "../../Assets/Common/runeterra-ionia-01-c.png";
import { lightOrangeColor, deepBlueColor } from "../../Styles/StyleFunction";
import Theme from "../../Styles/Theme";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";
import BroadcasterInfo from "./BroadcasterInfo";

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 15px 0px;
`;

/**
 * 헤더 브로드캐스터 정보
 */

const HeaderBgDiv = styled.div`
  position: absolute;
  height: 190px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
  }
`;

const HeaderOpacityDiv = styled.div`
  position: absolute;
  z-index: 50;
  padding-top: 190px;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
  }
`;

const HeaderDiv = styled.div`
  z-index: 100;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
  }
`;

const BroadDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-left: 20px;
`;

const BroadAvatarDiv = styled.div`
  background-color: ${props => props.theme.blackColor};
  border: 4px solid ${props => props.theme.whiteColor};
  width: 90px;
  height: 90px;
  margin-right: 20px;
`;

const BroadAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 90px;
  height: 90px;
`;

const BroadInfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BroadPlatformDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.whiteColor};
  width: fit-content;
  padding: 5px;
  border-radius: 4px;
`;

const PlatformIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;

const BroadPlatform = styled.div`
  font-size: 14px;
  color: ${props => props.theme.twitchColor};
`;

const BroadName = styled.div`
  font-size: 32px;
  color: ${props => props.theme.whiteColor};
`;

const BroadSNameDiv = styled.div`
  font-size: 14px;
  width: fit-content;
  color: ${props => props.theme.orangeColor};
  background-color: ${props => props.theme.whiteColor};
  padding: 5px;
  border-radius: 4px;
`;

const MenuDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 20px;
  color: ${props => props.theme.whiteColor};
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
`;

export default withRouter(({ loading, data, detailPage }) => {
  return (
    <DetailDiv>
      <HeaderBgDiv url={HeaderImage} />
      <HeaderOpacityDiv style={{ backgroundColor: lightOrangeColor }} />
      <HeaderDiv>
        <BroadDiv>
          <BroadAvatarDiv>
            <BroadAvatar url={data.seeOneBroadcaster[0].bAvatar} />
          </BroadAvatarDiv>
          <BroadInfoDiv>
            <BroadPlatformDiv>
              <PlatformIcon url={twitchLogo} />
              <BroadPlatform>트위치</BroadPlatform>
            </BroadPlatformDiv>
            <BroadName>{data.seeOneBroadcaster[0].bName}</BroadName>
            <BroadSNameDiv>
              연결된 소환사 계정 : {data.seeOneBroadcaster[0].bSummoner.length}
            </BroadSNameDiv>
          </BroadInfoDiv>
        </BroadDiv>
        <MenuDiv style={{ backgroundColor: deepBlueColor }}>
          <MenuBox
            to={`/detail/${data.seeOneBroadcaster[0].bId}/1`}
            style={{
              backgroundColor: Theme.deepBlueColor,
              color: Theme.orangeColor,
              fontWeight: "bold"
            }}
          >
            {data.seeOneBroadcaster[0].bSummoner[0].sName}
          </MenuBox>
          {data.seeOneBroadcaster[0].bSummoner.length >= 2 && (
            <MenuBox
              to={`/detail/${data.seeOneBroadcaster[0].bId}/2`}
              style={{
                backgroundColor: Theme.deepBlueColor,
                color: Theme.orangeColor,
                fontWeight: "bold"
              }}
            >
              {data.seeOneBroadcaster[0].bSummoner[0].sName}
            </MenuBox>
          )}
          {data.seeOneBroadcaster[0].bSummoner.length >= 3 && (
            <MenuBox
              to={`/detail/${data.seeOneBroadcaster[0].bId}/2`}
              style={{
                backgroundColor: Theme.deepBlueColor,
                color: Theme.orangeColor,
                fontWeight: "bold"
              }}
            >
              {data.seeOneBroadcaster[0].bSummoner[0].sName}
            </MenuBox>
          )}
          {data.seeOneBroadcaster[0].bSummoner.length >= 4 && (
            <MenuBox
              to={`/detail/${data.seeOneBroadcaster[0].bId}/2`}
              style={{
                backgroundColor: Theme.deepBlueColor,
                color: Theme.orangeColor,
                fontWeight: "bold"
              }}
            >
              {data.seeOneBroadcaster[0].bSummoner[0].sName}
            </MenuBox>
          )}
          {data.seeOneBroadcaster[0].bSummoner.length >= 5 && (
            <MenuBox
              to={`/detail/${data.seeOneBroadcaster[0].bId}/2`}
              style={{
                backgroundColor: Theme.deepBlueColor,
                color: Theme.orangeColor,
                fontWeight: "bold"
              }}
            >
              {data.seeOneBroadcaster[0].bSummoner[0].sName}
            </MenuBox>
          )}
        </MenuDiv>
      </HeaderDiv>
      <BroadcasterInfo loading={loading} data={data} detailPage={detailPage} />
    </DetailDiv>
  );
});
