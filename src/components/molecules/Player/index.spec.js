import React from "react";
import Player from "./index";
import { shallow } from "enzyme";

describe("Molecules/Player", () => {
  const component = <Player />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
