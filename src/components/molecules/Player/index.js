import React, { PureComponent } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import store from "../../../store";

const PlayerStyle = {
  activeColor: "#fff",
  bgColor: "rgb(0,0,0)",
  color: "#fff",
  loaderColor: "#fff",
  sliderColor: "#1db954",
  trackArtistColor: "#ccc",
  trackNameColor: "#fff",
  height: "50px",
};

class Player extends PureComponent {
  render() {
    const { contextUri } = this.props;
    const uri = contextUri || "spotify:artist:6HQYnRM4OzToCYPpVBInuU";

    return (
      <SpotifyPlayer
        token={store.getState().accessToken}
        uris={[uri]}
        styles={PlayerStyle}
        autoPlay={false}
        syncExternalDevice={true}
        magnifySliderOnHover={true}
      />
    );
  }
}

export default Player;
