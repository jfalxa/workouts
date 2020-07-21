import React, { useState } from "react";

import Header from "./header";
import WorkoutList from "./workout-list";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

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
