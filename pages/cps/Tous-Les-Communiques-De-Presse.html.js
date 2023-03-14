// Import from components
import CommuniquesTag from "../../components/elements/Communiques"
// Import from Next
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
// Import from libraries
import axios from "axios"

function TousLesCommuniquesDePresse({Communiques}) {
  console.log(Communiques)

    // Translations
    const {t : translate} = useTranslation("communique")

  return (
          <div className="container mt-60">
            <h1 className="text-center">{translate("Communiqués de Presse")}</h1>
            <div className="row">
              <CommuniquesTag communiques = {Communiques} translate={translate}/> 
            </div>
          </div>
  )
}

export default TousLesCommuniquesDePresse

export async function getServerSideProps (context) {

  // Import qs
  const qs = require("qs")

  // Query Communiques 
  const queryCommuniques = qs.stringify({
    populate : ["images"],
    locale: context["locale"] 
  })
  const communiquesRes = await axios.get(`${process.env.BASE_URL_SERVER}/api/communiques?${queryCommuniques}`) 

  return {
      props: {
            ...(await serverSideTranslations(context["locale"],["communique","home"])),
            Communiques : communiquesRes["data"]["data"]
      }  
  }
}
