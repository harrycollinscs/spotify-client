import React from "react";
import Hero from "./index";
import { shallow } from "enzyme";

describe("Molecules/Hero", () => {
  const component = <Hero />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
