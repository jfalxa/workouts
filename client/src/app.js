import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import WorkoutList from "./routes/workout-list";
import WorkoutDetails from "./routes/workout-details";

const App = () => (
  <BrowserRouter>
    <Header />

    <main>
      <Switch>
        <Route exact path="/">
          <WorkoutList />
        </Route>

        <Route exact path="/workouts/:id">
          <WorkoutDetails />
        </Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
