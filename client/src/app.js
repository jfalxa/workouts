import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import WorkoutList from "./routes/workout-list";
import WorkoutDetails from "./routes/workout-details";

const App = () => (
  <BrowserRouter>
    <Header />

    <main>
      <Switch>
        <Route path="/list/:page">
          <WorkoutList />
        </Route>

        <Route path="/workouts/:id">
          <WorkoutDetails />
        </Route>

        <Redirect from="/" to="/list/1" />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
