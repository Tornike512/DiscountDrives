"use client";

import { GlobalContext } from "./GlobalContext";
import { PropsWithChildren } from "react";
import { useState } from "react";

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [currentSort, setCurrentSort] = useState<string>("");
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        currentSort,
        setCurrentSort,
        showFilterModal,
        setShowFilterModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
