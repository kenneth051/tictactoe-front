import React from 'react';
import { shallow } from 'enzyme';
import Language from "../language";
import { Game } from "../../../game/game";

 describe("Language",()=>{
     it("should render language component without fail",()=>{
         shallow(<Language/>)
     })
     it("should change the language when a radio button is checked",()=>{
        const new_game = new Game(null);
        const component = shallow(<Language game={new_game} />);
        component.find(".radio1").simulate("click",{target:{value:"english"}});
        expect(new_game.language).toBe("english")
    })
    it("should change the language when a radio button is checked",()=>{
        const new_game = new Game(null);
        const component = shallow(<Language game={new_game} />);
        component.find(".radio2").simulate("click",{target:{value:"english"}});
        expect(new_game.language).toBe("english")
    })
    it("should change the language when a radio button is checked",()=>{
        const new_game = new Game(null);
        const component = shallow(<Language game={new_game} />);
        component.find(".radio3").simulate("click",{target:{value:"english"}});
        expect(new_game.language).toBe("english")
    })
 })