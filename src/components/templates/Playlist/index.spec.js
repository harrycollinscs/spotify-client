import React from "react";
import Playlist from "./index";
import { shallow } from "enzyme";

describe("Templates/Playlist", () => {
  const props = {
    match: {
      params: {
        id: "37i9dQZF1DWZixSclZdoFE",
      },
    },
  };
  const component = <Playlist {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
