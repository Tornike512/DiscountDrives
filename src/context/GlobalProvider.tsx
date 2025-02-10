"use client";

import { GlobalContext } from "./GlobalContext";
import { PropsWithChildren } from "react";
import { useState } from "react";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [currentSort, setCurrentSort] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        currentSort,
        setCurrentSort,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
