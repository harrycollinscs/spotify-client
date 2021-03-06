import axios from "axios";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { base_api_url } from "../../../config";
import store from "../../../store";
import Page from "../../atoms/Page";
import Hero from "../../molecules/Hero";
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
  };

  getPlaylist(playlistId) {
    const playlistEndpoint = `${base_api_url}/playlists/${playlistId}`;

    axios
      .get(playlistEndpoint, {
        headers: {
          Authorization: "Bearer " + store.getState().accessToken,
        },
      })
      .then((res) => {
        this.setState({ playlist: res.data });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getPlaylist(id);
  }

  render() {
    const playlist = this.state.playlist;

    return (
      <Page darkBackground={false}>
        <Hero title={playlist?.name} content={playlist?.description} withBackButton={true} />
        <ContentContainer>
          <StyledTitle>Tracks</StyledTitle>
          {this.state.playlist ? (
            <TrackList tracks={playlist.tracks.items} playlistId={playlist.id} darkMode={false}/>
          ) : (
            <p style={{ color: "black" }}>No tracks found</p>
          )}
        </ContentContainer>
      </Page>
    );
  }
}

export default Playlist;
