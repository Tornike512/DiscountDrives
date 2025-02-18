"use client";
import axios from "axios";
import { useState, useEffect } from "react";

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

  const getCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000");
      setCars(response.data.cars);
    } catch (error) {
      console.log("Error fetching cars", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCars();

    const intervalId = setInterval(getCars, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return { cars, isLoading };
};
