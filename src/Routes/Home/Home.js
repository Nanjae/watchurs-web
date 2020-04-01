import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import introBanner from "../../Assets/Images/labtop_coffee.jpg";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1780px;
  background-color: ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 840px;
  width: 100%;
`;

const ContentInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 1440px;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const IntroDiv = styled.div`
  padding-top: 76px;
  width: 70%;
  height: fit-content;
`;

const IntroTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

const IntroAuthor = styled.div`
  display: flex;
  margin: 60px 0px;
`;

const IntroContents = styled.div``;

const IntroText = styled.div``;

const IntroBanner = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <ContentDiv style={{ backgroundColor: Theme.gray }}>
        <ContentInner>
          <ContentBox>
            <IntroDiv>
              <IntroTitle style={{ marginBottom: 10 }}>WATCHURS</IntroTitle>
              <IntroTitle>= WATCH + YOURS</IntroTitle>
              <IntroAuthor>
                <IntroText style={{ marginRight: 5 }}>made by</IntroText>
                <IntroText style={{ fontWeight: 500 }}>Nanjae</IntroText>
              </IntroAuthor>
              <IntroContents>
                <IntroText style={{ lineHeight: 2.5 }}>
                  I’ll go on a limb and say that even if you generally don’t
                  like raisins in baked goods, you’ll like these cookies. I’m
                  confident because I...generally don’t like raisins in baked
                  goods. Soaking them in whiskey before baking gives them
                  fantastic flavor and a softer, chewier texture. If you’re not
                  feeling the whiskey, you could go for rum or, of course,
                  simply warm water. But don’t skip the step of soaking them,
                  it’s key. Toasting the oats in the oven is optional, but it
                  does bring a nuttier flavor out in these cookies. (A step
                  learned from Julia Turshen’s Small Victories.)
                </IntroText>
              </IntroContents>
            </IntroDiv>
          </ContentBox>
          <ContentBox>
            <IntroBanner url={introBanner} />
          </ContentBox>
        </ContentInner>
      </ContentDiv>
      <ContentDiv style={{ backgroundColor: Theme.white }}>
        스크롤 테스트
      </ContentDiv>
      <ContentDiv style={{ backgroundColor: "black", color: "white" }}>
        스크롤 테스트
      </ContentDiv>
      <ContentDiv style={{ backgroundColor: Theme.white }}>
        스크롤 테스트
      </ContentDiv>
    </Wrapper>
  );
};
