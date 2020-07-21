import React, { useState, useEffect } from "react";

import { getAllWorkouts } from "../api";
import Pagination from "../components/pagination";
import WorkoutList from "../components/workout-list";

const LIMIT = 20;

const WorkoutListRoute = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  // fetch the wanted list of workouts when a new page is loaded
  useEffect(() => {
    getAllWorkouts().then((res) => {
      const batch = res.data.slice(page * LIMIT, page * LIMIT + LIMIT);

      setTotal(res.data.length);
      setWorkouts(batch);
    });
  }, [page]);

  return (
    <React.Fragment>
      <WorkoutList workouts={workouts} />
      <Pagination page={page} limit={LIMIT} total={total} onChange={setPage} />
    </React.Fragment>
  );
};

export default WorkoutListRoute;
