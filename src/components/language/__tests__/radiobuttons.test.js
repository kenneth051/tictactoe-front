import React from "react";
import { shallow } from "enzyme";
import Radio from "../radiobuttons";

describe("Language", () => {
  it("should render Radio component without fail", () => {
    shallow(<Radio />);
  });
  it("should call onChange function when a radio button is clicked", () => {
    const onChange = jest.fn();
    const language = "english";
    const component = shallow(
      <Radio
        onChange={onChange}
        language={language}
        languageValue={language}
        languageLabel={language}
      />
    );
    component.find(".radio1").simulate("click", { target: { value: true } });
    expect(onChange).toHaveBeenCalled();
  });
});
