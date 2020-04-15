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
  const languageMap = [
    ["English", "en"],
    ["French", "fr"],
    ["Kinyarwanda", "krw"]
  ];
  let gameLanguages;
  gameLanguages = languageMap.map(([long, short]) => (
    <Radio
      key={long}
      onChange={onChange}
      language={language}
      languageValue={short}
      languageLabel={long}
    />
  ));
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
