import CarsGrid from "@/components/CarsGrid";
import MainNote from "@/components/MainNote";
import Sort from "@/components/Sort";
import FilterCars from "@/components/FilterCars";
import Pagination from "@/components/Pagination";

export default function HomePage() {
  return (
    <>
      <FilterCars />
      <div className="main-wrapper">
        <Sort />
        <MainNote />
        <CarsGrid />
        <Pagination />
      </div>
    </>
  );
}
