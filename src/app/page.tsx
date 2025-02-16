import CarsGrid from "@/components/CarsGrid";
import MainNote from "@/components/MainNote";
import Sort from "@/components/Sort";
import FilterCars from "@/components/FilterCars";
import { GlobalProvider } from "@/context";

export default function Home() {
  return (
    <GlobalProvider>
      <FilterCars />
      <div className="main-wrapper">
        <Sort />
        <MainNote />
        <CarsGrid />
      </div>
    </GlobalProvider>
  );
}
