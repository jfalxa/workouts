import React from "react";
import styled from "styled-components";

import { names, colors } from "../constants/categories";
import Label from "./label";

const CategoryCheckboxBox = styled.div`
  margin-right: 8px;
`;

const CategoryCheckbox = ({ value, checked, onChange }) => (
  <CategoryCheckboxBox>
    <input
      id={`cb-${value}`}
      type="checkbox"
      name={value}
      checked={checked}
      onChange={onChange}
    />

    <label htmlFor={`cb-${value}`} style={{ color: colors[value] }}>
      {names[value]}
    </label>
  </CategoryCheckboxBox>
);

const CategoryBox = styled.div`
  display: flex;
  padding: 4px 0;
`;

const FilterCategories = ({ categories = [], onChange = () => {} }) => {
  function toggleCheckbox(e) {
    const category = e.target.name;

    const nextCategories = categories.includes(category)
      ? categories.filter((v) => v !== category) // remove category from selection
      : [...categories, category]; // add new category

    onChange(nextCategories);
  }

  return (
    <CategoryBox>
      <Label>Categories:</Label>

      {Object.keys(names).map((id) => (
        <CategoryCheckbox
          key={id}
          value={id}
          checked={categories.includes(id)}
          onChange={toggleCheckbox}
        />
      ))}
    </CategoryBox>
  );
};

export default FilterCategories;
