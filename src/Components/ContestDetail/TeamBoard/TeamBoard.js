import React from "react";
import styled from "styled-components";
import TeamDetailCard from "./TeamDetailCard";

const TeamBoard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.grayColor};
  width: 100%;
`;

const TeamBoardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  return (
    <TeamBoard>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"틀벤져스"}
          participant={["따균", "승옥", "＃김동하", "BJ꼬꼬갓", "토토로★"]}
        />
        <TeamDetailCard
          teamName={"조용히우승할게요"}
          participant={["제제-", "블루리쉬", "카브욤", "BJ_슈", "에프람"]}
        />
      </TeamBoardDiv>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"피닉스박네버다이"}
          participant={["꿀탱탱", "제동빠", "양여명808", "종탁이", "원빈이1"]}
        />
        <TeamDetailCard
          teamName={"식과함께"}
          participant={["우민2", "수입뿌드", "강만식", "BJ갱제", "[HS]희성"]}
        />
      </TeamBoardDiv>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"저쥐문데기"}
          participant={[
            "BJ푸른문어",
            "저라뎃",
            "최기명",
            "괴물쥐123",
            "데스티니:D"
          ]}
        />
        <TeamDetailCard
          teamName={"종글차이"}
          participant={[
            "키사이",
            "종학잇",
            "율천고최현우",
            "BJ닭쳐",
            "부들부들대졍"
          ]}
        />
      </TeamBoardDiv>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"이태원 쿠라쓰"}
          participant={["스맵임", "호진LEE", "롤선생", "프으레이", "레이스7"]}
        />
        <TeamDetailCard
          teamName={"애송이들"}
          participant={["인간이덕팔", "녕재", "미으르", "일루오뀨", "d펠다"]}
        />
      </TeamBoardDiv>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"요종도~"}
          participant={["김명치.", "김무진-", "백크.", "레이닝1", "BJ하얀눈길"]}
        />
        <TeamDetailCard
          teamName={"DDRX"}
          participant={["세체뽀", "블라써엄", "로렌", "뜨뜨뜨뜨-", "꿈의남자"]}
        />
      </TeamBoardDiv>
      <TeamBoardDiv>
        <TeamDetailCard
          teamName={"짱구는못말려"}
          participant={["BJ수찬", "준밧드", "김민교.", "Axiyo", "BJ나는눈꽃"]}
        />
        <TeamDetailCard
          teamName={"로생충"}
          participant={["린다랑b", "BJ로이조", "이엣지", "으댜다", "dhxodidh"]}
        />
      </TeamBoardDiv>
    </TeamBoard>
  );
};
