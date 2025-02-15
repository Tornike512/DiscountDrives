"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IGlobalContext {
  currentSort: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  showFilterModal: boolean;
  setShowFilterModal: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<IGlobalContext>({
  currentSort: "",
  setCurrentSort: () => {},
  showFilterModal: false,
  setShowFilterModal: () => {},
});
