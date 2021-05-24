import "bootstrap/dist/css/bootstrap.min.css";
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Artists from "./components/pages/Artists";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Playlists from "./components/pages/Playlists";
import Playlist from "./components/pages/Playlist";
import Songs from "./components/pages/Songs";
import { logIn } from "./helpers";
import store from "./store";
import Player from "./components/molecules/Player";
import Hero from "./components/molecules/Hero";
import styled from "styled-components";
import axios from "axios";
import { me_endpoint } from "./config";

const navigationLinks = [
  {
    title: "Songs",
    route: "/songs",
  },
  {
    title: "Artists",
    route: "/artists",
  },
  {
    title: "Playlists",
    route: "/playlists",
  },
];

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 85vw;
  z-index: 2000;
`;

const getComponent = (Page) => {
  return store.getState().isLoggedIn ? Page : Login;
};
class App extends PureComponent {
  state = {
    contextUri: null,
    contextLoaded: false,
  };
  
  componentDidMount() {
    this.getPlaybackState();
  }
  
  getPlaybackState() {
    const playerEndpoint = `${me_endpoint}/player`;
  
    axios
      .get(playerEndpoint, {
        headers: {
          Authorization: "Bearer " + store.getState().accessToken,
        },
      })
      .then((res) => {
        this.setState({ 
          contextUri: res.data?.context?.uri,
          contextLoaded: true,
        });
      });
  }

  render() { 
    logIn(store);
    const { contextUri, contextLoaded } = this.state;

    return (
    <>
      <Router style={{ position: "relative" }}>
        <Switch>
          <Route exact path="/" component={getComponent(Home)} />
          <Route exact path="/songs" component={getComponent(Songs)} />
          <Route exact path="/artists" component={getComponent(Artists)} />
          <Route exact path="/playlists" component={getComponent(Playlists)} />
          <Route path="/playlists/:id" component={getComponent(Playlist)} />
        </Switch>
      </Router>
      {store.getState().isLoggedIn && contextLoaded && (
        <PlayerContainer>
          <Player contextUri={contextUri} />
        </PlayerContainer>
      )}
    </>
  );
  }
  
};

const mapStateToProps = () => ({
  isLoggedIn: store.getState().isLoggedIn,
  user: store.getState().user,
});

const WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store} user={store.getState().user}>
    <WrappedApp />
  </Provider>,
  document.getElementById("root")
);
