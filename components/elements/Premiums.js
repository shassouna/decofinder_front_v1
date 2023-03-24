import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination, EffectFade])

const Premiums = ({premiums}) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
            {premiums.map(premium=>(
                premium["attributes"]["image"]["data"]&&
                <SwiperSlide key={premium["id"]}>
                    <a target="_blank" href={premium["attributes"]["exposant"]["data"]&&premium["attributes"]["exposant"]["data"]["attributes"]["SRV_INTERNET"]}>
                        <div className="single-hero-slider single-animation-wrap">
                            <div className="slider-img" style={{width:"100%", display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <img src={`${process.env.BASE_URL_SERVER}${premium["attributes"]["image"]["data"]["attributes"]["url"]}`} alt=""/>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    )
}

export default Premiums