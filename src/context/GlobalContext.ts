"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IFilter {
  manufacturer: string;
  model: string;
  startPrice: number | string;
  endPrice: number | string;
  startYear: number | string;
  endYear: number | string;
}

export interface IGlobalContext {
  currentSort: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  showFilterModal: boolean;
  setShowFilterModal: Dispatch<SetStateAction<boolean>>;
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  fromInput: string;
  setFromInput: Dispatch<SetStateAction<string>>;
  toInput: string;
  setToInput: Dispatch<SetStateAction<string>>;
  yearFromInput: number | string;
  setYearFromInput: Dispatch<SetStateAction<number | string>>;
  yearToInput: number | string;
  setYearToInput: Dispatch<SetStateAction<number | string>>;
  priceFromInput: number | string;
  setPriceFromInput: Dispatch<SetStateAction<number | string>>;
  priceToInput: number | string;
  setPriceToInput: Dispatch<SetStateAction<number | string>>;
  filterByYear: (string | number)[];
  setFilterByYear: Dispatch<SetStateAction<(string | number)[]>>;
  filterByPrice: (string | number)[];
  setFilterByPrice: Dispatch<SetStateAction<(string | number)[]>>;
  filterKey: IFilter;
  setFilterKey: Dispatch<SetStateAction<IFilter>>;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<IGlobalContext>({
  currentSort: "",
  setCurrentSort: () => {},
  showFilterModal: false,
  setShowFilterModal: () => {},
  year: "Year",
  setYear: () => {},
  price: "Price",
  setPrice: () => {},
  fromInput: "",
  setFromInput: () => {},
  toInput: "",
  setToInput: () => {},
  yearFromInput: 0,
  setYearFromInput: () => {},
  yearToInput: new Date().getFullYear(),
  setYearToInput: () => {},
  priceFromInput: 0,
  setPriceFromInput: () => {},
  priceToInput: 10000,
  setPriceToInput: () => {},
  filterByYear: ["Year"],
  setFilterByYear: () => {},
  filterByPrice: ["Price"],
  setFilterByPrice: () => {},
  filterKey: {
    manufacturer: "",
    model: "",
    startPrice: 0,
    endPrice: 10000,
    startYear: 0,
    endYear: new Date().getFullYear(),
  },
  setFilterKey: () => {},
  showSidebar: false,
  setShowSidebar: () => {},
});
