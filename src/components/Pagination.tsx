"use client";

import { useContext, useReducer, useState } from "react";
import { nanoid } from "nanoid";
import { useGetCars } from "@/hooks/useGetCars";
import { useGetPagesLength } from "@/hooks/useGetPagesLength";
import { pagesCount } from "@/utils/pagesCount";
import { GlobalContext } from "@/context";

import Image, { StaticImageData } from "next/image";

import leftArrow from "../../public/Images/left-arrow.png";
import rightArrow from "../../public/Images/right-arrow.png";
import leftFocusArrow from "../../public/Images/left-black-arrow.png";
import rightFocusArrow from "../../public/Images/right-black-arrow.png";

import "../style/components/_pagination.scss";

type TCounterState = {
  srcLeftArrow: StaticImageData;
  srcRightArrow: StaticImageData;
};

type TCounterAction =
  | { type: "HOVER_LEFT" }
  | { type: "UNHOVER_LEFT" }
  | { type: "HOVER_RIGHT" }
  | { type: "UNHOVER_RIGHT" };

const changeArrow = (state: TCounterState, action: TCounterAction) => {
  switch (action.type) {
    case "HOVER_LEFT":
      return { ...state, srcLeftArrow: leftFocusArrow };
    case "UNHOVER_LEFT":
      return { ...state, srcLeftArrow: leftArrow };

    case "HOVER_RIGHT":
      return { ...state, srcRightArrow: rightFocusArrow };

    case "UNHOVER_RIGHT":
      return { ...state, srcRightArrow: rightArrow };

    default:
      return state;
  }
};

const initialState: TCounterState = {
  srcLeftArrow: leftArrow,
  srcRightArrow: rightArrow,
};

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { changePage, setChangePage, showFullScreenFilter } =
    useContext(GlobalContext);

  console.log(changePage);

  const [state, dispatch] = useReducer(changeArrow, initialState);

  const { isLoading } = useGetCars();
  const { pagesLengthCount } = useGetPagesLength();

  const handleNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const nextPage = currentPage + 1;

    setTimeout(() => {
      setCurrentPage(nextPage);
    }, 1000);

    if (changePage <= pagesLengthCount) {
      setChangePage((currentPage + 1) * 20);
    }
  };

  const handlePreviousPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setCurrentPage(currentPage - 1);
    }, 1000);

    if (changePage > 20) {
      setChangePage((currentPage - 1) * 20);
    }
  };

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
    setChangePage(page * 20);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  if (isLoading) return null;

  return (
    <div
      className={`pagination-container ${
        showFullScreenFilter ? "show-full-screen-filter" : ""
      }`}
    >
      <button
        onMouseOver={() => dispatch({ type: "HOVER_LEFT" })}
        onMouseLeave={() => dispatch({ type: "UNHOVER_LEFT" })}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="left-arrow"
      >
        <Image
          className="left-arrow-image"
          src={state.srcLeftArrow}
          alt="Left Arrow"
        />
      </button>
      {pagesCount(pagesLengthCount).map((page) => {
        return (
          <button
            onClick={() => handleCurrentPage(page)}
            key={nanoid()}
            className={`page ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        );
      })}
      <button
        onMouseOver={() => dispatch({ type: "HOVER_RIGHT" })}
        onMouseLeave={() => dispatch({ type: "UNHOVER_RIGHT" })}
        className="right-arrow"
        onClick={handleNextPage}
        disabled={pagesCount(pagesLengthCount).length === currentPage}
      >
        <Image
          className="right-arrow-image"
          src={state.srcRightArrow}
          alt="Right Arrow"
        />
      </button>
    </div>
  );
}
