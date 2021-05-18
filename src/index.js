import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/molecules/NavBar/index";
import Artists from "./components/pages/Artists";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Playlists from "./components/pages/Playlists";
import Songs from "./components/pages/Songs";
import { logIn } from "./helpers";
import store from "./store";

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

const getComponent = Page => {
  return store.getState().isLoggedIn ? Page : Login;
}

const App = () => {
  logIn(store);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={getComponent(Home)} />
        <Route exact path="/songs" component={getComponent(Songs)} />
        <Route exact path="/artists" component={getComponent(Artists)} />
        <Route exact path="/playlists" component={getComponent(Playlists)} />
      </Switch>
    </Router>
  );
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
