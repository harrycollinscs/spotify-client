import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import NavigationBar from "./components/molecules/NavBar/index";
import Artists from "./components/pages/Artists";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Playlists from "./components/pages/Playlists";
import Songs from "./components/pages/Songs";
import { getTokenFromHash } from "./helpers";
import store from "./store";
import { setAccessToken, updateLoggedInStatus } from "./store/actions";

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

const checkAndUpdateLogin = () => {
  const token = getTokenFromHash('access_token');

  if(token) {
    store.dispatch(setAccessToken(token));
    store.dispatch(updateLoggedInStatus(true));
    console.log(store.getState());
  };
}


const App = () => {

  useEffect(() => {
    console.log('useeffect')
    checkAndUpdateLogin();
  }, []);

  checkAndUpdateLogin();

  console.log('after userfefect')

  return (
    <Router>
      <NavigationBar links={navigationLinks} />
      <Switch>
        <Route exact path="/" component={getComponent(Home)} />
        <Route exact path="/songs" component={getComponent(Songs)} />
        <Route exact path="/artists" component={getComponent(Artists)} />
        <Route exact path="/playlists" component={getComponent(Playlists)} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
