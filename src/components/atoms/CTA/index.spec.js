import React from "react";
import CTA, { StyledButton } from "./index";
import { shallow } from "enzyme";

describe("Atoms/CTA", () => {
  const props = {
    primary: true,
    action: jest.fn(),
  };

  const component = <CTA {...props}>Click me!</CTA>;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });

  it("Should call action on click", () => {
    const render = shallow(component);
    render.find(StyledButton).simulate("click");
    expect(props.action).toHaveBeenCalled();
  });
});
