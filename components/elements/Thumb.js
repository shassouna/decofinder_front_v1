import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ Images }) => {
  const [ImagesState, setImagesState] = useState(Images);

  const handleChangePrincipalImage = (idImage) => {
    let tab = [...ImagesState];
    tab = tab.filter((image) => image["id"] != idImage);
    tab.splice(
      0,
      0,
      Images.find((image) => image["id"] == idImage)
    );
    setImagesState(tab);
  };

  return (
    ImagesState && (
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          //navigation={true}
          className="mySwiper2"
        >
          {ImagesState.map((item) => (
            <SwiperSlide key={item["id"]}>
              <img
                className="w-100 text-center"
                src={
                  item["attributes"]["url"]
                    ? `${item["attributes"]["url"]}`
                    : "/assets/imgs/theme/image_blanche.png"
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={ImagesState.length - 1}
          freeMode={true}
          watchSlidesProgress={true}
          className="mySwiper"
        >
          {ImagesState.map(
            (item) =>
              item["id"] != ImagesState[0]["id"] && (
                <SwiperSlide
                  key={item["id"]}
                  onClick={() => handleChangePrincipalImage(item["id"])}
                >
                  <img
                    src={`${process.env.BASE_URL_SERVER}${item["attributes"]["url"]}`}
                    key={item["id"]}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </>
    )
  );
};

export default ThumbSlider;
