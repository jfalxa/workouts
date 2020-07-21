import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import { getAllWorkouts } from "../api";
import Pagination from "../components/pagination";
import WorkoutList from "../components/workout-list";
import FilterDate from "../components/filter-date";
import FilterCategories from "../components/filter-categories";

const LIMIT = 20;

const FilterBox = styled.div`
  background-color: #eee;
  padding: 8px 16px;
  margin: 8px 0;
  box-shadow: 0px 0px 3px #aaa;
`;

const WorkoutListRoute = () => {
  const params = useParams();
  const history = useHistory();

  const [total, setTotal] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  // filters
  const [startDate, setStartDate] = useState("");
  const [categories, setCategories] = useState([]);

  // parse page number from url param
  const page = parseInt(params.page, 10) - 1;

  function goToPage(num) {
    history.push(`/list/${num + 1}`);
  }

  // fetch the wanted list of workouts when a new page is loaded
  useEffect(() => {
    const options = { page, limit: LIMIT };

    startDate.length > 0 && (options.startDate = startDate);
    categories.length > 0 && (options.categories = categories);

    getAllWorkouts(options).then((res) => {
      setTotal(res.meta.total);
      setWorkouts(res.data);
    });
  }, [page, startDate, categories]);

  return (
    <React.Fragment>
      <FilterBox>
        <FilterDate startDate={startDate} onChange={setStartDate} />
        <FilterCategories categories={categories} onChange={setCategories} />
      </FilterBox>

      <Pagination page={page} total={total} onChange={goToPage} />
      <WorkoutList workouts={workouts} />
      <Pagination page={page} total={total} onChange={goToPage} />
    </React.Fragment>
  );
};

export default WorkoutListRoute;
