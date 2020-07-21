import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import { Link as RouterLink } from "react-router-dom";
import { colors, names } from "../constants/categories";

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: initial;
  text-decoration: none;

  :hover {
    background-color: #ddd;
  }
`;

const Category = styled.span`
  width: 48px;
  background: ${(props) => colors[props.category]};
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
  padding: 4px;
`;

const Name = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  margin-left: 8px;
`;

const StartDate = styled.span`
  font-size: 14px;
  margin-left: 8px;
  color: #666;
`;

const WorkoutItem = ({ workout }) => (
  <li>
    <Link to={`/workouts/${workout.id}`}>
      <Category category={workout.category}>{names[workout.category]}</Category>
      <Name>{workout.name}</Name>
      <StartDate>
        starting {format(new Date(workout.startDate), "dd/MM/y")}
      </StartDate>
    </Link>
  </li>
);

const WorkoutList = ({ workouts }) => (
  <List>
    {workouts.map((workout) => (
      <WorkoutItem key={workout.id} workout={workout} />
    ))}
  </List>
);

export default WorkoutList;
