import "@/style/components/_filterCars.scss";

export default function FilterCars() {
  return (
    <div className="filter-container">
      <form className="filter-form">
        <select className="manufacturer-select" name="manufacturer">
          <option value="default">Manufacturer</option>
        </select>
        <select disabled className="model-select" name="model">
          <option value="default">Model</option>
        </select>
        <select className="year-select" name="year">
          <option value="default">Year</option>
        </select>
        <select className="price-select" name="price">
          <option value="default">Price</option>
        </select>
      </form>
      <button className="search-car">Search</button>
    </div>
  );
}
