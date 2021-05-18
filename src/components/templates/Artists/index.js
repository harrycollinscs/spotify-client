import React from "react";
import Page from '../../atoms/Page';
import Hero from "../../molecules/Hero";

const locale = {
  heroTitle: "Artists",
  heroContent: 
    "Here you can find your recently played artists and your most played artists",
}

const Artists = (props) => (
    <Page>
      <Hero title={locale.heroTitle} content={locale.heroContent}/>
    </Page>
);

export default Artists;
