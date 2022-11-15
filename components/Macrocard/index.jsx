import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.scss";
import Image from "next/image";
import WallPic from "./../../public/Wall.jpg";

function MacroCard() {
  return (
    <div>
      <div className={styles.Carousel}>
        <Carousel
          dynamicHeight={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={false}
          infiniteLoop={true}
        >
          <div>
            <Image alt="timedOffer" src={WallPic} />
          </div>

          <div>
            <Image alt="timedOffer" src={WallPic} />
          </div>

          <div>
            <Image alt="timedOffer" src={WallPic} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default MacroCard;
