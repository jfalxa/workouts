import { format } from "date-fns";
import React from "react";
import styled from "styled-components";

import months from "../constants/months";
import { Label, Clear } from "./system";

const DateBox = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
`;

const FilterDate = ({ startDate, onChange }) => {
  return (
    <DateBox>
      <Label>Starting month: </Label>

      <select value={startDate} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          Select month
        </option>
        {months.map((month) => (
          <option value={format(month, "Y-MM-dd")}>
            {format(month, "MMMM Y")}
          </option>
        ))}
      </select>

      <Clear onClick={() => onChange("")} />
    </DateBox>
  );
};

export default FilterDate;
