import Image from "next/image";
import Link from "next/link";
import { ICars } from "@/hooks/useGetCars";
import defaultImage from "../../public/Images/menu-icon.png";

import "@/style/components/_gridItem.scss";

export default function GridItem({
  carLink,
  carYear,
  carModel,
  carPrice,
  carImage,
}: ICars) {
  return (
    <div className="grid-item">
      <figure className="car-image-wrapper">
        <Image
          unoptimized
          width={100}
          height={100}
          loading="lazy"
          src={carImage}
          alt="Car Image"
        />
      </figure>
      <div className="car-info-wrapper">
        <p className="car-title">{carModel}</p>
        <p className="price">{carPrice}$</p>
        <p className="car-year">{carYear}</p>
        <Link target="_blank" href={carLink} className="car-link-button">
          Show Car
        </Link>
      </div>
    </div>
  );
}
