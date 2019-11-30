import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin: 0 auto;
  min-width: 1140px;
  width: 60%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin: 20px 0px;
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
  </FooterWrapper>
);
