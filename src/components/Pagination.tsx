"use client";

import { useReducer } from "react";
import { nanoid } from "nanoid";
import { useGetCars } from "@/hooks/useGetCars";

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
  const pages = ["1", "2", "...", "9", "10"];

  const [state, dispatch] = useReducer(changeArrow, initialState);

  const { isLoading } = useGetCars();

  if (isLoading) return;

  return (
    <div className="pagination-container">
      <button
        onMouseOver={() => dispatch({ type: "HOVER_LEFT" })}
        onMouseLeave={() => dispatch({ type: "UNHOVER_LEFT" })}
        className="left-arrow"
      >
        <Image
          className="left-arrow-image"
          src={state.srcLeftArrow}
          alt="Left Arrow"
        />
      </button>
      {pages.map((page) => {
        return (
          <button key={nanoid()} className="page">
            {page}
          </button>
        );
      })}
      <button
        onMouseOver={() => dispatch({ type: "HOVER_RIGHT" })}
        onMouseLeave={() => dispatch({ type: "UNHOVER_RIGHT" })}
        className="right-arrow"
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
