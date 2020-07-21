import React, { useState, useEffect } from "react";

import { getAllWorkouts } from "../api";
import Header from "./header";
import WorkoutList from "./workout-list";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  // fetch the complete list of workouts on first render
  useEffect(() => {
    getAllWorkouts().then((res) => setWorkouts(res.data));
  }, []);

  return (
    <React.Fragment>
      <Header />

      <main>
        <WorkoutList workouts={workouts} />
      </main>
    </React.Fragment>
  );
};

export default App;
