"use client";

import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/context";

import "@/style/components/_customFilter.scss";

interface ICustomFilter {
  filterType: string;
}

export default function CustomFilter({ filterType }: ICustomFilter) {
  const { showFilterModal, setShowFilterModal } = useContext(GlobalContext);

  const [select, setSelect] = useState<boolean>(false);
  const [openCustomFilter, setOpenCustomFilter] = useState<boolean>(false);

  useEffect(() => {
    if (!showFilterModal) {
      setOpenCustomFilter(false);
    }
  }, [showFilterModal]);

  const handleShowFilterModal = () => {
    setShowFilterModal(false);
    setOpenCustomFilter(false);
  };

  const handleSelectButton = () => {
    setSelect(true);
    setOpenCustomFilter(false);
    setShowFilterModal(false);
  };

  const handleOpenCustomFilter = () => {
    setOpenCustomFilter(true);
    setShowFilterModal(true);
  };

  console.log(openCustomFilter);

  return (
    <>
      {showFilterModal && (
        <div
          onClick={handleShowFilterModal}
          className="custom-filter-modal"
        ></div>
      )}
      <div className="custom-filter">
        <button
          onClick={handleOpenCustomFilter}
          className="custom-filter-button"
        >
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
    </>
  );
}
