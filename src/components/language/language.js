import React, { useState, useEffect } from "react";
import "./language.css";

const Language = props => {
  const [language, setLanguage] = useState();
  const { game } = props;
  useEffect(() => {
    setLanguage(game.language);
  });

  const onChange = e => {
    setLanguage(e.target.value);
    game.setlanguage(e.target.value);
  };

  return (
    <div className="radios language-text">
      <span>
        <h5>Choose Language</h5>
      </span>
      <div className="form-check">
        <input
          className="form-check-input radio1"
          type="radio"
          name="exampleRadios"
          value="en"
          checked={language === "en"}
          onClick={e => {
            onChange(e);
          }}
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          English
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input radio2"
          type="radio"
          name="exampleRadios"
          value="fr"
          checked={language === "fr"}
          onClick={e => {
            onChange(e);
          }}
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          French
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input radio3"
          type="radio"
          name="radiobutton3"
          value="krw"
          checked={language === "krw"}
          onClick={e => {
            onChange(e);
          }}
        />
        <label className="form-check-label" htmlFor="exampleRadios3">
          Kinyarwanda
        </label>
      </div>
    </div>
  );
};

export default Language;
