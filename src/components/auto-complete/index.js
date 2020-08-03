import React, { useState, useEffect } from "react";

const AutoCompleteSearch = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const items = ["David", "Damien", "Sara", "Jane", "Kevin"];

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const rgx = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => rgx.test(v));
    }

    setSuggestions(suggestions);
    setText(value);
  };

  function suggestionSelected(value) {
    setText(value);
    setSuggestions([]);
  }

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input value={text} onChange={onTextChanged} type="text" />
      {renderSuggestions()}
    </div>
  );
};

export default AutoCompleteSearch;
