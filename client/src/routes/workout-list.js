import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getAllWorkouts } from "../api";
import Pagination from "../components/pagination";
import WorkoutList from "../components/workout-list";

const LIMIT = 20;

const WorkoutListRoute = () => {
  const params = useParams();
  const history = useHistory();

  const [total, setTotal] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  // parse page number from url param
  const page = parseInt(params.page, 10) - 1;

  function goToPage(num) {
    history.push(`/list/${num + 1}`);
  }

  // fetch the wanted list of workouts when a new page is loaded
  useEffect(() => {
    getAllWorkouts({ page, limit: LIMIT }).then((res) => {
      setTotal(res.meta.total);
      setWorkouts(res.data);
    });
  }, [page]);

  return (
    <React.Fragment>
      <WorkoutList workouts={workouts} />
      <Pagination page={page} total={total} onChange={goToPage} />
    </React.Fragment>
  );
};

export default WorkoutListRoute;
