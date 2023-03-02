import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination])

const SliderSelection = ({Item}) => {

    return (
        <>
            <Swiper
                autoplay={true}
                slidesPerView={1}
                spaceBetween={0}
                
                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
            {Item["attributes"]["images"]["data"].map(image=>(
                <SwiperSlide key={image["id"]}>
                    <div key={image["id"]} className="single-animation-wrap"
                        style={{backgroundImage:`url(${process.env.BASE_URL_SERVER}${image["attributes"]["url"]})`, height:"300px"}}>
                    </div>
                </SwiperSlide> 
            ))}
            </Swiper>
        </>
    )
}

export default SliderSelection
