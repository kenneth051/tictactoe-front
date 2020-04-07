import React from 'react';
import { shallow } from 'enzyme';
import Header from "../headers";

 describe("Header",()=>{
     it("should render a header without fail",()=>{
         shallow(<Header/>)
     })
 })