import React from "react";

const Pagination = ({ page, limit, total, onChange }) => {
  const size = Math.ceil(total / limit); // get number of pages
  const pages = [...Array(size).keys()]; // create an array with 0,1,2,3,...,size-1
  const clamp = (value) => Math.max(0, Math.min(value, size - 1)); // keep the value between 0 and size

  return (
    <div>
      <span onClick={() => onChange(clamp(page - 1))}>◀</span>
      <select value={page} onChange={(e) => onChange(parseInt(e.target.value))}>
        <option disabled>Jump to</option>
        {pages.map((num) => (
          <option value={num}>
            {num + 1} {num === page ? `/ ${size}` : ""}
          </option>
        ))}
      </select>
      <span onClick={() => onChange(clamp(page + 1))}>▶</span>
    </div>
  );
};

export default Pagination;
