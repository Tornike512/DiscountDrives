"use client";

import GridItem from "@/components/GridItem";
import { ICars, useGetCars } from "@/hooks/useGetCars";

import "@/style/_global.scss";

export default function Home() {
  const { cars } = useGetCars();

  return (
    <main className="main-grid">
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
    </main>
  );
}
