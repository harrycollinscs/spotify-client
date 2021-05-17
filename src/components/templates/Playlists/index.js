import React, { PureComponent } from "react";
import { getMyPlaylists } from "../../../api/playlists";
import Page from "../../atoms/Page";
import PlaylistList from "../../organisms/PlaylistList";
class Playlists extends PureComponent {

  componentDidMount() {
    const { userPlaylists } = this.props;
    getMyPlaylists(userPlaylists.length);
  }

  render() {
    const { userPlaylists } = this.props;

    return (
      <Page>
        {userPlaylists ? (
          <PlaylistList playlists={userPlaylists}/>
        ) : (
          <p>No data available</p>
        )}
      </Page>
    );
  }
}

export default Playlists;
