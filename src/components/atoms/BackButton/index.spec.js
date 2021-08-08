import React from 'react';
import BackButton from './index';
import { shallow } from 'enzyme';

describe("Atoms/BackButton", () => {
  it("Should match snapshot", () => {
    const render = shallow(<BackButton />);
    expect(render).toMatchSnapshot();
  });
});
