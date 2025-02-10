import CarsGrid from "@/components/CarsGrid";
import Sort from "@/components/Sort";
import { GlobalProvider } from "@/context";

export default function Home() {
  return (
    <GlobalProvider>
      <Sort />
      <CarsGrid />
    </GlobalProvider>
  );
}
