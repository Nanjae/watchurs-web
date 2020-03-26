import React from "react";
import styled from "styled-components";
import IconArrow from "../../Assets/Common/IconArrow.png";
import { Link } from "react-router-dom";

const ContestCard = styled(Link)`
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
  user-select: none;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    height: 100px;
  }
  @media only screen and (min-width: 600px) {
    height: 150px;
  }
  @media only screen and (min-width: 1200px) {
    height: 200px;
  }
  @media only screen and (min-width: 1800px) {
    height: 250px;
  }
`;

const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContestImage = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  @media only screen and (max-width: 599px) {
    width: 200px;
    height: 100px;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    height: 150px;
  }
  @media only screen and (min-width: 1200px) {
    width: 400px;
    height: 200px;
  }
  @media only screen and (min-width: 1800px) {
    width: 450px;
    height: 250px;
  }
`;

const ContestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 100%;
  font-weight: bold;
  background-color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContestTitle = styled.div`
  padding: 15px;
  font-size: 22px;
  background-color: ${props => props.theme.deepBlueColor};
  color: ${props => props.theme.lightOrangeColor};
`;

const ContestFstBox = styled.div`
  padding-left: 15px;
`;

const ContestHost = styled.div`
  padding: 15px 0px;
  font-size: 18px;
`;

const ContestPlan = styled.div`
  padding: 15px 0px;
  font-size: 18px;
`;

const ContestSndBox = styled.div`
  padding-left: 15px;
  display: flex;
  justify-content: space-between;
`;

const ContestTeamCount = styled.div`
  padding: 10px 0px;
  font-size: 18px;
  color: ${props => props.theme.orangeColor};
`;

const ContestTeamButton = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.deepBlueColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.div`
  font-weight: bold;
  color: ${props => props.theme.whiteColor};
  font-size: 18px;
`;

const IconArrowRight = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  height: 18px;
  width: 18px;
  margin-left: 5px;
`;

const CardNullDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;

export default ({
  titleText = "0",
  contestBanner = "",
  hostText = "미정",
  planText = "미정",
  teamCount = "0",
  teamCurrent = "0",
  pageLink = "/"
}) => {
  return (
    <ContestCard to={pageLink}>
      {titleText === "0" && (
        <CardNullDiv>대회 입력 준비 중 입니다.</CardNullDiv>
      )}
      {titleText !== "0" && (
        <CardDiv>
          <ContestImage url={contestBanner} />
          <ContestDiv>
            <ContestTitle>{titleText}</ContestTitle>
            <ContestFstBox>
              <ContestHost>주최 : {hostText}</ContestHost>
              <ContestPlan>일정 : {planText}</ContestPlan>
            </ContestFstBox>
            <ContestSndBox>
              <ContestTeamCount>
                총 {teamCount}팀 중 {teamCurrent}팀 등록 완료
              </ContestTeamCount>
              <ContestTeamButton>
                <ButtonText>참가 팀 명단 및 일정</ButtonText>
                <IconArrowRight url={IconArrow} />
              </ContestTeamButton>
            </ContestSndBox>
          </ContestDiv>
        </CardDiv>
      )}
    </ContestCard>
  );
};
