import React from "react";

const WorkoutList = ({ workouts }) => (
  <ul>
    {workouts.map((workout) => (
      <li key={workout.id}>{workout.name}</li>
    ))}
  </ul>
);

export default WorkoutList;
