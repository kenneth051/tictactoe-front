import React from 'react';
import { shallow } from 'enzyme';
import Language from "../language";
import { Game } from "../../../game/game";

 describe("Language",()=>{
    var language;
    var new_game;
    beforeEach(() => {
         new_game = new Game(null);
        language = shallow(<Language game={new_game}  />);
    });
     it("should render language component without fail",()=>{
         shallow(<Language/>)
     })
     it("should render radio buttton componnt without fail", () => {
        const radio = language.find("Radio");
        expect(radio.length).toBe(3);
      });
 })