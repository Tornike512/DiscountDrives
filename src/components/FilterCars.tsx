"use client";

import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";

import manufacturersData from "@/data/carManufacturers.json";

import "@/style/components/_filterCars.scss";

export default function FilterCars() {
  const [manufacturers, setManufacturers] = useState<string>("");

  const handleManufacturerOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setManufacturers(e.target.value);
  };

  console.log(manufacturers);

  return (
    <div className="filter-container">
      <form className="filter-form">
        <select
          onChange={handleManufacturerOption}
          className="manufacturer-select"
          name="manufacturer"
          value={manufacturers}
        >
          <option value="default" hidden>
            Manufacturer
          </option>
          {manufacturersData.map((model) => {
            return (
              <option key={nanoid()} value={model}>
                {model}
              </option>
            );
          })}
        </select>
        <select disabled className="model-select" name="model">
          <option value="default">Model</option>
        </select>
        <select className="year-select" name="year">
          <option value="default">Year</option>
        </select>
        <select className="price-select" name="price">
          <option value="default">Price</option>
        </select>
      </form>
      <button className="search-car">Search</button>
    </div>
  );
}
