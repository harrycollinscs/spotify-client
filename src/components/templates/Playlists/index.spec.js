import React from "react";
import Playlists from "./index";
import { shallow } from "enzyme";

describe("Templates/Playlists", () => {
  const component = <Playlists />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
