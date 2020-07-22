import React from "react";
import format from "date-fns/format";
import styled from "styled-components";

import { names, colors } from "../constants/categories";

const Article = styled.article`
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Name = styled.h2`
  text-transform: capitalize;
  margin: 0;
`;

const Category = styled.span`
  margin-left: 8px;
  padding: 4px 8px;
  background-color: ${(props) => colors[props.category]};
  border-radius: 3px;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 16px;
`;

const StartDate = styled.span`
  color: #666;
  margin-top: 16px;
`;

const WorkoutDetails = ({ workout }) => (
  <Article>
    <Header>
      <Name>{workout.name}</Name>
      <Category category={workout.category}>{names[workout.category]}</Category>
    </Header>

    <StartDate>
      Starting {format(new Date(workout.startDate), "PPPP")}
    </StartDate>

    <Description>{workout.description}</Description>
  </Article>
);

export default WorkoutDetails;
