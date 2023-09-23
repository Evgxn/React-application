import React, { useState, useEffect } from "react";

const PageButton = ({ todoPerPage, totalTodo, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodo / todoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((page) => (
        <button
          className="pag"
          key={page}
          onClick={() => paginate(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageButton;
