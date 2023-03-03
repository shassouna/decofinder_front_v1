// Import from Next
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
function TousLesCommuniquesDePresse() {
  return (
    <h1>Tous-Les-Communiques-De-Presse.html</h1>
  )
}

export default TousLesCommuniquesDePresse

export async function getServerSideProps (context) {
    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["home"])),
        }  
    }
}
