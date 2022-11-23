import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.scss";
import Image from "next/image";
import sanvalentino from "./../../public/SanValentino.png";

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
        showArrows={true}
        stopOnHover={false}
      >
        <div>
          <Image priority loading="eager" alt="timedOffer" src={sanvalentino} />
        </div>

        <div>
          <Image loading="eager" alt="timedOffer" src={sanvalentino} />
        </div>

        <div>
          <Image loading="eager" alt="timedOffer" src={sanvalentino} />
        </div>
      </Carousel>
    </div>
  );
}

export default MacroCard;
