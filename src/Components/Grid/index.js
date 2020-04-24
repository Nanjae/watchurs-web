import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import GridBox from "./GridBox";
import bg_lol from "../../Assets/Images/Bg/bg_lol.jpg";

const GridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const GridInner = styled.div`
  display: flex;
  min-width: 1190px;
  max-width: 1190px;
  height: 790px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 110px;
`;

const GridRow = styled.div`
  display: flex;
  width: 100%;
  height: 190px;
  justify-content: space-between;
`;

export default () => {
  return (
    <GridDiv>
      <GridInner>
        <GridRow>
          <GridBox size={1} url={bg_lol} cursor={"pointer"} />
          <GridBox
            size={2}
            url={bg_lol}
            cursor={"pointer"}
            text={"리그 오브 레전드"}
            textSize={24}
          />
          <GridBox
            size={1}
            text={"NANJAE"}
            textSize={24}
            theme={Theme.grayTrd}
          />
        </GridRow>
        <GridRow>
          <GridBox
            size={1}
            text={"디자인"}
            textSize={24}
            theme={Theme.graySnd}
          />
          <GridBox size={1} text={"하기"} textSize={24} theme={Theme.grayTrd} />
          <GridBox size={1} url={bg_lol} cursor={"pointer"} />
          <GridBox size={1} url={bg_lol} cursor={"pointer"} />
        </GridRow>
        <GridRow>
          <GridBox
            size={2}
            url={bg_lol}
            cursor={"pointer"}
            text={"전략적 팀 전투"}
            textSize={24}
          />
          <GridBox size={1} text={"싫다"} textSize={24} theme={Theme.grayFst} />
          <GridBox size={1} url={bg_lol} cursor={"pointer"} />
        </GridRow>
        <GridRow>
          <GridBox size={1} url={bg_lol} cursor={"pointer"} />
          <GridBox size={1} text={"!!!"} textSize={24} theme={Theme.graySnd} />
          <GridBox
            size={2}
            url={bg_lol}
            cursor={"pointer"}
            text={"커피는 카페라떼"}
            textSize={24}
          />
        </GridRow>
      </GridInner>
    </GridDiv>
  );
};
