import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Input from "./Input";
import IconSearch from "../Assets/Common/IconSearch.png";
import IconInfo from "../Assets/Common/IconInfo.png";
import IconArrow from "../Assets/Common/IconArrow.png";
import Theme from "../Styles/Theme";
import { deepBuleColor, darkBuleColor } from "../Styles/StyleFunction";

const Header = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const HeaderDiv = styled.div``;

const TopOpacityDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    height: 200px;
  }
`;

const TopFstBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    padding: 0px 15%;
    width: 70%;
    height: 200px;
  }
`;

const TopFstBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const TitleDiv = styled.div``;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const TitleFstText = styled.div`
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    padding-right: 10px;
    font-size: 48px;
  }
`;

const TitleSndText = styled.div`
  font-weight: bold;
  user-select: none;
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    font-size: 24px;
  }
`;

const TopSndBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

const SiteInfoBox = styled.div`
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const SiteInfoFstText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.darkOrangeColor};
`;

const SiteInfoSndText = styled.div`
  font-size: 14px;
`;

const SiteInfoTrdText = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.orangeColor};
`;

const SiteInfoFthText = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.lightOrangeColor};
`;

const CountBroadBox = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const InfoIcon = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    background-size: 12px;
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }
`;

const CountBroadFstText = styled.div``;

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    margin-left: 5px;
  }
`;

const CountBroadSndText = styled.div`
  color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const ArrowIcon = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    background-size: 12px;
    width: 12px;
    height: 12px;
    margin-left: 4px;
  }
`;

const SearchInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
  }
`;

const SearchInputBox = styled.div`
  background-color: ${props => props.theme.whiteColor};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    width: 300px;
    padding: 0px 10px;
    height: 40px;
  }
`;

const SearchInput = styled(Input)``;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    width: 16px;
    height: 16px;
  }
`;

const BotOpacityDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    height: 50px;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    padding: 0px 15%;
    font-size: 16px;
    width: 70%;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 900px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1500px) {
    width: 10%;
    height: 50px;
  }
`;

const MenuText = styled.div``;

export default withRouter(() => {
  return (
    <Header>
      <HeaderDiv>
        <TopOpacityDiv style={{ backgroundColor: darkBuleColor }}>
          <TopFstBoxDiv>
            <TopFstBox>
              <TitleDiv>
                <TitleBox>
                  <TitleFstText>WATCHURS</TitleFstText>
                  <TitleSndText>리그 오브 레전드</TitleSndText>
                </TitleBox>
              </TitleDiv>
              <SearchInputDiv>
                <SearchInputBox>
                  <SearchInput placeholder={"브로드캐스터 검색"} />
                  <SearchIcon url={IconSearch} />
                </SearchInputBox>
              </SearchInputDiv>
            </TopFstBox>
            <TopSndBox>
              <SiteInfoBox>
                <SiteInfoFstText>와쳐스</SiteInfoFstText>
                <SiteInfoSndText>는</SiteInfoSndText>
                <SiteInfoTrdText>브로드캐스터</SiteInfoTrdText>
                <SiteInfoSndText>의</SiteInfoSndText>
                <SiteInfoFthText>리그오브레전드 랭킹</SiteInfoFthText>
                <SiteInfoSndText>과</SiteInfoSndText>
                <SiteInfoFthText>통계</SiteInfoFthText>
                <SiteInfoSndText>를 제공합니다.</SiteInfoSndText>
              </SiteInfoBox>
              <CountBroadBox>
                <InfoIcon url={IconInfo} />
                <CountBroadFstText>등록된 브로드캐스터:</CountBroadFstText>
                <ArrowBox>
                  <CountBroadSndText>33명</CountBroadSndText>
                  <ArrowIcon url={IconArrow} />
                </ArrowBox>
              </CountBroadBox>
            </TopSndBox>
          </TopFstBoxDiv>
        </TopOpacityDiv>
        <BotOpacityDiv style={{ backgroundColor: deepBuleColor }}>
          <MenuDiv>
            <MenuBox
              style={{
                backgroundColor: deepBuleColor,
                color: Theme.darkOrangeColor,
                fontWeight: "bold"
              }}
            >
              <MenuText style={{ display: "none" }}>와쳐스 홈</MenuText>
              <MenuText>와쳐스 홈</MenuText>
            </MenuBox>
            <MenuBox>
              <MenuText>전체 랭킹</MenuText>
            </MenuBox>
            <MenuBox>
              <MenuText>등록 요청</MenuText>
            </MenuBox>
          </MenuDiv>
        </BotOpacityDiv>
      </HeaderDiv>
    </Header>
  );
});

// console.log(
//   "(windowWidth, windowHeight) : (" + windowWidth + ", " + windowHeight + ")"
// );

// <HeaderDiv>
//       <TopFstBoxDiv style={{ padding: 10 }}>
//         <TitleDiv
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-end",
//             marginBottom: 10,
//             padding: "0px 8px"
//           }}
//         >
//           <TopFstBox>
//             <TitleBox>
//               <TitleFstText style={{ paddingRight: 4, fontSize: 18 }}>
//                 와쳐스
//               </TitleFstText>
//               <TitleSndText style={{ fontSize: 12 }}>
//                 리그 오브 레전드
//               </TitleSndText>
//             </TitleBox>
//           </TopFstBox>
//           <TopSndBox style={{ paddingTop: 0 }}>
//             <InfoIcon
//               style={{ marginRight: 1, backgroundSize: "10px 10px" }}
//               url={IconInfo}
//             />
//             <CountBroadFstText style={{ fontSize: 10 }}>
//               등록된 브로드캐스터:
//             </CountBroadFstText>
//             <ArrowBox>
//               <CountBroadSndText style={{ fontSize: 10 }}>
//                 33명
//               </CountBroadSndText>
//               <ArrowIcon
//                 style={{ marginLeft: 2, backgroundSize: "10px 10px" }}
//                 url={IconArrow}
//               />
//             </ArrowBox>
//           </TopSndBox>
//         </TitleDiv>
//         <SearchInputBox style={{ padding: "8px" }}>
//           <SearchInput fontsize={"14px"} placeholder={"브로드캐스터 검색"} />
//           <SearchIcon url={IconSearch} style={{ width: 14, height: 14 }} />
//         </SearchInputBox>
//       </TopFstBoxDiv>
//       <BotDiv style={{ padding: "10px 18px" }}>
//         <MenuDiv>
//           <MenuBox style={{ marginRight: 10 }}>
//             <MenuText style={{ fontSize: 14 }}>홈</MenuText>
//           </MenuBox>
//           <MenuBox style={{ marginRight: 10 }}>
//             <MenuText style={{ fontSize: 14 }}>랭킹</MenuText>
//           </MenuBox>
//           <MenuBox style={{ marginRight: 10 }}>
//             <MenuText style={{ fontSize: 14 }}></MenuText>
//           </MenuBox>
//         </MenuDiv>
//       </BotDiv>
//     </HeaderDiv>
