import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const Arrow = styled.span`
  margin: 0 8px;
  cursor: pointer;
  color: initial;
  text-decoration: none;
  color: ${(props) => (props.disabled ? "gray" : "black")};
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
`;

const Menu = styled.select`
  text-align: center;
  cursor: pointer;
  font-size: 14px;
`;

const Total = styled.span`
  font-size: 12px;
  color: #666;
`;

const Pagination = ({ page, pages, total, onChange }) => {
  const options = [...Array(pages).keys()]; // create an array with 0,1,2,3,...,total-1
  const clamp = (value) => Math.max(0, Math.min(value, pages - 1)); // keep the value between 0 and total

  return (
    <Nav>
      <Arrow disabled={page === 0} onClick={() => onChange(clamp(page - 1))}>
        ◀
      </Arrow>

      <Menu value={page} onChange={(e) => onChange(parseInt(e.target.value))}>
        <option disabled>Select page</option>
        {options.map((num) => (
          <option key={num} value={num}>
            {/* display the total number of pages on selected option */}
            {num + 1} {num === page ? `/ ${pages}` : ""}
          </option>
        ))}
      </Menu>

      <Arrow
        disabled={page === pages - 1}
        onClick={() => onChange(clamp(page + 1))}
      >
        ▶
      </Arrow>

      <Total>({total} workouts found)</Total>
    </Nav>
  );
};

export default Pagination;
