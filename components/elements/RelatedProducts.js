
import SwiperCore, { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import SingleProduct from "./SingleProduct"

SwiperCore.use([Navigation])

const RelatedSlider = ({Products, translate, showButtonInSingleProduct}) => {

    return (         
            Products.map((product, i) => (
                <div key={product["id"]} className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
                    <SingleProduct product={product} translate={translate}/>
                </div>
            ))   
    )
}

export default RelatedSlider
