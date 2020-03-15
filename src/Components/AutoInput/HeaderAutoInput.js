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
  background-color: ${props => props.theme.whiteColor};
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  z-index: 100;
  @media only screen and (max-width: 599px) {
    margin-top: -8px;
    margin-left: -6px;
    padding: 0px 6px;
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    margin-top: -6px;
    margin-left: -10px;
    padding: 0px 8px;
    width: 184px;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: -6px;
    margin-left: -10px;
    padding: 0px 10px;
    width: 260px;
  }
  @media only screen and (min-width: 1800px) {
    margin-top: -6px;
    margin-left: -10px;
    padding: 0px 10px;
    width: 340px;
  }
`;

const AutoSuggestionBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.purpleColor};
  @media only screen and (max-width: 599px) {
    height: 36px;
    font-size: 13px;
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    height: 40px;
    font-size: 12px;
    width: 164px;
  }
  @media only screen and (min-width: 1200px) {
    height: 40px;
    font-size: 14px;
    width: 240px;
  }
  @media only screen and (min-width: 1800px) {
    height: 40px;
    font-size: 16px;
    width: 320px;
  }
`;

const BroadcasterPlatform = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    margin-right: 4px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    margin-right: 4px;
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    margin-right: 5px;
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1800px) {
    margin-right: 5px;
    width: 18px;
    height: 18px;
  }
`;

const BroadcasterNameText = styled.div``;

const BroadcasterIdText = styled.div``;

const ArrowIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  @media only screen and (max-width: 599px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1800px) {
    width: 18px;
    height: 18px;
  }
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InputText = styled.input`
  border: 0px;
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 13px;
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    width: 159px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    width: 235px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    width: 315px;
  }
`;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  cursor: pointer;
  @media only screen and (max-width: 599px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 600px) {
    width: 14px;
    height: 14px;
  }
  @media only screen and (min-width: 1200px) {
    width: 16px;
    height: 16px;
  }
  @media only screen and (min-width: 1800px) {
    width: 18px;
    height: 18px;
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
    <SearchIcon
      onClick={() => {
        window.location.assign(
          `${window.location.origin}/detail/${inputProps.value}/1`
        );
      }}
      url={IconSearch}
    />
  </InputDiv>
);

class HeaderAutoInput extends Component {
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
      placeholder: "브로드캐스터 검색",
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

export default withRouter(HeaderAutoInput);
