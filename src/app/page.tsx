import CarsGrid from "@/components/CarsGrid";
import MainNote from "@/components/MainNote";
import Sort from "@/components/Sort";
import { GlobalProvider } from "@/context";

export default function Home() {
  return (
    <GlobalProvider>
      <Sort />
      <MainNote />
      <CarsGrid />
    </GlobalProvider>
  );
}
