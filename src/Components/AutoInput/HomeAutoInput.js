import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import { broadcasters } from "../../BroadcasterList";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";
import afreecatvLogo from "../../Assets/Afreecatv/AfreecatvLogo.png";
import { Link, withRouter } from "react-router-dom";
import IconArrow from "../../Assets/Common/IconArrow.png";
import IconSearch from "../../Assets/Common/IconSearch.png";

const AutoSuggestionDiv = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.deepBlueColor};
  cursor: pointer;
  user-select: none;
  border: 4px solid ${props => props.theme.orangeColor};
  border-top: 0px;
  border-radius: 4px;
  z-index: 100;
  @media only screen and (max-width: 599px) {
    margin-top: -6px;
    margin-left: -4px;
    padding: 0px;
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: -6px;
    margin-left: -4px;
    padding: 0px 10px;
    width: 440px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: -6px;
    margin-left: -4px;
    padding: 0px 10px;
    width: 710px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: -6px;
    margin-left: -4px;
    padding: 0px 10px;
    width: 910px;
  }
`;

const AutoSuggestionBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.twitchColor};
  @media only screen and (max-width: 599px) {
    font-size: 12px;
    width: 90%;
    margin-left: 8px;
  }
  @media only screen and (min-width: 600px) {
    width: 430px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1200px) {
    width: 600px;
    font-size: 16px;
  }
  @media only screen and (min-width: 1800px) {
    width: 800px;
    font-size: 18px;
  }
`;

const BroadcasterPlatform = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 5px;
  @media only screen and (max-width: 599px) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 600px) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1200px) {
    width: 18px;
    height: 18px;
  }
  @media only screen and (min-width: 1800px) {
    width: 20px;
    height: 20px;
  }
`;

const BroadcasterNameText = styled.div``;

const BroadcasterIdText = styled.div``;

const ArrowIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  @media only screen and (min-width: 600px) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1200px) {
    width: 18px;
    height: 18px;
  }
  @media only screen and (min-width: 1800px) {
    width: 20px;
    height: 20px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 599px) {
    width: 100%;
    height: 40px;
  }
  @media only screen and (min-width: 600px) {
    width: fit-content;
    height: 48px;
  }
  @media only screen and (min-width: 1200px) {
    width: fit-content;
    height: 54px;
  }
  @media only screen and (min-width: 1800px) {
    width: fit-content;
    height: 60px;
  }
`;

const InputText = styled.input`
  border: 0px;
  font-weight: bold;
  background-color: ${props => props.theme.deepBlueColor};
  color: ${props => props.theme.whiteColor};
  @media only screen and (max-width: 599px) {
    padding: 0px;
    margin: 0px;
    padding-left: 10px;
    font-size: 12px;
    width: 80%;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px;
    margin: 0px;
    padding-left: 15px;
    font-size: 14px;
    width: 445px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px;
    margin: 0px;
    padding-left: 15px;
    font-size: 16px;
    width: 715px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px;
    margin: 0px;
    padding-left: 15px;
    font-size: 18px;
    width: 915px;
  }
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.orangeColor};
  @media only screen and (max-width: 599px) {
    width: 46px;
    height: 42px;
  }
  @media only screen and (min-width: 600px) {
    width: 55px;
    height: 48px;
  }
  @media only screen and (min-width: 1200px) {
    width: 62px;
    height: 54px;
  }
  @media only screen and (min-width: 1800px) {
    width: 69px;
    height: 60px;
  }
`;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    width: 24px;
    height: 24px;
  }
  @media only screen and (min-width: 600px) {
    width: 32px;
    height: 32px;
  }
  @media only screen and (min-width: 1200px) {
    width: 36px;
    height: 36px;
  }
  @media only screen and (min-width: 1800px) {
    width: 40px;
    height: 40px;
  }
`;

const broadcasterList = broadcasters;

const getSuggestions = value => {
  const inputName = value.trim().toLowerCase();
  const inputId = value.trim().toLowerCase();
  const inputLength = inputName.length;

  return inputLength === 0
    ? []
    : broadcasterList.filter(
        broad =>
          broad.bName.toLowerCase().includes(inputName) ||
          broad.bId.toLowerCase().slice(0, inputLength) === inputId
      ).length === 0
    ? [{ bName: "", bId: "", bPlatform: "" }]
    : broadcasterList.filter(
        broad =>
          broad.bName.toLowerCase().includes(inputName) ||
          broad.bId.toLowerCase().slice(0, inputLength) === inputId
      );
};

const getSuggestionValue = suggestion => suggestion.bName;

const renderSuggestion = suggestion => {
  return suggestion.bId === "" ? (
    <AutoSuggestionDiv>
      <AutoSuggestionBox to={""}>검색 결과 없음</AutoSuggestionBox>
    </AutoSuggestionDiv>
  ) : (
    <AutoSuggestionDiv to={`/detail/${suggestion.bId}/1`}>
      <AutoSuggestionBox>
        <BroadcasterPlatform
          url={
            suggestion.bPlatform === "TWITCH"
              ? twitchLogo
              : suggestion.bPlatform === "AFREECATV"
              ? afreecatvLogo
              : twitchLogo
          }
        />
        <BroadcasterNameText>{suggestion.bName}</BroadcasterNameText>
        <BroadcasterIdText>({suggestion.bId})</BroadcasterIdText>
      </AutoSuggestionBox>
      <ArrowIcon url={IconArrow} />
    </AutoSuggestionDiv>
  );
};

const renderInputComponent = inputProps => (
  <InputDiv>
    <InputText
      onKeyPress={event => {
        console.log(event.key);
        if (event.key === "Enter") {
          window.location.assign(
            `${window.location.origin}/detail/${inputProps.value}/1`
          );
        }
      }}
      {...inputProps}
    />
    <SearchIconBox>
      <SearchIcon
        onClick={() => {
          window.location.assign(
            `${window.location.origin}/detail/${inputProps.value}/1`
          );
        }}
        url={IconSearch}
      />
    </SearchIconBox>
  </InputDiv>
);

class HomeAutoInput extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "브로드캐스터 닉네임 또는 아이디를 입력해주세요.",
      value,
      onChange: this.onChange
    };

    return (
      <div style={{ width: "100%" }}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderInputComponent={renderInputComponent}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default withRouter(HomeAutoInput);
