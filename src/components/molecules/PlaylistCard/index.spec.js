import React from "react";
import PlaylistCard from "./index";
import { shallow } from "enzyme";
import PlaylistData from "../../../__fixtures__/Playlist/index.json"

describe("Molecules/PlaylistCard", () => {
  const props = {
    playlist: PlaylistData,
  };

  const component = <PlaylistCard {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
