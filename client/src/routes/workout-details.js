import React from "react";
import { useParams } from "react-router-dom";

import { getWorkout } from "../api";
import usePromise from "../hooks/use-promise";
import WorkoutDetails from "../components/workout-details";

const WorkoutDetailsRoute = () => {
  const { id } = useParams();

  // fetch the single workout matching the current route
  const workout = usePromise(getWorkout, [id]);
  const workoutDetails = workout.value?.data;

  if (workout.loading) {
    return <span>Loading...</span>;
  }

  if (workout.error) {
    return (
      <span>
        An error happened while loading the workout details:
        {workout.error.message}
      </span>
    );
  }

  return <WorkoutDetails workout={workoutDetails} />;
};

export default WorkoutDetailsRoute;
