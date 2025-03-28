"use client";

import { ICars, useGetCars } from "@/hooks/useGetCars";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import GridItem from "@/components/GridItem";
import Loader from "./Loader";

export default function CarsGrid() {
  const { cars, isLoading } = useGetCars();

  const { currentSort, showFullScreenFilter } = useContext(GlobalContext);

  const sortCars = () => {
    if (currentSort === "ascending") {
      return [...cars].sort((a, b) =>
        a.carModel.toLowerCase().localeCompare(b.carModel.toLowerCase())
      );
    } else if (currentSort === "descending") {
      return [...cars].sort((a, b) =>
        b.carModel.toLowerCase().localeCompare(a.carModel.toLowerCase())
      );
    } else if (currentSort === "low-to-high") {
      return [...cars].sort(
        (a, b) =>
          Number(a.carPrice.replace(/,/g, "")) -
          Number(b.carPrice.replace(/,/g, ""))
      );
    } else if (currentSort === "high-to-low") {
      return [...cars].sort(
        (a, b) =>
          parseInt(b.carPrice.replace(/,/g, "")) -
          parseInt(a.carPrice.replace(/,/g, ""))
      );
    }

    return cars;
  };

  if (isLoading) return <Loader />;

  return (
    <section
      className={`main-grid ${
        showFullScreenFilter ? "show-full-screen-filter" : ""
      }`}
    >
      {sortCars().map((car: ICars) => {
        return (
          <GridItem
            carImage={car.carImage}
            key={car._id}
            carLink={car.carLink}
            carModel={car.carModel}
            carYear={car.carYear}
            carPrice={car.carPrice}
          />
        );
      })}
    </section>
  );
}
