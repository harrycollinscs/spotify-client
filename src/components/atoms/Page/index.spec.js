import React from "react";
import Page from "./index";
import { shallow } from "enzyme";

describe("Atoms/Page", () => {
  const component = <Page />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
