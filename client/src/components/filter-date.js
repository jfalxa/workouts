import React from "react";
import styled from "styled-components";

import { Label, Clear } from "./system";

const DateBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const DatePicker = styled.input.attrs({ type: "date" })`
  width: 128px;
  height: 24px;
`;

const FilterDate = ({ startDate, onChange }) => {
  return (
    <DateBox>
      <Label>Start date: </Label>

      <DatePicker
        value={startDate}
        onChange={(e) => onChange(e.target.value)}
      />

      <Clear onClick={() => onChange("")} />
    </DateBox>
  );
};

export default FilterDate;
