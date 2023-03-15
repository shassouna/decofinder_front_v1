
import SingleProduct from "./SingleProduct"

const RelatedSlider = ({Products, translate}) => {

    return (    
            <div className="row product-grid-3">
                {Products.length === 0 && (
                    <h3>{translate("Pas de produits")}</h3>
                )}
                {
                Products.map((product, i) => (
                    <div key={i} className="col-lg-1-5 col-md-4 col-sm-6 col-12">
                        <SingleProduct product={product} translate = {translate}/>
                    </div>
                ))}
            </div>
    )
}

export default RelatedSlider
