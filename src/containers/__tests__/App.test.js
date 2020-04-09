import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import { FakeGame } from "../../fakes/fakeGame";

describe("App", function () {
  var app;
  beforeEach(() => {
    app = shallow(<App />);
  });
  it("should render app without fail", function () {
    shallow(<App />);
  });
  it("should contain div tags", () => {
    const div = app.find("div");
    expect(div.length).toBe(3);
  });
  it("should render header component", () => {
    const div = app.find("Header");
    expect(div.length).toBe(1);
  });
  it("should render body component", () => {
    const div = app.find("Board");
    expect(div.length).toBe(1);
  });
  it("should start a new game when new game button is clicked", () => {
    const new_game = new FakeGame();
    const app = shallow(<App game={new_game} />);
    app.find("button").first().simulate("click");
    expect(new_game.gameId).not.toBe(0);
  });
});
