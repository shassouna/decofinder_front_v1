
import SingleProduct from "./SingleProduct"

const RelatedSlider = ({Products, translate}) => {

    return (         
        <div className="row">
            {Products.map((product, i) => (
                <div key={product["id"]} className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
                    <SingleProduct product={product} translate={translate}/>
                </div>
            ))}
        </div> 
    )
}

export default RelatedSlider
