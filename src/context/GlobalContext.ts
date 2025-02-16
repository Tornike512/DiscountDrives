"use client";
import { createContext, Dispatch, SetStateAction } from "react";

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
  yearFromInput: string;
  setYearFromInput: Dispatch<SetStateAction<string>>;
  yearToInput: string;
  setYearToInput: Dispatch<SetStateAction<string>>;
  priceFromInput: string;
  setPriceFromInput: Dispatch<SetStateAction<string>>;
  priceToInput: string;
  setPriceToInput: Dispatch<SetStateAction<string>>;
  filterByYear: string[];
  setFilterByYear: Dispatch<SetStateAction<string[]>>;
  filterByPrice: string[];
  setFilterByPrice: Dispatch<SetStateAction<string[]>>;
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
  yearFromInput: "",
  setYearFromInput: () => {},
  yearToInput: "",
  setYearToInput: () => {},
  priceFromInput: "",
  setPriceFromInput: () => {},
  priceToInput: "",
  setPriceToInput: () => {},
  filterByYear: ["Year"],
  setFilterByYear: () => {},
  filterByPrice: ["Price"],
  setFilterByPrice: () => {},
});
