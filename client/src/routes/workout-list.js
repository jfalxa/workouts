import React, { useState, useEffect } from "react";

import { getAllWorkouts } from "../api";
import WorkoutList from "../components/workout-list";

const WorkoutListRoute = () => {
  const [workouts, setWorkouts] = useState([]);

  // fetch the complete list of workouts on first render
  useEffect(() => {
    getAllWorkouts().then((res) => setWorkouts(res.data));
  }, []);

  return <WorkoutList workouts={workouts} />;
};

export default WorkoutListRoute;
