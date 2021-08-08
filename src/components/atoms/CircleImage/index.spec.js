import React from "react";
import CircleImage from "./index";
import { shallow } from "enzyme";

describe("Atoms/CircleImage", () => {
  it("Should match snapshot", () => {
    const render = shallow(<CircleImage />);
    expect(render).toMatchSnapshot();
  });
});
