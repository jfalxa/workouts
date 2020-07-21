import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import { Link as RouterLink } from "react-router-dom";

const categories = {
  c1: "Daniel",
  c2: "Rosario",
  c3: "Serrano",
  c4: "Brady",
  c5: "Berger",
  c6: "King",
  c7: "Haley"
};

const colors = {
  c1: "gold",
  c2: "silver",
  c3: "orange",
  c4: "lime",
  c5: "lightskyblue",
  c6: "hotpink",
  c7: "dodgerblue"
};

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  padding: 12px;
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
      <Category category={workout.category}>
        {categories[workout.category]}
      </Category>
      <Name>{workout.name}</Name>
      <StartDate>
        starting {format(new Date(workout.startDate), "PPP")}
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
