import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWorkout } from "../api";
import WorkoutDetails from "../components/workout-details";

const WorkoutDetailsRoute = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  // fetch the single workout matching the current route
  useEffect(() => {
    getWorkout(id).then((res) => setWorkout(res.data));
  }, [id]);

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsRoute;
