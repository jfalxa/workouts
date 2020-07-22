import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getAllWorkouts } from "../api";
import usePromise from "../hooks/use-promise";

import { Banner } from "../components/system";
import Pagination from "../components/pagination";
import WorkoutList from "../components/workout-list";
import FilterDate from "../components/filter-date";
import FilterCategories from "../components/filter-categories";

const LIMIT = 20;

async function fetchWorkouts(page, startDate, categories) {
  const options = { page, limit: LIMIT };

  startDate.length > 0 && (options.startDate = startDate);
  categories.length > 0 && (options.categories = categories);

  return getAllWorkouts(options);
}

const WorkoutListRoute = () => {
  const params = useParams();
  const history = useHistory();

  // filters
  const [startDate, setStartDate] = useState("");
  const [categories, setCategories] = useState([]);

  // parse page number from url param
  const page = parseInt(params.page, 10) - 1;

  // fetch the wanted list of workouts when a new page is loaded or filters change
  const workouts = usePromise(fetchWorkouts, [page, startDate, categories]);
  const workoutList = workouts.value?.data;
  const total = workouts.value?.meta?.total;

  function goToPage(num) {
    history.push(`/list/${num + 1}`);
  }

  // go back to first page if we're pointing too far
  if (page < 0 || page >= total) {
    goToPage(0);
  }

  // prepare pagination to put it in 2 places if neeeded
  const pagination = total > 1 && (
    <Pagination page={page} total={total} onChange={goToPage} />
  );

  return (
    <React.Fragment>
      <Banner>
        <FilterDate startDate={startDate} onChange={setStartDate} />
        <FilterCategories categories={categories} onChange={setCategories} />
      </Banner>

      {pagination}

      {workouts.loading && <span>Loading...</span>}

      {workouts.error && (
        <span>
          An error happened while loading the workout list:
          {workouts.error.message}
        </span>
      )}

      {workouts.value && <WorkoutList workouts={workoutList} />}

      {pagination}
    </React.Fragment>
  );
};

export default WorkoutListRoute;
