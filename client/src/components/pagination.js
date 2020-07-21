import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin: 16px;
`;

const Arrow = styled(Link)`
  margin: 0 8px;
  color: initial;
  text-decoration: none;
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
      <Arrow to={"/list/" + page}>◀</Arrow>

      <Menu value={page} onChange={(e) => onChange(parseInt(e.target.value))}>
        <option disabled>Select page</option>
        {pages.map((num) => (
          <option key={num} value={num}>
            {num + 1} {num === page ? `/ ${total}` : ""}
          </option>
        ))}
      </Menu>

      <Arrow to={"/list/" + clamp(page + 2)}>▶</Arrow>
    </Nav>
  );
};

export default Pagination;
