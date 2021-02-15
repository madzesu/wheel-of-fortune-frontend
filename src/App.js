import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BattlePage from "./pages/BattlePage";
import CharacterPage from "./pages/CharacterPage";
import theme, { ThemeProvider } from "./theme";
import { ROUTES } from "./constants";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={ROUTES.CHARACTER} component={CharacterPage} />
          <Route path={ROUTES.BATTLE} component={BattlePage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Redirect to={{ pathname: ROUTES.HOME }} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
