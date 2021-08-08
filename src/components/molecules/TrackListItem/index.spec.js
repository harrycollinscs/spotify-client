import React from "react";
import TrackListItem from "./index";
import { shallow } from "enzyme";
import TrackData from "../../../__fixtures__/Track/TrackListItem";

describe("Molecules/TrackListItem", () => {
  const component = <TrackListItem {...TrackData} />;

  it("Should match snapshot", () => {
    const render = shallow(component);
    expect(render).toMatchSnapshot();
  });
});
