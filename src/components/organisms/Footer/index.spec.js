import React from "react";
import Footer from "./index";
import { shallow } from "enzyme";

describe("Organisms/Footer", () => {
  const component = <Footer />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
