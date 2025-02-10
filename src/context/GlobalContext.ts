"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IGlobalContext {
  currentSort: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({
  currentSort: "",
  setCurrentSort: () => {},
});
