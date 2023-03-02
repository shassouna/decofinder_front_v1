import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination])

const SliderPicture = ({Items}) => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                
                pagination={true}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
            {Items.map(item=>(
                <SwiperSlide key={item["id"]}>
                    <div className="single-hero-slider single-animation-wrap"
                        style={{
                            backgroundImage:`url(${process.env.BASE_URL_SERVER}${item["attributes"]["image"]["data"]["attributes"]["url"]})`,
                            display:"flex", 
                            justifyContent:"center", 
                            alignItems:"center"}}>
                        <a className="btn" href={item["attributes"]["lien"]}>
                            {item["attributes"]["titre"]}
                        </a>
                    </div>
                </SwiperSlide> 
            ))}

            </Swiper>
            {Items.length>1&&
            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
            }
        </>
    )
}

export default SliderPicture
