export default function FilterCars() {
  return (
    <div className="filter-container">
      <form>
        <select name="manufacturer">
          <option value="default">Manufacturer</option>
        </select>
        <select name="model">
          <option value="default">Model</option>
        </select>
        <select name="year">
          <option value="default">Year</option>
        </select>
        <select name="price">
          <option value="default">Price</option>
        </select>
      </form>
      <button>Search</button>
    </div>
  );
}
