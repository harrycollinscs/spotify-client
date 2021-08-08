import React from "react";
import TrackList from "./index";
import { shallow } from "enzyme";
import TracksData from "../../../__fixtures__/Tracks/index";

describe("Organisms/TrackList", () => {
  const props = {
    tracks: TracksData,
  };

  const component = <TrackList {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
