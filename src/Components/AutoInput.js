import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";

const AutoSuggestDiv = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.grayColor};
  cursor: pointer;
  border: 2px solid ${props => props.theme.lightGrayColor};
`;

const Container = styled.input`
  border: 0px;
  padding: 0px;
  margin: 0px;
  width: 90%;
  font-weight: bold;
  @media only screen and (max-width: 599px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 16px;
  }
`;

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    bName: "얍얍",
    bId: "yapyap30",
    bPlatform: "TWITCH"
  },
  {
    bName: "한동숙",
    bId: "yapyap20",
    bPlatform: "TWITCH"
  },
  { bName: "룩삼", bId: "yapyap10", bPlatform: "TWITCH" }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputName = value.trim().toLowerCase();
  const inputId = value.trim().toLowerCase();
  const inputLength = inputName.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang =>
          lang.bName.toLowerCase().slice(0, inputLength) === inputName ||
          lang.bId.toLowerCase().slice(0, inputLength) === inputId
      ).length === 0
    ? [{ bName: "", bId: "", bPlatform: "" }]
    : languages.filter(
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
    <AutoSuggestDiv>검색 결과 없음</AutoSuggestDiv>
  ) : (
    <AutoSuggestDiv>{suggestion.bName}</AutoSuggestDiv>
  );
};

const renderInputComponent = inputProps => <Container {...inputProps} />;

export default class AutoInput extends Component {
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

  onChange = (event, { newValue }) => {
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
