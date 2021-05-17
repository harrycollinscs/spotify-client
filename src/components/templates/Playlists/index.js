import React, { PureComponent } from "react";
import { getMyPlaylists } from "../../../api/playlists";
import Page from "../../atoms/Page";
import CircleImage from "../../atoms/CircleImage";

class Playlists extends PureComponent {
  componentDidMount() {
    const { userPlaylists } = this.props;

    getMyPlaylists(userPlaylists.length);
  }

  render() {
    const { userPlaylists } = this.props;
    console.log(userPlaylists);

    return (
      <Page>
        {userPlaylists ? (
          userPlaylists.map((playlist) => {
            console.log(playlist);
            return (
              <>
                <CircleImage url={playlist.images[0] && playlist.images[0].url}/>
                <p>{playlist.name}</p>
              </>
            );
          })
        ) : (
          <p>Playlistds</p>
        )}
      </Page>
    );
  }
}

export default Playlists;
