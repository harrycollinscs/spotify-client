import React, { PureComponent } from "react";
// import { getPlaylist } from "../../../api/playlists";
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

class Playlist extends PureComponent {
  state = {
    playlist: null,
  }

  componentDidMount() {
    // const { playlistId } = this.props;
    // getPlaylist(playlistId);
  }

  render() {
    const { playlistId } = this.props;

    return (
      <Page>
        <Hero title="Playlist name" content="playlist description"/>
          <ContentContainer>
            {/* <StyledTitle>Most played tracks</StyledTitle> */}
            {/* {
            this.state.playlist ? <TrackList tracks={userTopTracks} /> : (
              <p style={{ color: "black" }}>No tracks found</p>
            )} */}
          </ContentContainer>
      </Page>
    );
  }
}

export default Playlist;
