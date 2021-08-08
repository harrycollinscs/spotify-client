import React from "react";
import CircleImage from "./index";
import { shallow } from "enzyme";

describe("Atoms/CircleImage", () => {
  const props = {
    url: "https://i.scdn.co/image/ab6761610000e5eb3ef779aa0d271adb2b6a3ded",
  };
  
  it("Should match snapshot", () => {
    const render = shallow(<CircleImage {...props} />);
    expect(render).toMatchSnapshot();
  });
});
