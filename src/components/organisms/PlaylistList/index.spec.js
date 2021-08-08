import React from "react";
import PlaylistList from "./index";
import { shallow } from "enzyme";
import PlaylistsData from "../../../__fixtures__/Playlists/index.json"

describe("Organisms/PlaylistList", () => {
  const props = {
    playlists: PlaylistsData,
  };

  const component = <PlaylistList {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
