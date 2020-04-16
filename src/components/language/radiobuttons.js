import React from "react";

const Radio = props => {
  const { onChange, language, languageValue, languageLabel } = props;
  return (
    <div className="form-check">
      <input
        className="form-check-input radio1"
        type="radio"
        name="exampleRadios"
        value={languageValue}
        checked={language === languageValue}
        onClick={onChange}
      />
      <label className="form-check-label" htmlFor="exampleRadios1">
        {languageLabel}
      </label>
    </div>
  );
};

export default Radio;
