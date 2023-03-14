
// Import from components
import BlogSingle from "../../../components/elements/BlogSingle"
// Import from Next
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Import from libraries
import axios from "axios"

function PageBlogSingle({Communique, Designers, Section_Libres}) {

    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Translations
    const {t : translate} = useTranslation("communique")
    /*---------------------------------------------------Hooks end---------------------------------------------------*/

    return (
            <section className="mt-50 mb-50">
                <div className="container custom">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogSingle Communique = {Communique} translate={translate}/>
                        </div>
                        <div className="col-lg-4 primary-sidebar sticky-sidebar">
                            <div className="row mt-50 mb-25">
                            {Section_Libres.map(section_libre=>(
                                <div key={section_libre["id"]} className="col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                                    <section className="text-center mb-50 ml-5 mr-5">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-24">
                                                <h2 className="title style-3 mb-40">{section_libre["attributes"]["type"]}</h2>
                                                <a target="_blank" href={section_libre["attributes"]["lien"]}>
                                                <img src={section_libre["attributes"]["image"]["data"]?`${process.env.BASE_URL_SERVER}${section_libre["attributes"]["image"]["data"]["attributes"]["url"]}`:"/assets/imgs/theme/image_blanche.png"} alt="" />
                                                </a>
                                                <h4>{section_libre["attributes"]["titre"]}</h4>
                                                <p>{section_libre["attributes"]["description"].substring(0,200)}</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                ))}
                            </div> 
                            <div className="row mb-25">
                            {Designers.map(designer=>(
                                <div key={designer["id"]} className="col-lg-4 col-md-6 col-sm-6 col-4">
                                    <a target="_blank" href={designer["attributes"]["lien"]}>
                                        <img
                                            className="card"
                                            src={designer["attributes"]["image"]["data"]?`${process.env.BASE_URL_SERVER}${designer["attributes"]["image"]["data"]["attributes"]["url"]}`:"/assets/imgs/theme/image_blanche.png"}
                                            alt=""
                                            style={{ height:"176px", width:"100%"}}
                                        />
                                    </a>
                                </div>
                            ))}
                            </div>    
                            <h6 className="text-center mb-20">Mag deco</h6>
                            <h6 className="text-center">{translate("PORTRAITS DE DESIGNERS")}</h6>                 
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default PageBlogSingle

export async function getServerSideProps (context) {

    // Declaration
    const timeNowMs = Date.now()
    
    let findCommunique = undefined

    // Import qs
    const qs = require("qs")

    // Query Communique
    const queryCommunique = qs.stringify({
        populate : [
            "images",
            "exposants.pay",
            "localizations.images",
            "localizations.exposants.pay"         
        ],
    })
    const communiqueRes = await axios.get(`${process.env.BASE_URL_SERVER}/api/communiques/${context["params"]["id"]}?${queryCommunique}`) 

    // get localization communique
    findCommunique = communiqueRes["data"]["data"]["attributes"]["localizations"]["data"].find(e=>e["attributes"]["locale"]==context["locale"])
    if(!findCommunique) findCommunique = communiqueRes["data"]["data"]
    
    // Query designers mag
    const queryDesigners = qs.stringify({
        populate : ["image"],
        locale: context["locale"]      
    })
    const designersRes = await axios.get(`${process.env.BASE_URL_SERVER}/api/designer-mags?${queryDesigners}`)


    // Query Section Libre
    const querySectionLibre = qs.stringify({
        populate : ["image"],
        filters : {
            date_debut : {$lt : timeNowMs},
            date_fin : {$gt : timeNowMs},
            page : "communiqué"
        },
        locale: context["locale"]    
    })
    const sectionLibreRes = await axios.get(`${process.env.BASE_URL_SERVER}/api/section-libres?${querySectionLibre}`)

    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["communique","home"])),
            Communique : findCommunique,
            Designers : designersRes["data"]["data"],
            Section_Libres : sectionLibreRes["data"]["data"]
        }
    }
}