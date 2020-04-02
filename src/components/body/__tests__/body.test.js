import React from "react";
import { shallow } from "enzyme";
import Body from "../body";

describe("Body", () => {
  it("should render a header without fail", () => {
    shallow(<Body />);
  });
});
