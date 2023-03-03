// Import from components
import SliderPictureTag from "./../components/elements2/SliderPicture"
import SuperuniverssSlider from "../components/elements2/SliderSuperuniverss"
import RelatedProducts from "./../components/elements2/RelatedProducts"
import NouveautesProducts from "./../components/elements2/NouveautesProducts"
import Description from "../components/elements2/DescriptionHome"
import CommuniquesTag from "./../components/elements2/Communiques"
import Section4 from "./../components/elements2/Section4"
// Import from Next
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// import from libraries
import axios from "axios" 
// import from react
import {useState} from "react"

export default function Home(props) {

    /*---------------------------------------------------Hooks begin---------------------------------------------------*/
    // Routers
    const router = useRouter()

    // Translations
    const {t : translate} = useTranslation("home")

    // States
    const [Superuniverss, setSuperuniverss] = useState(props["Superuniverss"])
    const [Products_Home, setProducts_Home] = useState(props["Products_Home"])
    const [Bigpictures, setBigpictures] = useState(props["Bigpictures"])
    const [Communiques, setCommuniques] = useState(props["Communiques"])
    const [Products_Nouveautes, setProducts_Nouveautes] = useState(props["Products_Nouveautes"])
    const [Selections, setSelections] = useState(props["Selections"])
    const [Designers, setDesigners] = useState(props["Designers_Mag"])
    const [Trois_Derniers_Exposants, setTrois_Derniers_Exposants] = useState(props["Trois_Derniers_Exposants"])
    const [Section_Libres, setSection_Libres] = useState(props["Section_Libres"])
    const [Bannieres, setBannieres] = useState(props["Bannieres"])
    const [showButtonInSingleProduct, setShowButtonInSingleProduct] = useState(true)
    /*---------------------------------------------------Hooks end---------------------------------------------------*/
    console.log(Section_Libres)
    return (
        <>

            <div className="home-slider position-relative mb-60">
                <div className="container">
                    <div className="home-slide-cover mt-30">
                        <SliderPictureTag Items = {Bigpictures}/>
                    </div>
                </div>
            </div>

            <div className="container mb-120">
                <div className="row">
                    <div className="col-12">
                        <div className="row related-products position-relative">
                            <RelatedProducts Products = {Products_Home} translate = {translate} showButtonInSingleProduct={showButtonInSingleProduct}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-80">
                <div className="carausel-10-columns-cover position-relative">
                    <div className="col-12">
                        <h3 className="section-title style-1 mb-20">{translate("Tous les Mega Univers")+" :"}</h3>
                    </div>
                    <div className="carausel-10-columns" id="carausel-10-columns">
                        <SuperuniverssSlider Superuniverss={Superuniverss} />
                    </div>
                </div>
            </div>

            <div className="container mb-60" style={{background : "black", padding : "25px"}}>
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                    {Bannieres.map(banniere=>(
                        <div className="text-center" key={banniere["id"]}>
                            <a href={banniere["attributes"]["lien"]}>
                                <img src={process.env.BASE_URL_SERVER+banniere["attributes"]["image"]["data"]["attributes"]["url"]}></img>
                            </a>
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>

            <div className="container mb-60">
                <div className="carausel-10-columns-cover position-relative">
                    <div className="carausel-10-columns" id="carausel-10-columns">
                        <Section4 Selections={Selections} Designers={Designers} Exposants={Trois_Derniers_Exposants} Section_Libres={Section_Libres} translate={translate}/>
                    </div>
                </div>
            </div>

            <div className="container mb-60">
                <div className="row">
                    <Description locale={router["locale"]}/>
                </div>
            </div>

            <div className="container mb-60">
                <div className="row mb-25">
                <CommuniquesTag communiques = {Communiques} translate={translate}/>  
                </div>
                <div  style={{textAlign : "center"}}>
                    <Link href="/cps/Tous-Les-Communiques-De-Presse.html">
                        <a className="btn w-25 hover-up" style={{minWidth : "400px"}}>
                            {translate("Tous les communiqués de presse")}
                        </a>
                    </Link>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h3 className="section-title style-1 mb-20">{translate("Les Nouveautés")} : </h3>
                    <div className="col-12 mt-25">
                        <div className="row related-products position-relative">
                            <NouveautesProducts Products = {Products_Nouveautes} translate = {translate} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps (context) {

    // Declaration
    const timeNowMs = Date.now()
    const timeSixMonthMs = 6*30*24*3600*1000
    const timeBeforeSixMonthMs = timeNowMs - timeSixMonthMs

    // Import qs
    const qs = require("qs")

    // Query Big picture 
    const queryBigPictures = qs.stringify({
        populate : [
            "image",
        ],
        filters : {
            date_debut : {$lt : timeNowMs},
            date_fin : {$gt : timeNowMs}
        },
        locale: context["locale"]
    })
    const bigPicturesRes = await axios.get(`http://localhost:1337/api/grandephotos?${queryBigPictures}`) 

    // Query products to show in home page
    const queryProducts = qs.stringify({
        populate : [
            "images",
            "exposant.logo",
            "typeprod",
            "exposants_revendeurs"
        ],
        filters : {
            Afficher_dans_homepage : {$eq : true}
        },
        locale: context["locale"]
    })
    const productsRes = await axios.get(`http://localhost:1337/api/produits?${queryProducts}`)  

    // Query superunivers
    const querySuperunivers = qs.stringify({
        populate : ["image"],
        locale: context["locale"]
    })
    const superuniversRes = await axios.get(`http://localhost:1337/api/superuniverss?${querySuperunivers}`)

    // Query (Selection) Banniere    
    const querySelection = qs.stringify({
        populate: [
          'image'
      ],
        filters : {
          Afficher_dans_homepage : {$eq : true}
        },
        locale: context["locale"]
      })
      const resBannieres = await axios.get(`http://localhost:1337/api/bannieres?${querySelection}`)   

    // Query selections
    const querySelections = qs.stringify({
        populate : ["images"],
        filters : {
            date_debut : {$lt : timeNowMs},
            date_fin : {$gt : timeNowMs}
        },
        locale: context["locale"]      
    })
    const selectionsRes = await axios.get(`http://localhost:1337/api/selection-dfs?${querySelections}`)

    // Query designers mag
    const queryDesigners = qs.stringify({
        populate : ["image"],
        locale: context["locale"]      
    })
    const designersRes = await axios.get(`http://localhost:1337/api/designer-mags?${queryDesigners}`)
  
    // Query Recent three exposants
    const queryTroisDerniersExposants = qs.stringify({
        populate : ["logo"],
        sort: ['createdAt:desc'],
        pagination: {
            limit: 3
        },
        locale: context["locale"]      
    })
    const troisDerniersExposantsRes = await axios.get(`http://localhost:1337/api/exposants?${queryTroisDerniersExposants}`)

    // Query Section Libre
    const querySectionLibre = qs.stringify({
        populate : ["image"],
        filters : {
            date_debut : {$lt : timeNowMs},
            date_fin : {$gt : timeNowMs}
        },
        locale: context["locale"]    
    })
    const sectionLibreRes = await axios.get(`http://localhost:1337/api/section-libres?${querySectionLibre}`)

    // Query communiques
    const queryCommuniques = qs.stringify({
        populate : ["images"],
        locale: context["locale"]
    })
    const communiquesRes = await axios.get(`http://localhost:1337/api/communiques?${queryCommuniques}`)

    // Query products Nouveautes
    const queryProductsNouveautes = qs.stringify({
        populate : [
            "images",
            "exposant.logo",
            "typeprod",
            "exposants_revendeurs",
            "pay"
        ],
        filters : {
            NOUVEAUTE : {$eq : 1},
            createdAt: {$gt : timeBeforeSixMonthMs}  
        },
        locale: context["locale"]
    })
    const productsNouveautesRes = await axios.get(`http://localhost:1337/api/produits?${queryProductsNouveautes}`)  

    
    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["home"])),
            Products_Home : productsRes["data"]["data"],
            Bigpictures : bigPicturesRes["data"]["data"],
            Superuniverss : superuniversRes["data"]["data"],
            Communiques : communiquesRes["data"]["data"],
            Products_Nouveautes : productsNouveautesRes["data"]["data"],
            Selections : selectionsRes["data"]["data"],
            Designers_Mag : designersRes["data"]["data"],
            Trois_Derniers_Exposants : troisDerniersExposantsRes["data"]["data"],
            Section_Libres : sectionLibreRes["data"]["data"],
            Bannieres : resBannieres["data"]["data"]
        }
    }
}