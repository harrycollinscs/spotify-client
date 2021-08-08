import React from "react";
import Songs from "./index";
import { shallow } from "enzyme";
import TopTracksData from "../../../__fixtures__/Tracks/TopTracks/index";

describe("Templates/Songs", () => {
  const props = {
    userTopTracks: TopTracksData,
  };
  const component = <Songs {...props} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
