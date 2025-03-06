"use client";

import { GlobalContext } from "./GlobalContext";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { IFilter } from "./GlobalContext";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [year, setYear] = useState<string>("Year");
  const [price, setPrice] = useState<string>("Price");
  const [fromInput, setFromInput] = useState<string>("");
  const [toInput, setToInput] = useState<string>("");
  const [filterByYear, setFilterByYear] = useState<(string | number)[]>([
    "Year",
  ]);
  const [filterByPrice, setFilterByPrice] = useState<(string | number)[]>([
    "Price",
  ]);
  const [yearFromInput, setYearFromInput] = useState<number | string>(0);
  const [yearToInput, setYearToInput] = useState<number | string>(
    new Date().getFullYear()
  );
  const [priceFromInput, setPriceFromInput] = useState<number | string>(0);
  const [priceToInput, setPriceToInput] = useState<number | string>(10000);
  const [filterKey, setFilterKey] = useState<IFilter>({
    manufacturer: "",
    model: "",
    startPrice: 0,
    endPrice: 1000000,
    startYear: 0,
    endYear: new Date().getFullYear(),
  });
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [changePage, setChangePage] = useState<{
    firstCar: number;
    lastCar: number;
  }>({ firstCar: 0, lastCar: 20 });
  const [showFullScreenFilter, setShowFullScreenFilter] =
    useState<boolean>(false);

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
        filterKey,
        setFilterKey,
        showSidebar,
        setShowSidebar,
        changePage,
        setChangePage,
        showFullScreenFilter,
        setShowFullScreenFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
