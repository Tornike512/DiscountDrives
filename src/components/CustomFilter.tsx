"use client";

import { useState } from "react";

import "@/style/components/_customFilter.scss";

interface ICustomFilter {
  filterType: string;
}

export default function CustomFilter({ filterType }: ICustomFilter) {
  const [select, setSelect] = useState<boolean>(false);
  const [openCustomFilter, setOpenCustomFilter] = useState<boolean>(false);

  const handleSelectButton = () => {
    setSelect(true);
    setOpenCustomFilter(false);
  };

  const handleOpenCustomFilter = () => {
    setOpenCustomFilter(true);
  };

  return (
    <div className="custom-filter">
      <button onClick={handleOpenCustomFilter} className="custom-filter-button">
        {filterType}
      </button>
      {openCustomFilter && (
        <div className="custom-filter-container">
          <div className="inputs-wrapper">
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
          </div>
          <button onClick={handleSelectButton} className="select-button">
            Select
          </button>
        </div>
      )}
    </div>
  );
}
