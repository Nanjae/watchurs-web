import React, { useState } from "react";
import styled from "styled-components";
import { darkBlueColor } from "../../Styles/StyleFunction";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import BgImage from "../../Assets/Common/runeterra-freljord-02-r-c.png";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input";
import DropdownSelect from "react-dropdown-select";
import useInput from "../../Hooks/useInput";
import { Link } from "react-router-dom";

const CommonPage = styled.div``;

const CommonPageDiv = styled.div``;

const MainBgDiv = styled.div`
  z-index: -100;
  position: absolute;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-position-y: 90%;
  @media only screen and (max-width: 599px) {
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 600px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 1200px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 750px;
  }
  @media only screen and (min-width: 1800px) {
    height: ${props => props.windowHeight}px;
    width: 100%;
    min-height: 900px;
  }
`;

const MainOpacityDiv = styled.div`
  @media only screen and (max-width: 599px) {
    padding-top: 150px;
  }
  @media only screen and (min-width: 600px) {
    padding-top: 200px;
  }
  @media only screen and (min-width: 1200px) {
    padding-top: 250px;
  }
  @media only screen and (min-width: 1800px) {
    padding-top: 300px;
  }
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.grayColor};
  height: fit-content;
  @media only screen and (max-width: 599px) {
    width: 100%;
    min-height: 600px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px 10%;
    width: 80%;
    min-height: 600px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px 15%;
    width: 70%;
    min-height: 750px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px 20%;
    width: 60%;
    min-height: 900px;
  }
`;

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PageBox = styled.div`
  height: 100%;
  width: 100%;
`;

const PageHeaderDiv = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  padding: 40px;
`;

const PageHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderFstText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderSndText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  color: ${props => props.theme.brownColor};
`;

const HeaderListButton = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
  background-color: ${props => props.theme.darkBlueColor};
  color: ${props => props.theme.whiteColor};
  border-radius: 8px;
`;

const RequestDiv = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RequestInfoDiv = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.lightGrayColor};
  margin-bottom: 30px;
`;

const RequestInfoBox = styled.div`
  display: flex;
`;

const RequestTagText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  width: 100px;
  margin: 25px 0px;
  padding: 5px 30px;
  color: ${props => props.theme.darkOrangeColor};
  border-right: 1px solid ${props => props.theme.lightGrayColor};
`;

const RequestInputText = styled(Input)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  margin: 20px 40px;
  border-bottom: 2px solid ${props => props.theme.lightGrayColor};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const RequestPlatformBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const RequestButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.darkBlueColor};
  color: ${props => props.theme.whiteColor};
  font-size: 20px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  padding: 10px;
  width: 150px;
  border-radius: 8px;
`;

export default () => {
  const { windowHeight } = useWindowDimensions();
  const [platformValue, setPlatformValue] = useState("");

  const requestName = useInput("");
  const requestId = useInput("");

  const sendRequestHandle = () => {
    console.log("플랫폼 : " + platformValue);
    console.log("닉네임 : " + requestName.value);
    console.log("아이디 : " + requestId.value);
  };

  return (
    <CommonPage>
      <CommonPageDiv>
        <MainBgDiv windowHeight={windowHeight} url={BgImage} />
        <MainOpacityDiv style={{ backgroundColor: darkBlueColor }} />
        <MainDiv windowHeight={windowHeight}>
          <PageDiv>
            <PageBox>
              <PageHeaderDiv>
                <PageHeaderBox>
                  <HeaderFstText>
                    WATCHURS에 등록되지 않은 브로드캐스터입니다.
                  </HeaderFstText>
                  <HeaderSndText>
                    브로드캐스터 닉네임 또는 아이디를 다시 확인해주시거나
                    등록요청을 해주세요.
                  </HeaderSndText>
                  <HeaderListButton to={"/common/list"}>
                    WATCHURS 브로드캐스터 리스트
                  </HeaderListButton>
                </PageHeaderBox>
              </PageHeaderDiv>
              <RequestDiv>
                <RequestInfoDiv>
                  <RequestInfoBox>
                    <RequestTagText>플랫폼</RequestTagText>
                    <RequestPlatformBox>
                      <DropdownSelect
                        placeholder={"플랫폼 선택  "}
                        options={[
                          { id: 1, platformName: "트위치", platform: "TWITCH" },
                          {
                            id: 2,
                            platformName: "아프리카TV",
                            platform: "AFREECA"
                          }
                        ]}
                        labelField={"platformName"}
                        valueField={"platform"}
                        searchable={false}
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          width: "180px"
                        }}
                        onChange={value => {
                          setPlatformValue(value[0].platform);
                        }}
                      />
                    </RequestPlatformBox>
                  </RequestInfoBox>
                  <RequestInfoBox>
                    <RequestTagText>닉네임</RequestTagText>
                    <RequestInputText
                      placeholder={"브로드캐스터 닉네임 입력"}
                      value={requestName.value}
                      onChange={requestName.onChange}
                    />
                  </RequestInfoBox>
                  <RequestInfoBox>
                    <RequestTagText>아이디</RequestTagText>
                    <RequestInputText
                      placeholder={"브로드캐스터 아이디 입력"}
                      value={requestId.value}
                      onChange={requestId.onChange}
                    />
                  </RequestInfoBox>
                </RequestInfoDiv>
                <RequestButtonBox onClick={sendRequestHandle}>
                  등록요청
                </RequestButtonBox>
              </RequestDiv>
            </PageBox>
          </PageDiv>
        </MainDiv>
        <Footer />
      </CommonPageDiv>
    </CommonPage>
  );
};