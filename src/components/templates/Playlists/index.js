import React, { PureComponent } from "react";
import styled from "styled-components";
import { getMyPlaylists } from "../../../api/playlists";
import Page from "../../atoms/Page";
import Hero from "../../molecules/Hero";
import PlaylistList from "../../organisms/PlaylistList";

const ContentContainer = styled.div`
  padding: 30px 100px 30px 100px;
`;

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  font-weight: bold;
  padding-bottom: 20px;
`;

class Playlists extends PureComponent {
  componentDidMount() {
    const { userPlaylists } = this.props;
    getMyPlaylists(userPlaylists.length);
  }

  locale = {
    heroTitle: "Playlists",
    heroContent: "Here you can find the playlists you listen to most often",
  };

  render() {
    const { userPlaylists } = this.props;
    const halfLength = userPlaylists.length / 2;

    return (
      <Page>
        <Hero title={this.locale.heroTitle} content={this.locale.heroContent} />
        <ContentContainer>
        <StyledTitle>Your playlists</StyledTitle>
          {userPlaylists ? (
            <PlaylistsContainer>
              <PlaylistList playlists={userPlaylists.splice(0, halfLength)} />
              <PlaylistList playlists={userPlaylists.splice(-halfLength)} />
            </PlaylistsContainer>
          ) : (
            <p>No data available</p>
          )}
        </ContentContainer>
      </Page>
    );
  }
}

export default Playlists;
