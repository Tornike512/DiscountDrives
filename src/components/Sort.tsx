"use client";

import { ChangeEvent, useState } from "react";

import "@/style/components/_sort.scss";

export default function Sort() {
  const [currentSort, setCurrentSort] = useState<string>("");

  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    const optionValue = e.target.value;
    setCurrentSort(optionValue);
  };

  return (
    <select onChange={handleOptions} defaultValue="" className="select">
      <option value="default" hidden>
        Sort
      </option>
      <option value="desc">Alphabetical (A-Z)</option>
      <option value="asc">Alphabetical (Z-A)</option>
      <option value="low-to-high">Lowest to Highest</option>
      <option value="high-to-low">Highest to Lowest</option>
    </select>
  );
}
