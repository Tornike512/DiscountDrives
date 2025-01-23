import Image from "next/image";
import carImage from "../../public/Images/1690714823637.jpg";
import Link from "next/link";

import "@/style/components/_gridItem.scss";

export default function GridItem() {
  return (
    <div className="grid-item">
      <figure className="car-image-wrapper">
        <Image src={carImage} alt="Car Image" />
      </figure>
      <div className="car-info-wrapper">
        <p className="car-title">title</p>
        <p className="price">price</p>
        <button className="car-link-button">Show Car</button>
      </div>
    </div>
  );
}
