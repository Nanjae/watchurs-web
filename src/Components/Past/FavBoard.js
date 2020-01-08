import React from "react";
import styled from "styled-components";
import emblemPlatinum from "../Assets/League/EmblemPlatinum.png";
import positionTop from "../Assets/League/PositionTop.png";
import positionJgl from "../Assets/League/PositionJgl.png";
import positionMid from "../Assets/League/PositionMid.png";
import positionAdc from "../Assets/League/PositionAdc.png";
import positionSup from "../Assets/League/PositionSup.png";

const Wrapperr = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
const Wrapper = styled.div``;

const FavDiv = styled.div`
  width: 330px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bTheme};
  padding-top: 5px;
`;
const FavTable = styled.div`
  min-width: 300px;
  height: 40px;
  background-color: ${props => props.theme.cTheme};
  border-bottom: 5px solid ${props => props.theme.bTheme};
`;
const FavCard = styled.div`
  min-width: 350px;
  height: 50px;
  background-color: ${props => props.theme.eTheme};
  border-bottom: 5px solid ${props => props.theme.bTheme};
`;

const FavFooterr = styled.div`
  width: 100%;
  text-align: right;
  color: ${props => props.theme.cTheme};
  font-weight: bold;
  margin-bottom: 5px;
  margin-right: 15px;
  font-size: 10px;
`;
const FavFooter = styled.div`
  text-align: right;
  color: ${props => props.theme.cTheme};
  font-weight: bold;
  margin-bottom: 5px;
`;

const Wrappera = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const FavDiva = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bTheme};
  padding-top: 5px;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${props => props.theme.cTheme};
`;

const FavTablea = styled.div`
  width: 100%;
  height: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background-color: ${props => props.theme.cTheme};
  border-bottom: 5px solid ${props => props.theme.bTheme}; */
`;
const FavTeamText = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.dTheme};
`;
const FavCarda = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${props => props.theme.aTheme};
  /* border-bottom: 5px solid ${props => props.theme.bTheme}; */
  display: flex;
  justify-content: flex-end;
  border-radius: 8px;
  margin-bottom: 5px;
`;

const FavFootera = styled.div`
  text-align: right;
  color: ${props => props.theme.cTheme};
  font-weight: bold;
  margin-top: 5px;
`;

const FavAvatar = styled.div`
  margin-top: 5px;
  width: 90px;
  height: 90px;
  background-size: cover;
  background-image: url(${props => props.url});
  margin-right: 20px;
  border-radius: 8px;
`;

const FavTierDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const FavEmblem = styled.div`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-image: url(${props => props.url});
`;

const FavTierText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.eTheme};
  margin-top: 10px;
`;
const FavInfoDiv = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FavBNameText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.theme.eTheme};
`;
const FavSNameText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.fTheme};
`;

const FavPosDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FavPosIcon = styled.div`
  margin-top: 3px;
  width: 60px;
  height: 60px;
  background-size: cover;
  background-image: url(${props => props.url});
`;
const FavPosText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.eTheme};
  margin-top: 7px;
`;

const FavBoard = () => {
  return (
    <Wrapperr>
      {/* <Wrapper>
        <FavDiv>
          <FavTable></FavTable>
          <FavFooterr>업데이트 시간 : 19-11-06</FavFooterr>
          <FavCard></FavCard>
          <FavCard></FavCard>
          <FavCard></FavCard>
          <FavCard></FavCard>
          <FavCard></FavCard>
          <FavFooter>와쳐스 watchurs.com</FavFooter>
        </FavDiv>
      </Wrapper> */}{" "}
      <Wrappera>
        <FavDiva>
          <FavTablea>
            <FavTeamText>팀 2633</FavTeamText>
          </FavTablea>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionTop} />
              <FavPosText>TOP</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/dbb514f1-469b-479e-b5ba-3ac0f09a2776-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>얍얍</FavBNameText>
              <FavSNameText>귀살대 네즈코</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionJgl} />
              <FavPosText>JGL</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/3ec0a387-fb62-496e-8edc-5da90b60eb3c-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>피유</FavBNameText>
              <FavSNameText>루마유피</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅱ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionMid} />
              <FavPosText>MID</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/1d987a8ba88e252b-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>한동숙</FavBNameText>
              <FavSNameText>올뮤트가답</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionAdc} />
              <FavPosText>ADC</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/d1c04945-21aa-4e5b-8b94-86f2be895e0d-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>룩삼</FavBNameText>
              <FavSNameText>525 김진효</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionSup} />
              <FavPosText>SUP</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/8b94d95d-36f8-4eac-b9db-7c2756f712f2-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>이초홍</FavBNameText>
              <FavSNameText>소주맥주이희주</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavFootera>와쳐스 watchurs.com</FavFootera>
        </FavDiva>
      </Wrappera>
      <Wrappera>
        <FavDiva>
          <FavTablea>
            <FavTeamText>팀 2633</FavTeamText>
          </FavTablea>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionTop} />
              <FavPosText>TOP</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/dbb514f1-469b-479e-b5ba-3ac0f09a2776-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>얍얍</FavBNameText>
              <FavSNameText>귀살대 네즈코</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionJgl} />
              <FavPosText>JGL</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/3ec0a387-fb62-496e-8edc-5da90b60eb3c-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>피유</FavBNameText>
              <FavSNameText>루마유피</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅱ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionMid} />
              <FavPosText>MID</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/1d987a8ba88e252b-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>한동숙</FavBNameText>
              <FavSNameText>올뮤트가답</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionAdc} />
              <FavPosText>ADC</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/d1c04945-21aa-4e5b-8b94-86f2be895e0d-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>룩삼</FavBNameText>
              <FavSNameText>525 김진효</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavCarda>
            <FavPosDiv>
              <FavPosIcon url={positionSup} />
              <FavPosText>SUP</FavPosText>
            </FavPosDiv>
            <FavAvatar
              url={
                "https://static-cdn.jtvnw.net/jtv_user_pictures/8b94d95d-36f8-4eac-b9db-7c2756f712f2-profile_image-300x300.png"
              }
            />
            <FavInfoDiv>
              <FavBNameText>이초홍</FavBNameText>
              <FavSNameText>소주맥주이희주</FavSNameText>
            </FavInfoDiv>
            <FavTierDiv>
              <FavEmblem url={emblemPlatinum} />
              <FavTierText>플래티넘 Ⅳ</FavTierText>
            </FavTierDiv>
          </FavCarda>
          <FavFootera>와쳐스 watchurs.com</FavFootera>
        </FavDiva>
      </Wrappera>
    </Wrapperr>
  );
};

export default FavBoard;
