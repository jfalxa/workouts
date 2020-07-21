import React, { useState, useEffect } from "react";

import { getAllWorkouts } from "../api";
import Header from "./header";
import WorkoutList from "./workout-list";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

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
