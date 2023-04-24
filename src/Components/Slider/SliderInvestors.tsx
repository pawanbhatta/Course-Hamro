import { Box, BoxProps, VStack } from "@chakra-ui/react";
import * as React from "react";
import {
  Swiper as SwiperComponent,
  SwiperProps,
  useSwiper
} from "swiper/react";
import Swiper, { Pagination, Autoplay, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./pagination.css";

function SliderInvestor({
  navNext,
  navPrev,
  children,
  ...rest
}: {
  navNext: React.RefObject<HTMLSpanElement | null>;
  navPrev: React.RefObject<HTMLSpanElement | null>;
} & BoxProps) {
  const unique = Math.floor(Math.random() * 1000000);
  const swiperMain = React.useRef<Swiper | null>(null);
  const createSwipers = () => {
    swiperMain.current = new Swiper(".header-swiper-main" + unique, {
      centeredSlides: true,
      spaceBetween: 10,
      slidesPerGroup: 1,
      slidesPerView: 4,

      initialSlide: 0,
      loop: true,
      effect: "creative",
      grabCursor: true,
      watchSlidesProgress: true,

      creativeEffect: {
        perspective: true,
        limitProgress: 1,
        shadowPerProgress: true,
        prev: {
          shadow: true,
          translate: ["-10%", 0, 0],
          rotate: [0, 0, -2],
          scale: 0.8
        },
        next: {
          shadow: false,
          translate: ["+10%", 0, 0],
          scale: 0.8
        }
      },

      speed: 300,
      observer: true,
      observeParents: false,

      modules: [Navigation, Pagination, Autoplay]
    });
  };
  React.useEffect(() => {
    const next = () => swiperMain.current?.slideNext();
    const prev = () => swiperMain.current?.slidePrev();
    if (navNext.current && navPrev.current) {
      createSwipers();
      navNext.current.addEventListener("click", next);
      navPrev.current.addEventListener("click", prev);
    }
    return () => {
      if (swiperMain.current) {
        navNext.current?.removeEventListener("click", next);
        navPrev.current?.removeEventListener("click", prev);
        swiperMain.current.destroy();
      }
    };
  }, [navNext.current, navPrev.current]);

  return navNext ? (
    <Box w="100%" {...rest}>
      <SwiperComponent className={"header-swiper-main" + unique}>
        {children}
      </SwiperComponent>
    </Box>
  ) : null;
}

export default SliderInvestor;
