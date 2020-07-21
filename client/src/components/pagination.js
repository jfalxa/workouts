import React from "react";

const Pagination = ({ page, total, onChange }) => {
  const pages = [...Array(total).keys()]; // create an array with 0,1,2,3,...,total-1
  const clamp = (value) => Math.max(0, Math.min(value, total - 1)); // keep the value between 0 and total

  return (
    <div>
      <span onClick={() => onChange(clamp(page - 1))}>◀</span>

      <select value={page} onChange={(e) => onChange(parseInt(e.target.value))}>
        <option disabled>Jump to</option>
        {pages.map((num) => (
          <option value={num}>
            {num + 1} {num === page ? `/ ${total}` : ""}
          </option>
        ))}
      </select>

      <span onClick={() => onChange(clamp(page + 1))}>▶</span>
    </div>
  );
};

export default Pagination;
