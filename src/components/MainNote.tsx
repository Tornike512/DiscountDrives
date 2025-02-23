"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context";

import "@/style/components/_mainNote.scss";

export default function MainNote() {
  const { showFullScreenFilter } = useContext(GlobalContext);

  return (
    <p
      className={`main-note ${
        showFullScreenFilter ? "show-full-screen-filter" : ""
      }`}
    >
      Please keep in mind that some of the cars listed on the website may be
      removed at any time, as availability is subject to change.
    </p>
  );
}
