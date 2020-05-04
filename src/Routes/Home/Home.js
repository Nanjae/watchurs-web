import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeDark from "../../Styles/ThemeDark";
import ThemeLight from "../../Styles/ThemeLight";
import "swiper/css/swiper.css";
import Intro from "../../Components/Home/Intro/Intro";

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.bgMainColor};
  transition: background-color 0.3s;
  @media only screen and (max-width: 575.99px) {
  }
  @media only screen and (min-width: 576px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const AboutWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutInner = styled.div`
  height: 750px;
  width: 1200px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
`;

const AboutLeftDiv = styled.div`
  height: 100%;
  width: 560px;
  display: flex;
  justify-content: flex-end;
`;

const AboutLeftInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutLeftTopDiv = styled.div`
  height: 50%;
  width: 100%;
`;

const AboutLeftTopBgTextDiv = styled.div`
  position: absolute;
  height: 375px;
  width: 375px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const AboutLeftTopBgText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 350px;
  font-family: "Monoton", sans-serif;
  opacity: 0.1;
  transition: color 0.3s;
`;

const AboutLeftTopTitleDiv = styled.div`
  position: absolute;
  height: 300px;
  width: 400px;
  margin-left: 150px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const AboutLeftTopTitleTopText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  margin-bottom: 10px;
  transition: color 0.3s;
`;

const AboutLeftTopTitleBottomText = styled.div`
  color: ${(props) => props.theme.fontMainColor};
  font-size: 70px;
  font-weight: 900;
  transition: color 0.3s;
`;

const AboutLeftBottomDiv = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0px;
`;

const AboutLeftBottomMainText = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.fontMainColor};
  line-height: 36px;
  transition: color 0.3s;
`;

const AboutLeftBottomSubText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.fontMainColor};
  line-height: 36px;
  text-align: right;
  transition: color 0.3s;
`;

const AboutRightDiv = styled.div`
  height: 100%;
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AboutRightInner = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutRightCounterDiv = styled.div`
  height: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AboutRightCounterColumn = styled.div`
  height: 225px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AboutRightCounterBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AboutRightCounterBoxInner = styled.div`
  height: 50%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AboutRightCounterBoxCount = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
`;

const AboutRightCounterBoxText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.fontMainColor};
  transition: color 0.3s;
`;

export default () => {
  const [siteTheme, setSiteTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={siteTheme ? ThemeLight : ThemeDark}>
        <Wrapper>
          <Intro siteTheme={siteTheme} setSiteTheme={setSiteTheme} />
          <AboutWrapper>
            <AboutInner>
              <AboutLeftDiv>
                <AboutLeftInner>
                  <AboutLeftTopDiv>
                    <AboutLeftTopBgTextDiv>
                      <AboutLeftTopBgText>W</AboutLeftTopBgText>
                    </AboutLeftTopBgTextDiv>
                    <AboutLeftTopTitleDiv>
                      <AboutLeftTopTitleTopText>ABOUT</AboutLeftTopTitleTopText>
                      <AboutLeftTopTitleBottomText>
                        WATCHURS
                      </AboutLeftTopTitleBottomText>
                    </AboutLeftTopTitleDiv>
                  </AboutLeftTopDiv>
                  <AboutLeftBottomDiv>
                    <AboutLeftBottomMainText>
                      Founded in 1999, ID works to deliver full interior design
                      packages from concept schemes to full scale of interior &
                      architectural refurbishments with the needed technical
                      drawings & 3D visualizations , with close attention to
                      details, managed and implemented with great care; for
                      interior construction, space planning, materials,
                      finishes, furnishings, fixtures and equipment.
                    </AboutLeftBottomMainText>
                    <AboutLeftBottomSubText>
                      {"< Let's watch yours via WATCHURS >"}
                    </AboutLeftBottomSubText>
                  </AboutLeftBottomDiv>
                </AboutLeftInner>
              </AboutLeftDiv>
              <AboutRightDiv>
                <AboutRightInner>
                  <AboutRightCounterDiv>
                    <AboutRightCounterColumn>
                      <AboutRightCounterBox>
                        <AboutRightCounterBoxInner>
                          <AboutRightCounterBoxCount>
                            35
                          </AboutRightCounterBoxCount>
                          <AboutRightCounterBoxText>
                            PROJECTS
                          </AboutRightCounterBoxText>
                        </AboutRightCounterBoxInner>
                      </AboutRightCounterBox>
                      <AboutRightCounterBox>
                        <AboutRightCounterBoxInner>
                          <AboutRightCounterBoxCount>
                            12
                          </AboutRightCounterBoxCount>
                          <AboutRightCounterBoxText>
                            EMPLOYEES
                          </AboutRightCounterBoxText>
                        </AboutRightCounterBoxInner>
                      </AboutRightCounterBox>
                    </AboutRightCounterColumn>
                    <AboutRightCounterColumn>
                      <AboutRightCounterBox>
                        <AboutRightCounterBoxInner>
                          <AboutRightCounterBoxCount>
                            120
                          </AboutRightCounterBoxCount>
                          <AboutRightCounterBoxText>
                            CONTRACTORS
                          </AboutRightCounterBoxText>
                        </AboutRightCounterBoxInner>
                      </AboutRightCounterBox>
                      <AboutRightCounterBox>
                        <AboutRightCounterBoxInner>
                          <AboutRightCounterBoxCount>
                            80
                          </AboutRightCounterBoxCount>
                          <AboutRightCounterBoxText>
                            CLIENTS
                          </AboutRightCounterBoxText>
                        </AboutRightCounterBoxInner>
                      </AboutRightCounterBox>
                    </AboutRightCounterColumn>
                  </AboutRightCounterDiv>
                </AboutRightInner>
              </AboutRightDiv>
            </AboutInner>
          </AboutWrapper>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
