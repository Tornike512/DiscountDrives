"use client";

import { useState, useContext, useEffect, ChangeEvent } from "react";
import { GlobalContext } from "@/context";
import "@/style/components/_customFilter.scss";

export default function CustomFilter({
  filterBy,
  id,
}: {
  filterBy: string[];
  id: string;
}) {
  const {
    showFilterModal,
    setShowFilterModal,
    yearFromInput,
    setYearFromInput,
    yearToInput,
    setYearToInput,
    priceFromInput,
    setPriceFromInput,
    priceToInput,
    setPriceToInput,
    setFilterByYear,
    setFilterByPrice,
  } = useContext(GlobalContext);

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
    setOpenCustomFilter(false);
    setShowFilterModal(false);

    if (id === "year-filter") {
      if (yearFromInput && yearToInput) {
        setFilterByYear([yearFromInput + " - " + yearToInput]);
      } else if (yearFromInput) {
        setFilterByYear([yearFromInput]);
      } else if (yearToInput) {
        setFilterByYear([yearToInput]);
      } else {
        setFilterByYear(["Year"]);
      }
    }

    if (id === "price-filter") {
      if (priceFromInput && priceToInput) {
        setFilterByPrice([priceFromInput + " - " + priceToInput]);
      } else if (priceFromInput) {
        setFilterByPrice([priceFromInput]);
      } else if (priceToInput) {
        setFilterByPrice([priceToInput]);
      } else {
        setFilterByPrice(["Price"]);
      }
    }
  };

  const handleOpenCustomFilter = () => {
    setOpenCustomFilter(true);
    setShowFilterModal(true);
  };

  const handleFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (id === "year-filter") {
      setYearFromInput(e.target.value);
    }
    if (id === "price-filter") {
      setPriceFromInput(e.target.value);
    }
  };

  const handleToInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (id === "year-filter") {
      setYearToInput(e.target.value);
    }
    if (id === "price-filter") {
      setPriceToInput(e.target.value);
    }
  };

  return (
    <>
      {showFilterModal && (
        <div
          onClick={handleShowFilterModal}
          className="custom-filter-modal"
        ></div>
      )}
      <div className="custom-filter" id={id}>
        <button
          onClick={handleOpenCustomFilter}
          className="custom-filter-button"
        >
          {filterBy}
        </button>
        {openCustomFilter && (
          <div className="custom-filter-container">
            <div className="inputs-wrapper">
              <input
                onChange={handleFromInput}
                type="number"
                placeholder="From"
                value={id === "year-filter" ? yearFromInput : priceFromInput}
              />
              <input
                onChange={handleToInput}
                type="number"
                placeholder="To"
                value={id === "year-filter" ? yearToInput : priceToInput}
              />
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
