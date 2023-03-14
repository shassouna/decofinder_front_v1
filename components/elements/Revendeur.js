
const Revendeur = ({revendeur}) => {


    return (
            <div className="vendor-wrap mb-10 style-2">
                <div className="vendor-img-action-wrap w-100">
                {revendeur["attributes"]["exposant"]&&
                    <div className="vendor-img">
                        <a target="_blank" href={revendeur["attributes"]["lien"]}>
                            <img className="default-img" src={`${process.env.BASE_URL_SERVER}${revendeur["attributes"]["exposant"]["data"]["attributes"]["logo"]["data"]["attributes"]["url"]}`} alt="" />
                        </a>
                    </div>
                }
                    {revendeur["attributes"]["prix"]&&                                    
                        <div className="clearfix product-price-cover text-center">
                            <div className="product-price primary-color float-left">
                                <span className="current-price  text-brand" style={{fontSize : "20px", fontWeight : "bold"}}>{revendeur["attributes"]["prix"]&&revendeur["attributes"]["prix"] + " €"}</span>
                            </div>
                        </div>
                    }
                </div>
            </div>   
    )
}

export default Revendeur