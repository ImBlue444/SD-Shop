import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.scss";
import Image from "next/image";
import WallPic from "./../../public/inverno.png";

function MacroCard() {
  return (
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
          <Image
            rel="preload"
            priority
            loading="eager"
            alt="timedOffer"
            src={WallPic}
          />
        </div>

        <div>
          <Image loading="eager" alt="timedOffer" src={WallPic} />
        </div>

        <div>
          <Image loading="eager" alt="timedOffer" src={WallPic} />
        </div>
      </Carousel>
    </div>
  );
}

export default MacroCard;
