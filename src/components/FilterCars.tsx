"use client";

import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { GlobalContext } from "@/context";
import { nanoid } from "nanoid";

import manufacturersData from "@/data/carManufacturers.json";
import modelsData from "@/data/carModels.json";
import CustomFilter from "./CustomFilter";

import "@/style/components/_filterCars.scss";

interface CarModel {
  model: string;
}

interface ModelsData {
  [manufacturer: string]: CarModel[];
}

export default function FilterCars() {
  const {
    filterByPrice,
    filterByYear,
    yearFromInput,
    yearToInput,
    priceFromInput,
    priceToInput,
    setFilterKey,
    showFullScreenFilter,
    setShowFullScreenFilter,
    filterKey,
  } = useContext(GlobalContext);

  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectModel, setSelectModel] = useState("");

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleManufacturerOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedManufacturer(e.target.value);
  };

  const handleModelOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectModel(e.target.value);
  };

  const handleSearchButton = () => {
    setFilterKey({
      manufacturer: selectedManufacturer,
      model: selectModel,
      startYear: yearFromInput,
      endYear: yearToInput,
      startPrice: priceFromInput,
      endPrice: priceToInput,
    });

    setShowFullScreenFilter(false);
  };

  return (
    <div
      className={`filter-container ${
        showFullScreenFilter ? `show-full-screen` : ""
      }`}
    >
      <form onSubmit={handleForm} className="filter-form">
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
        <CustomFilter id="year-filter" filterBy={filterByYear} />
        <CustomFilter id="price-filter" filterBy={filterByPrice} />
        <button onClick={handleSearchButton} className="search-car">
          Search
        </button>
      </form>
    </div>
  );
}
