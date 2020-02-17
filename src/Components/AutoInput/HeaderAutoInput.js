import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import { broadcasters } from "../../BroadcasterList";
import twitchLogo from "../../Assets/Twitch/TwitchLogo.png";
import { Link, withRouter } from "react-router-dom";
import IconArrow from "../../Assets/Common/IconArrow.png";
import IconSearch from "../../Assets/Common/IconSearch.png";

const AutoSuggestionDiv = styled(Link)`
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.whiteColor};
  padding: 0px 10px;
  margin-left: -10px;
  margin-top: -6px;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
`;

const AutoSuggestionBox = styled.div`
  height: 40px;
  width: 310px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.purpleColor};
`;

const BroadcasterPlatform = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const BroadcasterNameText = styled.div``;

const BroadcasterIdText = styled.div``;

const ArrowIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 18px;
  height: 18px;
`;

const InputDiv = styled.div`
  display: flex;
`;

const InputText = styled.input`
  border: 0px;
  width: 315px;
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    padding: 0px;
    margin: 0px;
    font-size: 13px;
  }
  @media only screen and (min-width: 600px) {
    padding: 0px;
    margin: 0px;
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0px;
    margin: 0px;
    font-size: 14px;
  }
  @media only screen and (min-width: 1800px) {
    padding: 0px;
    margin: 0px;
    margin-right: 5px;
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const SearchIcon = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

// Imagine you have a list of languages that you'd like to autosuggest.
const broadcasterList = broadcasters;

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputName = value.trim().toLowerCase();
  const inputId = value.trim().toLowerCase();
  const inputLength = inputName.length;

  return inputLength === 0
    ? []
    : broadcasterList.filter(
        lang =>
          lang.bName.toLowerCase().slice(0, inputLength) === inputName ||
          lang.bId.toLowerCase().slice(0, inputLength) === inputId
      ).length === 0
    ? [{ bName: "", bId: "", bPlatform: "" }]
    : broadcasterList.filter(
        lang =>
          lang.bName.toLowerCase().slice(0, inputLength) === inputName ||
          lang.bId.toLowerCase().slice(0, inputLength) === inputId
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.bName;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => {
  return suggestion.bId === "" ? (
    <AutoSuggestionDiv>
      <AutoSuggestionBox to={""}>검색 결과 없음</AutoSuggestionBox>
    </AutoSuggestionDiv>
  ) : (
    <AutoSuggestionDiv to={`/detail/${suggestion.bId}/1`}>
      <AutoSuggestionBox>
        <BroadcasterPlatform
          url={suggestion.bPlatform === "TWITCH" ? twitchLogo : null}
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

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
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

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "브로드캐스터 검색",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        inputProps={inputProps}
      />
    );
  }
}

export default withRouter(HeaderAutoInput);
