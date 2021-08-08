import React from "react";
import Home from "./index";
import { shallow } from "enzyme";

describe("Templates/Home", () => {
  const props = {
    user: {
      id: 'TestUsername',
    }
  }

  const component = <Home {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
