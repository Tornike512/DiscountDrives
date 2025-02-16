import CarsGrid from "@/components/CarsGrid";
import MainNote from "@/components/MainNote";
import Sort from "@/components/Sort";
import FilterCars from "@/components/FilterCars";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <FilterCars />
      <div className="main-wrapper">
        <Sort />
        <MainNote />
        <CarsGrid />
        <Sidebar />
      </div>
    </>
  );
}
