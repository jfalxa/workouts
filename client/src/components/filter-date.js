import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";

import { Label, Clear } from "./system";

const now = new Date().setDate(1);
const months = [now];

// create a list of the 1st days of the next 12 months
for (let i = 1; i < 12; i++) {
  months.push(addMonths(months[i - 1], 1));
}

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
          <option key={month} value={format(month, "Y-MM-dd")}>
            {format(month, "MMMM Y")}
          </option>
        ))}
      </select>

      <Clear onClick={() => onChange("")} />
    </DateBox>
  );
};

export default FilterDate;
