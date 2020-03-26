import React from "react";
import styled from "styled-components";
import TeamPartyCard from "./TeamPartyCard";

const TeamDetailCard = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const TeamNameBox = styled.div`
  width: 75%;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  border: 2px solid ${props => props.theme.brownColor};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props => props.theme.blackColor};
  color: ${props => props.theme.lightOrangeColor};
`;

const TeamNameText = styled.div`
  padding: 15px;
`;

const PartyInfoDiv = styled.div`
  width: 100%;
`;

export default ({ teamName, participant = ["", "", "", "", ""] }) => {
  return (
    <TeamDetailCard>
      <TeamNameBox>
        <TeamNameText>{teamName}</TeamNameText>
      </TeamNameBox>
      <PartyInfoDiv>
        {participant.map((broadcasterName, index) => {
          return (
            <TeamPartyCard
              to={broadcasterName}
              key={index}
              broadcasterName={broadcasterName}
            />
          );
        })}
      </PartyInfoDiv>
    </TeamDetailCard>
  );
};
