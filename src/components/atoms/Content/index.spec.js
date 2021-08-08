import React from "react";
import Content from "./index";
import { shallow } from "enzyme";

describe("Atoms/Content", () => {
  it("Should match snapshot", () => {
    const render = shallow(<Content />);
    expect(render).toMatchSnapshot();
  });
});
