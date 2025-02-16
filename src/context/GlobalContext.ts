"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IFilter {
  manufacturer: string;
  model: string;
  startPrice: number;
  endPrice: number;
  startYear: number;
  endYear: number;
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
  yearFromInput: number;
  setYearFromInput: Dispatch<SetStateAction<number>>;
  yearToInput: number;
  setYearToInput: Dispatch<SetStateAction<number>>;
  priceFromInput: number;
  setPriceFromInput: Dispatch<SetStateAction<number>>;
  priceToInput: number;
  setPriceToInput: Dispatch<SetStateAction<number>>;
  filterByYear: string[];
  setFilterByYear: Dispatch<SetStateAction<string[]>>;
  filterByPrice: string[];
  setFilterByPrice: Dispatch<SetStateAction<string[]>>;
  filterKey: IFilter;
  setFilterKey: Dispatch<SetStateAction<IFilter>>;
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
});
