import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const RankingLinkDiv = styled.div`
  width: 1140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const LinkButton = styled(Link)`
  width: 80px;
  min-width: 80px;
  height: 40px;
  margin: 0px 20px;
  background-color: ${props => props.theme.bTheme};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const LinkText = styled.div`
  color: ${props => props.theme.eTheme};
  font-weight: bold;
`;

export default withRouter(() => {
  return (
    <RankingLinkDiv>
      <LinkButton to={"/ranking/1"}>
        <LinkText>1 페이지</LinkText>
      </LinkButton>
      <LinkButton to={"/ranking/2"}>
        <LinkText>2 페이지</LinkText>
      </LinkButton>
      {/* <LinkButton to={"/ranking/3"}>
        <LinkText>3 페이지</LinkText>
      </LinkButton> */}
    </RankingLinkDiv>
  );
});
