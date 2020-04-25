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
  margin-bottom: 50px;
`;

const GridInner = styled.div`
  display: flex;
  min-width: 1190px;
  max-width: 1190px;
  height: 790px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 130px;
`;

const GridRow = styled.div`
  display: flex;
  width: ${(props) => props.row * 290 + (props.row - 1) * 10}px;
  height: fit-content
  flex-direction: row;
  justify-content: space-between;
`;

const GridColumn = styled.div`
  display: flex;
  width: fit-content;
  height: ${(props) => props.column * 190 + (props.column - 1) * 10}px;
  flex-direction: column;
  justify-content: space-between;
`;

export default () => {
  return (
    <GridDiv>
      <GridInner>
        <GridRow row={4}>
          <GridColumn column={2}>
            <GridRow row={1}>
              <GridBox row={1} column={2} url={bg_lol} />
            </GridRow>
          </GridColumn>
          <GridColumn column={2}>
            <GridRow row={3}>
              <GridBox row={1} column={1} url={bg_lol} />
              <GridBox row={1} column={1} />
              <GridBox row={1} column={1} />
            </GridRow>
            <GridRow row={3}>
              <GridBox
                row={2}
                column={1}
                url={bg_lol}
                text={"이경은바보"}
                textSize={28}
              />
              <GridBox row={1} column={1} />
            </GridRow>
          </GridColumn>
        </GridRow>
        <GridRow row={4}>
          <GridColumn column={2}>
            <GridRow row={2}>
              <GridBox row={1} column={1} />
              <GridBox row={1} column={1} />
            </GridRow>
            <GridRow row={2}>
              <GridBox row={1} column={1} />
              <GridBox row={1} column={1} />
            </GridRow>
          </GridColumn>
          <GridColumn column={2}>
            <GridRow row={2}>
              <GridBox row={2} column={2} />
            </GridRow>
          </GridColumn>
        </GridRow>
      </GridInner>
    </GridDiv>
  );
};
