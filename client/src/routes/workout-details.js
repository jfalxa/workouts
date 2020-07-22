import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { getWorkout } from "../api";
import usePromise from "../hooks/use-promise";

import { GoBack, Banner } from "../components/system";
import WorkoutDetails from "../components/workout-details";

const WorkoutDetailsRoute = () => {
  const { id } = useParams();
  const history = useHistory();

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

  return (
    <React.Fragment>
      <Banner>
        <GoBack onClick={history.goBack} />
      </Banner>

      {workout.loading && <span>Loading...</span>}

      {workout.error && (
        <span>
          An error happened while loading the workout details:
          {workout.error.message}
        </span>
      )}

      {workout.value && <WorkoutDetails workout={workoutDetails} />}
    </React.Fragment>
  );
};

export default WorkoutDetailsRoute;
