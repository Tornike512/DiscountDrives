"use client";
import axios from "axios";

import { GlobalContext } from "@/context";
import { useState, useEffect, useContext } from "react";

export interface ICars {
  carModel: string;
  carLink: string;
  carYear: string;
  carPrice: string;
  _id?: string;
  carImage: string;
}

export const useGetCars = () => {
  const [cars, setCars] = useState<ICars[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { changePage, filterKey } = useContext(GlobalContext);

  const getCars = async (signal?: AbortSignal) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/filter-cars?next_page=${changePage}&manufacturer=${filterKey.manufacturer}&model=${filterKey.model}&min_year=${filterKey.startYear}&max_year=${filterKey.endYear}&min_price=${filterKey.startPrice}&max_price=${filterKey.endPrice}`,
        {
          signal,
        }
      );
      setCars(response.data.cars);
    } catch (error) {
      console.log("Error fetching cars", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getCars(controller.signal);

    const intervalId = setInterval(() => {
      const controller = new AbortController();

      getCars(controller.signal);
    }, 30000);

    return () => {
      clearInterval(intervalId);
      controller.abort();
    };
  }, [changePage, filterKey]);

  return { cars, isLoading };
};
