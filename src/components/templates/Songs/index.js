import React, { PureComponent } from "react";
import { getMyTopTracks } from "../../../api/songs";
import Page from "../../atoms/Page";
import Hero from "../../molecules/Hero";
import styled from 'styled-components';
import TrackList from "../../organisms/TrackList";

const ContentContainer = styled.div`
  padding: 30px 100px 30px 100px;
`;

const StyledTitle = styled.h2`
  font-weight: bold;
  padding-bottom: 20px;
`;

class Songs extends PureComponent {
  componentDidMount() {
    const { userTopTracks } = this.props;
    getMyTopTracks(userTopTracks.length);
  }

  locale = {
    heroTitle: "Songs",
    heroContent: "Here you can find your most played songs",
  };

  render() {
    const { userTopTracks } = this.props;
    return (
      <Page>
        <Hero title={this.locale.heroTitle} content={this.locale.heroContent} />
          <ContentContainer>
            <StyledTitle>Most played tracks</StyledTitle>
            {
            userTopTracks ? <TrackList tracks={userTopTracks} /> : (
              <p style={{ color: "black" }}>No tracks found</p>
            )}
          </ContentContainer>
      </Page>
    );
  }
}

export default Songs;
