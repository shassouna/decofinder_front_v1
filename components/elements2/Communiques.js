import React from "react"
import Link from "next/link"

const Communiques = ({communiques, translate}) => {
    return (
        communiques.map(communique=>(
            <div className="col-lg-4 col-md-6" key={communique["id"]}>
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    {communique["attributes"]["images"]["data"]?
                    <img src={`${process.env.BASE_URL_SERVER}${communique["attributes"]["images"]["data"][0]["attributes"]["url"]}`} alt="" style={{height:"300px", width:"100%", opacity: 0.5}}/>
                    :
                    <img src="/assets/imgs/theme/image_blanche.png" alt="" style={{height:"300px", width:"100%", opacity: 0.5}}/>   
                    }
                    <div className="banner-text">
                        <h5 className="mb-5">{communique["attributes"]["titre"]}</h5>
                        <p style={{color:"black"}}>{communique["attributes"]["description"].substring(0,200)}</p>
                        <Link href="#">
                            <a className="btn btn-xs">
                            {translate("Lire plus")}<i className="fi-rs-arrow-small-right"></i>
                             </a>
                        </Link>
                    </div>
                </div>
            </div>
        ))           
    )
}

export default Communiques
