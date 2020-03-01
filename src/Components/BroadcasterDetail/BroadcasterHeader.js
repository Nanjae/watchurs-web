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
  @media only screen and (max-width: 599px) {
    margin: 8px 0px;
  }
  @media only screen and (min-width: 600px) {
    margin: 10px 0px;
  }
  @media only screen and (min-width: 1200px) {
    margin: 15px 0px;
  }
  @media only screen and (min-width: 1800px) {
    margin: 15px 0px;
  }
`;

/**
 * 헤더 브로드캐스터 정보
 */

const HeaderBgDiv = styled.div`
  position: absolute;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  @media only screen and (max-width: 599px) {
    height: 160px;
    width: 99%;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    height: 190px;
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    height: 190px;
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    height: 190px;
    min-width: 1050px;
  }
`;

const HeaderOpacityDiv = styled.div`
  position: absolute;
  z-index: 50;
  @media only screen and (max-width: 599px) {
    width: 99%;
    min-width: 300px;
    padding-top: 160px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 580px;
    padding-top: 190px;
  }
  @media only screen and (min-width: 1200px) {
    min-width: 800px;
    padding-top: 190px;
  }
  @media only screen and (min-width: 1800px) {
    min-width: 1050px;
    padding-top: 190px;
  }
`;

const HeaderDiv = styled.div`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    width: 99%;
    height: 160px;
    min-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    height: 190px;
    min-width: 580px;
  }
  @media only screen and (min-width: 1200px) {
    height: 190px;
    min-width: 800px;
  }
  @media only screen and (min-width: 1800px) {
    height: 190px;
    min-width: 1050px;
  }
`;

const BroadDiv = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 599px) {
    margin-top: 15px;
    margin-left: 10px;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 20px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 20px;
    margin-left: 20px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: 20px;
    margin-left: 20px;
  }
`;

const BroadAvatarDiv = styled.div`
  background-color: ${props => props.theme.blackColor};
  border: 4px solid ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    width: 90px;
    height: 90px;
    margin-right: 10px;
  }
  @media only screen and (min-width: 600px) {
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1200px) {
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
  @media only screen and (min-width: 1800px) {
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
`;

const BroadAvatar = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 600px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1200px) {
    width: 90px;
    height: 90px;
  }
  @media only screen and (min-width: 1800px) {
    width: 90px;
    height: 90px;
  }
`;

const BroadInfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 599px) {
    justify-content: flex-end;
  }
  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
  }
  @media only screen and (min-width: 1800px) {
    justify-content: space-between;
  }
`;

const BroadPlatformDiv = styled.div`
  display: flex;
  background-color: ${props => props.theme.whiteColor};
  width: fit-content;
  border-radius: 4px;
  @media only screen and (max-width: 599px) {
    padding: 4px;
  }
  @media only screen and (min-width: 600px) {
    padding: 5px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 5px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 5px;
  }
`;

const PlatformIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
  @media only screen and (min-width: 600px) {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
  @media only screen and (min-width: 1200px) {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
  @media only screen and (min-width: 1800px) {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
`;

const BroadPlatform = styled.div`
  color: ${props => props.theme.twitchColor};
  @media only screen and (max-width: 599px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 14px;
  }
`;

const BroadName = styled.div`
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    font-size: 28px;
    margin: 8px 0px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 32px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 32px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 32px;
  }
`;

const BroadSNameDiv = styled.div`
  width: fit-content;
  color: ${props => props.theme.orangeColor};
  background-color: ${props => props.theme.whiteColor};
  border-radius: 4px;
  @media only screen and (max-width: 599px) {
    font-size: 12px;
    padding: 4px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 14px;
    padding: 5px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
    padding: 5px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 14px;
    padding: 5px;
  }
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
  color: ${props => props.theme.whiteColor};
  font-weight: normal;
  cursor: pointer;
  user-select: none;
  @media only screen and (max-width: 599px) {
    padding: 0px 8px;
    height: 30px;
    font-size: 12px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 20px;
    height: 50px;
    font-size: 18px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 20px;
    height: 50px;
    font-size: 18px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20px;
    height: 50px;
    font-size: 18px;
  }
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
            style={
              detailPage === "1"
                ? {
                    backgroundColor: Theme.deepBlueColor,
                    color: Theme.orangeColor,
                    fontWeight: "bold"
                  }
                : {}
            }
          >
            {data.seeOneBroadcaster[0].bSummoner[0].sName}
          </MenuBox>
          {data.seeOneBroadcaster[0].bSummoner.length >= 2 && (
            <MenuBox
              to={`/detail/${data.seeOneBroadcaster[0].bId}/2`}
              style={
                detailPage === "2"
                  ? {
                      backgroundColor: Theme.deepBlueColor,
                      color: Theme.orangeColor,
                      fontWeight: "bold"
                    }
                  : {}
              }
            >
              {data.seeOneBroadcaster[0].bSummoner[1].sName}
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
              {data.seeOneBroadcaster[0].bSummoner[2].sName}
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
              {data.seeOneBroadcaster[0].bSummoner[3].sName}
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
              {data.seeOneBroadcaster[0].bSummoner[4].sName}
            </MenuBox>
          )}
        </MenuDiv>
      </HeaderDiv>
      <BroadcasterInfo loading={loading} data={data} detailPage={detailPage} />
    </DetailDiv>
  );
});
