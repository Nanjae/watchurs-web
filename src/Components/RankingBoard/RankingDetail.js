import React from "react";
import styled from "styled-components";
import statistic from "../../Assets/Common/Statistic.png";

const RankingDetailDiv = styled.div`
  position: fixed;
  right: 2.5%;
  width: 360px;
  height: 400px;
  background-color: ${props => props.theme.gTheme};
`;

const DetailDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.jTheme};
`;

const Statistic = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-bottom: 20px;
`;
const DetailText = styled.div`
  text-align: center;
  line-height: 18px;
`;

export default () => {
  return (
    <RankingDetailDiv>
      <DetailDiv>
        <Statistic url={statistic} />
        <DetailText>
          리스트에서 브로드캐스터를 선택하시면
          <br />
          최근 전적 통계를 보실 수 있습니다.
        </DetailText>
      </DetailDiv>
    </RankingDetailDiv>
  );
};
