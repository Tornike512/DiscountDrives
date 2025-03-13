"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export const useGetPagesLength = () => {
  const [pagesLengthCount, setPagesLengthCount] = useState<number>(0);

  const getLength = async (signal?: AbortSignal) => {
    try {
      const response = await axios.get("http://localhost:5000/page-length", {
        signal,
      });
      setPagesLengthCount(response.data);
    } catch (error) {
      console.log("Error Fetching Pages Length", error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getLength(controller.signal);

    return () => controller.abort();
  }, []);

  return { pagesLengthCount };
};
