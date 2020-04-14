import React, { useState, useEffect } from "react";
import Radio from "../language/radiobuttons";
import "./language.css";

const Language = props => {
  const [language, setLanguage] = useState();
  const { game } = props;
  useEffect(() => {
    setLanguage(game.language);
  }, [game]);

  const onChange = e => {
    setLanguage(e.target.value);
    game.setlanguage(e.target.value);
  };
  const languageObj = {
    English: "en",
    French: "fr",
    Kinyarwanda: "krw"
  };
  let gameLanguages = [];
  for (const languageKey in languageObj) {
    gameLanguages.push(
      <Radio
        key={languageKey}
        onChange={onChange}
        language={language}
        languageValue={languageObj[languageKey]}
        languageLabel={languageKey}
      />
    );
  }
  return (
    <div className="radios language-text">
      <span>
        <h5>Choose Language</h5>
      </span>
      {gameLanguages}
    </div>
  );
};

export default Language;
