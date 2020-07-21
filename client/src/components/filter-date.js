import React from "react";
import styled from "styled-components";

import Label from "./label";

const DateBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const DatePicker = styled.input.attrs({ type: "date" })``;

const FilterDate = ({ startDate, onChange }) => {
  return (
    <DateBox>
      <Label>Start date: </Label>

      <DatePicker
        value={startDate}
        onChange={(e) => onChange(e.target.value)}
      />
    </DateBox>
  );
};

export default FilterDate;
