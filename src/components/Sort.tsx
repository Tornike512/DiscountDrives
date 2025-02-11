"use client";

import { ChangeEvent, useState, useContext } from "react";
import { GlobalContext } from "@/context";

import "@/style/components/_sort.scss";

export default function Sort() {
  const { setCurrentSort } = useContext(GlobalContext);

  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    setCurrentSort(optionValue);
  };

  return (
    <select onChange={handleOptions} defaultValue="" className="select">
      <option value="default" hidden>
        Sort
      </option>
      <option value="descending">Alphabetical (A-Z)</option>
      <option value="ascending">Alphabetical (Z-A)</option>
      <option value="low-to-high">Lowest to Highest</option>
      <option value="high-to-low">Highest to Lowest</option>
    </select>
  );
}
