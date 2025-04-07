import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = ({images = []}) => {

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              style={{
                maxHeight: "200px",
                width: "100%",
                objectFit: "contain",
                backgroundColor: "transparent",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default ImageCarousel