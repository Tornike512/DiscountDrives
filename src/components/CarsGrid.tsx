"use client";

import GridItem from "@/components/GridItem";
import Loader from "./Loader";
import { ICars, useGetCars } from "@/hooks/useGetCars";

export default function CarsGrid() {
  const { cars, isLoading } = useGetCars();

  if (isLoading) return <Loader />;

  const sortedCars = [...cars].sort((a, b) =>
    a.carModel.toLowerCase().localeCompare(b.carModel.toLowerCase())
  );

  return (
    <section className="main-grid">
      {cars.map((car: ICars) => {
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
