import "@/style/components/_sort.scss";

export default function Sort() {
  return (
    <select className="select">
      <option value="default">Sort</option>
      <option value="desc">Alphabetical (A-Z)</option>
      <option value="asc">Alphabetical (Z-A)</option>
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="low-to-high">Lowest to Highest</option>
      <option value="high-to-low">Highest to Lowest</option>
    </select>
  );
}
