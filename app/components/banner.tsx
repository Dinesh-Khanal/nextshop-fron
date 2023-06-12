"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <Carousel showThumbs={false} infiniteLoop interval={5000} autoPlay>
      <div className="relative">
        <Image
          src="/images/banner1.jpg"
          alt="banner image 1"
          width={1500}
          height={400}
          priority={true}
          className="object-contain"
        />
      </div>
      <div className="relative">
        <Image
          src="/images/banner2.jpg"
          alt="banner image 2"
          width={1500}
          height={400}
          priority={true}
          className="object-contain"
        />
      </div>
    </Carousel>
  );
}
