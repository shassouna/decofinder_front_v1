// Import from Next
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
function Nl_archive() {
  return (
    <h1>Newsletters</h1>
  )
}

export default Nl_archive

export async function getServerSideProps (context) {
    return {
        props: {
            ...(await serverSideTranslations(context["locale"],["home"])),
        }  
    }
}
