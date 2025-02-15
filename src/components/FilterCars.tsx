"use client";

import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";

import manufacturersData from "@/data/carManufacturers.json";
import modelsData from "@/data/carModels.json";

import "@/style/components/_filterCars.scss";

interface CarModel {
  model: string;
}

interface ModelsData {
  [manufacturer: string]: CarModel[];
}

export default function FilterCars() {
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectModel, setSelectModel] = useState("");

  const handleManufacturerOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedManufacturer(e.target.value);
  };

  const handleModelOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectModel(e.target.value);
  };

  console.log(selectModel);

  return (
    <div className="filter-container">
      <form className="filter-form">
        <select
          onChange={handleManufacturerOption}
          className="manufacturer-select"
          name="manufacturer"
          value={selectedManufacturer}
        >
          <option value="" hidden>
            Manufacturer
          </option>
          {manufacturersData.map((manufacturer) => {
            return (
              <option key={nanoid()} value={manufacturer}>
                {manufacturer[0].toUpperCase() + manufacturer.slice(1)}
              </option>
            );
          })}
        </select>
        <select
          onChange={handleModelOption}
          disabled={!selectedManufacturer}
          className="model-select"
          name="model"
          value={selectModel}
        >
          <option value="" hidden>
            Model
          </option>
          {selectedManufacturer &&
            (modelsData as ModelsData)[selectedManufacturer]?.map(
              (modelObj) => (
                <option key={nanoid()} value={modelObj.model}>
                  {modelObj.model}
                </option>
              )
            )}
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
