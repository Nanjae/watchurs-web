import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

const FooterLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 250px;
  height: 100%;
`;

const FooterRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  height: 100%;
`;

const Footer = styled.footer`
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  min-width: 1140px;
  margin: 10px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Link = styled.div`
  color: ${props => props.theme.mainColor};
  cursor: pointer;
`;

const Copyright = styled.div`
  color: ${props => props.theme.darkGrayColor};
`;

export default () => (
  <FooterWrapper>
    <FooterLeft />
    <Footer>
      <List>
        <ListItem>
          <Link href="#">WATCHURS란?</Link>
        </ListItem>
        <ListItem>
          <Link href="#">개발자</Link>
        </ListItem>
      </List>
      <Copyright>
        ⓒ {new Date().getFullYear()} WATCHURS FOR BROADCAST PLATFORMS
      </Copyright>
    </Footer>
    <FooterRight />
  </FooterWrapper>
);
