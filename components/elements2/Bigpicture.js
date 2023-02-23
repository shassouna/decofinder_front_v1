import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

SwiperCore.use([Navigation, Pagination])

const Bigpicture = ({Bigpictures}) => {

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
            {Bigpictures.map(bigpicture=>(
                <SwiperSlide key={bigpicture["id"]}>
                    <div className="single-hero-slider single-animation-wrap"
                         style={{
                            backgroundImage:`url(${process.env.BASE_URL_SERVER}${bigpicture["attributes"]["image"]["data"]["attributes"]["url"]})`,
                            display:"flex", 
                            justifyContent:"center", 
                            alignItems:"center"}}>
                        <Link 
                        href={`/u/${bigpicture["attributes"]["univer"]["data"]["id"]}/${bigpicture["attributes"]["univer"]["data"]["attributes"]["slug"]}`}
                        as={`/u${bigpicture["attributes"]["univer"]["data"]["id"]}/${bigpicture["attributes"]["univer"]["data"]["attributes"]["slug"]}`}>
                        <a className="btn">
                            {bigpicture["attributes"]["titre"]}
                        </a>
                        </Link>
                    </div>
                </SwiperSlide> 
            ))}

            </Swiper>
            {Bigpictures.length>1&&
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

export default Bigpicture
