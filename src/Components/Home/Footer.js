import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: ${(props) => props.theme.bgFooterColor};
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInner = styled.div`
  width: 1160px;
  height: 350px;
  margin: 80px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FooterTopDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
`;

const FooterTopBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :not(:first-child) {
    margin-left: 80px;
  }
`;

const FooterTopMainTextBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FooterTopMainText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 24px;
  font-weight: 900;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const FooterTopSubTextBox = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FooterTopSubText = styled.div`
  color: ${(props) => props.theme.fontFooterColor};
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  height: 25%;
`;

const FooterBottomDiv = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
`;

const FooterBottomBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FooterBottomText = styled.div`
  color: ${(props) => props.theme.lineSubColor};
  font-size: 18px;
`;

export default () => {
  return (
    <>
      <FooterWrapper>
        <FooterInner>
          <FooterTopDiv>
            <FooterTopBox>
              <FooterTopMainTextBox>
                <FooterTopMainText>Contact to</FooterTopMainText>
                <FooterTopMainText>:: WATCHURS</FooterTopMainText>
              </FooterTopMainTextBox>
              <FooterTopSubTextBox>
                <FooterTopSubText>dngngn3045@gmail.com</FooterTopSubText>
                <FooterTopSubText>
                  개발 :
                  <FooterTopSubText style={{ marginLeft: 5, fontWeight: 500 }}>
                    Nanjae
                  </FooterTopSubText>
                </FooterTopSubText>
              </FooterTopSubTextBox>
            </FooterTopBox>
            <FooterTopBox>
              <FooterTopMainTextBox>
                <FooterTopMainText>Project</FooterTopMainText>
                <FooterTopMainText>:: Broadcaster</FooterTopMainText>
              </FooterTopMainTextBox>
              <FooterTopSubTextBox>
                <FooterTopSubText>리그 오브 레전드 : LOL</FooterTopSubText>
                <FooterTopSubText>전략적 팀 전투 : TFT</FooterTopSubText>
              </FooterTopSubTextBox>
            </FooterTopBox>
            <FooterTopBox></FooterTopBox>
          </FooterTopDiv>
          <FooterBottomDiv>
            <FooterBottomBox>
              <FooterBottomText>
                © 2020 WATCHURS. All rights reserved.
              </FooterBottomText>
            </FooterBottomBox>
          </FooterBottomDiv>
        </FooterInner>
      </FooterWrapper>
    </>
  );
};
