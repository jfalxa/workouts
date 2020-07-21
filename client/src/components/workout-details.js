import React from "react";

const WorkoutDetails = ({ workout }) =>
  workout && (
    <div>
      <p>{workout.name}</p>
      <p>{workout.description}</p>
      <p>{workout.startDate}</p>
      <p>{workout.category}</p>
    </div>
  );

export default WorkoutDetails;
