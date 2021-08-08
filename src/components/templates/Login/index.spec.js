import React from "react";
import Login from "./index";
import { shallow } from "enzyme";

describe("Templates/Login", () => {

  const component = <Login />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
