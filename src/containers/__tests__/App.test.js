import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", function(){
  var app;
  beforeEach(()=>{
    app=shallow(<App/>)
  })
  it("should render app without fail",function(){
    shallow(<App/>)
  })
  it("should contain div tags",()=>{
    const div =app.find("div")
    expect(div.length).toBe(2)
  })
  it("should render header component",()=>{
    const div =app.find("Header")
    expect(div.length).toBe(1)
  })
  it("should render body component",()=>{
    const div =app.find("Body")
    expect(div.length).toBe(1)
  })

})
