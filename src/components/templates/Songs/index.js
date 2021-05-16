import React from "react";
import Page from '../../atoms/Page';

const Songs = (props) => (
    <Page>
      {/* {get()}       */}
      <p>Songs</p>
    </Page>
);

const get = () => {
  let a = [];

  for (let i=0;i<100;++i) {
    a.push (
      <p>Songs</p>
    )
  } return a;
}

export default Songs;
