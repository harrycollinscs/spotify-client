import axios from "axios";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { me_endpoint } from "../../../config";
import store from "../../../store";
import CTA from "../../atoms/CTA";
import Page from "../../atoms/Page";
import Hero from "../../molecules/Hero";
import PlaylistList from "../../organisms/PlaylistList";

const ContentContainer = styled.div`
  padding: 30px 100px 30px 100px;
`;

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: black;
  align-items: center;
  padding: 20px 0px 50px 0px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-weight: bold;
  padding-bottom: 20px;
`;

class Playlists extends PureComponent {
  state = {
    loadedPlaylists: [],
    totalPlaylists: null,
  };

  componentDidMount() {
    this.loadPlaylists(this.state.loadedPlaylists.length);
  }

  loadPlaylists(offset) {
    const playlistsEndpoint = `${me_endpoint}/playlists`;

    axios
      .get(playlistsEndpoint, {
        headers: {
          Authorization: "Bearer " + store.getState().accessToken,
        },
        params: {
          limit: 30,
          offset: offset,
        },
      })
      .then((res) => {
        this.setState({
          loadedPlaylists: [...this.state.loadedPlaylists, ...res.data.items],
          totalPlaylists: res.data.total,
        });
      });
  }

  locale = {
    heroTitle: "Playlists",
    heroContent: "Here you can find the playlists you listen to most often",
  };

  render() {
    const playlists = this.state.loadedPlaylists;
    const allPlaylistsLoaded = this.state.totalPlaylists === playlists.length;

    return (
      <Page>
        <Hero title={this.locale.heroTitle} content={this.locale.heroContent} />
        <ContentContainer>
          <StyledTitle>Your playlists</StyledTitle>
          {playlists.length ? (
            <PlaylistsContainer>
              <PlaylistList playlists={playlists} />
              {!allPlaylistsLoaded && (
                <CTA
                  action={() =>
                    this.loadPlaylists(this.state.loadedPlaylists.length)
                  }
                  primary={false}
                >
                  Load more
                </CTA>
              )}
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
