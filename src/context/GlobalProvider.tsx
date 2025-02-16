"use client";

import { GlobalContext } from "./GlobalContext";
import { PropsWithChildren } from "react";
import { useState } from "react";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [year, setYear] = useState<string>("Year");
  const [price, setPrice] = useState<string>("Price");
  const [fromInput, setFromInput] = useState<string>("");
  const [toInput, setToInput] = useState<string>("");
  const [filterByYear, setFilterByYear] = useState<string[]>(["Year"]);
  const [filterByPrice, setFilterByPrice] = useState<string[]>(["Price"]);
  const [yearFromInput, setYearFromInput] = useState("");
  const [yearToInput, setYearToInput] = useState("");
  const [priceFromInput, setPriceFromInput] = useState("");
  const [priceToInput, setPriceToInput] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        currentSort,
        setCurrentSort,
        showFilterModal,
        setShowFilterModal,
        year,
        setYear,
        price,
        setPrice,
        fromInput,
        setFromInput,
        toInput,
        setToInput,
        filterByYear,
        setFilterByYear,
        filterByPrice,
        setFilterByPrice,
        yearFromInput,
        setYearFromInput,
        yearToInput,
        setYearToInput,
        priceFromInput,
        setPriceFromInput,
        priceToInput,
        setPriceToInput,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
