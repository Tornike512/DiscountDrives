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
  yearFromInput: any;
  setYearFromInput: Dispatch<SetStateAction<any>>;
  yearToInput: any;
  setYearToInput: Dispatch<SetStateAction<any>>;
  priceFromInput: any;
  setPriceFromInput: Dispatch<SetStateAction<any>>;
  priceToInput: any;
  setPriceToInput: Dispatch<SetStateAction<any>>;
  filterByYear: string[] | number[];
  setFilterByYear: Dispatch<SetStateAction<string[] | number[]>>;
  filterByPrice: string[] | number[];
  setFilterByPrice: Dispatch<SetStateAction<string[] | number[]>>;
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
