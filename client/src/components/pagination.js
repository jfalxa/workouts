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

const Pagination = ({ page, total, onChange }) => {
  const pages = [...Array(total).keys()]; // create an array with 0,1,2,3,...,total-1
  const clamp = (value) => Math.max(0, Math.min(value, total - 1)); // keep the value between 0 and total

  return (
    <Nav>
      <Arrow disabled={page === 0} onClick={() => onChange(clamp(page - 1))}>
        ◀
      </Arrow>

      <Menu value={page} onChange={(e) => onChange(parseInt(e.target.value))}>
        <option disabled>Select page</option>
        {pages.map((num) => (
          <option key={num} value={num}>
            {/* display the total number of pages on selected option */}
            {num + 1} {num === page ? `/ ${total}` : ""}
          </option>
        ))}
      </Menu>

      <Arrow
        disabled={page === total - 1}
        onClick={() => onChange(clamp(page + 1))}
      >
        ▶
      </Arrow>
    </Nav>
  );
};

export default Pagination;
