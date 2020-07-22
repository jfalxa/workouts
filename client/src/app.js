import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Main } from "./components/system";
import Header from "./components/header";
import WorkoutList from "./routes/workout-list";
import WorkoutDetails from "./routes/workout-details";

const App = () => (
  <BrowserRouter>
    <Header />

    <Main>
      <Switch>
        <Route path="/list/:page">
          <WorkoutList />
        </Route>

        <Route path="/workouts/:id">
          <WorkoutDetails />
        </Route>

        <Redirect from="/" to="/list/1" />
      </Switch>
    </Main>
  </BrowserRouter>
);

export default App;
