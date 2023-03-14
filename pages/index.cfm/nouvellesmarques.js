// Import from Components
import SingleProduct from "../../components/elements/SingleProduct"
// Import from Next
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Import from Libraries
import axios from "axios"
function Nouvellesmarques({Exposants}) {
    /*---------------------------------------------------Hooks begin---------------------------------------------------*/

    // Translations
    const {t : translate} = useTranslation("nouvellesmarques")
    /*---------------------------------------------------Hooks end---------------------------------------------------*/   
  return (
    <>
        <div className="page-content pt-50">
            <div className="container">
                <div className="archive-header-2 text-center">
                    <h1 className="display-2 mb-50">{translate("Nouvelles Marques")}</h1>
                </div>
                {Exposants.map(exposant=>(
                <div key={exposant["id"]} className="row mb-50" style={{background : "rgba(238, 238, 238, 0.3)", padding : "15px"}}>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-center mb-20" style={{display : "flex", flexDirection : "column", justifyContent : "center", alignItems : "center"}}>
                        <div className="vendor-img-action-wrap mb-20">
                            <div className="vendor-img"></div>
                                <Link href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}
                                as={`/ss${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                                    <a>
                                        <img className="default-img" src={`${process.env.BASE_URL_SERVER}${exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`} alt="" />
                                    </a>
                                </Link>
                        </div>
                        <div className="vendor-content-wrap">
                            <div className="d-flex justify-content-center align-items-end mb-10">
                                <div>
                                    <h4 className="text-center mb-5">
                                        <Link 
                                        href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}
                                        as={`/ss${exposant["id"]}/${exposant["attributes"]["slug"]}`}>
                                            <a>{exposant["attributes"]["NOM"]}</a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-end mb-10">
                            {exposant["attributes"]["produits"]["data"].length>0&&
                                <div className="mb-10">
                                    <span className="font-small total-product">{exposant["attributes"]["produits"]["data"].length} {translate("PRODUITS")}</span>
                                </div>
                            }
                            </div>
                            <div className="vendor-info mb-30">
                                <ul className="contact-infor text-muted">
                                    <li><img src="/assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>{translate("Adresse")}: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                                    <li><img src="/assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>PAYS : </strong><span>{exposant["attributes"]["pay"]["data"]["attributes"]["LIB"]}</span></li>
                                </ul>
                            </div>
                            <a target="_blank" href={exposant["attributes"]["SRV_INTERNET"]} className="btn btn-xs">{translate("Visiter le site")} <i className="fi-rs-arrow-small-right"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 col-12" style={{display  : "flex", justifyContent : "center", alignItems : "center"}}>
                        <div className="row">
                            {exposant["attributes"]["produits"]["data"].length === 0 && (
                                <h2>{translate("Pas de produits")}</h2>
                            )}
                            {exposant["attributes"]["produits"]["data"].map(product => (
                                <div
                                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                                    key={product["id"]}
                                >
                                    <SingleProduct product={product} translate = {translate}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
</>
  )
}

export default Nouvellesmarques

export async function getServerSideProps (context) {

    // Import qs
    const qs = require("qs")

    // Query Recent 25 exposants
    const queryDerniersExposants = qs.stringify({
        populate : ["logo", 
                    "pay",
                    "produits.images",
                    "produits.exposant",
                    "produits.typeprod"
                ],
        sort: ['createdAt:desc'],
        pagination: {
            limit: 2
        },
        locale : context["locale"]      
    })
    const derniersExposantsRes = await axios.get(`${process.env.BASE_URL_SERVER}/api/exposants?${queryDerniersExposants}`)

    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["nouvellesmarques", "home"])),
            Exposants : derniersExposantsRes["data"]["data"]
        }  
    }
}
