import React from "react";
import Artists from "./index";
import { shallow } from "enzyme";

describe("Templates/Artists", () => {

  const component = <Artists />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
