import CarsGrid from "@/components/CarsGrid";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <CarsGrid />
      </Suspense>
    </>
  );
}
