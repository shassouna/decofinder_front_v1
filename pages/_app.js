// import "react-input-range/lib/css/index.css"
import "react-perfect-scrollbar/dist/css/styles.css"
import 'react-toastify/dist/ReactToastify.css'
// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"
//import "react-responsive-modal/styles.css"
// import WOW from 'wowjs'
// Swiper Slider
import "swiper/css"
import "swiper/css/navigation"
import "../public/assets/css/main.css"
import { appWithTranslation } from 'next-i18next'
import GlobalFunctions from "./../components/elements2/GlobalFunctions"
import Layout from "./../components/layout/Layout"
import { useTranslation } from "next-i18next"
import axios from "axios"


function MyApp({ Component, pageProps }) {


    // Translations
    const {t : translate} = useTranslation("home")

    return (
        <Layout noBreadcrumb="d-none"> 
            <Component {...pageProps} GlobalFunctions={GlobalFunctions} />

        </Layout>
    )
}

export default appWithTranslation(MyApp)

