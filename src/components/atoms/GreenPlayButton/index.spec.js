import React from "react";
import GreenPlayButton, {IconContainer } from "./index";
import { shallow } from "enzyme";

describe("Atoms/GreenPlayButton", () => {
  const props = {
    action: jest.fn(),
  };

  const component = <GreenPlayButton {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });

  it("Should call action on click", () => {
    const render = shallow(component);
    render.find(IconContainer).simulate("click");
    expect(props.action).toHaveBeenCalled();
  });
});
