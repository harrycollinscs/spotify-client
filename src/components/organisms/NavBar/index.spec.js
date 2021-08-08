import React from "react";
import NavBar from "./index";
import { shallow } from "enzyme";

describe("Organisms/NavBar", () => {
  const props = {
    links: [
      {
        title: "Songs",
        route: "/songs",
      },
      {
        title: "Artists",
        route: "/artists",
      },
      {
        title: "Playlists",
        route: "/playlists",
      },
    ],
  };

  const component = <NavBar {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
