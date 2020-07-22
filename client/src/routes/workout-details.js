import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getWorkout } from "../api";
import usePromise from "../hooks/use-promise";
import WorkoutDetails from "../components/workout-details";

const WorkoutDetailsRoute = () => {
  const { id } = useParams();
  const workout = usePromise(getWorkout, null);

  // fetch the single workout matching the current route
  useEffect(() => {
    workout.run(id);
  }, [id]);

  if (workout.loading) {
    return <span>Loading...</span>;
  }

  if (workout.error)
    return (
      <span>
        An error happened while loading the workout details:
        {workout.error.message}
      </span>
    );

  return <WorkoutDetails workout={workout.value?.data} />;
};

export default WorkoutDetailsRoute;
