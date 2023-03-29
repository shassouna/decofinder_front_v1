import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/main.css";
import { appWithTranslation } from "next-i18next";
import GlobalFunctions from "./../components/elements/GlobalFunctions";
import Layout from "./../components/layout/Layout";
import { useTranslation } from "next-i18next";
import axios from "axios";

MyApp.getInitialProps = async (context) => {
  // Declaration
  const timeNowMs = Date.now();

  // import qs
  const qs = require("qs");

  // Query (Selection) Banniere
  const querySelection = qs.stringify({
    populate: ["image"],
    filters: {
      date_debut: { $lt: timeNowMs },
      date_fin: { $gt: timeNowMs },
      Afficher_dans_homepage: { $eq: false },
    },
    locale: context["router"]["locale"],
  });
  const resBannieres = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/bannieres?${querySelection}`
  );

  // Query Superunivers
  const querySuperunivers = qs.stringify({
    populate: ["univers.categories", "univers"],
    locale: context["router"]["locale"],
  });
  const resSuperunivers = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/superuniverss?${querySuperunivers}`
  );

  return {
    superuniverss: resSuperunivers.data.data,
    bannieres: resBannieres.data.data,
  };
};

function MyApp({ Component, pageProps, superuniverss, bannieres }) {
  // Translations
  const { t: translate } = useTranslation("home");

  return (
    <Layout
      noBreadcrumb="d-none"
      superuniverss={superuniverss}
      bannieres={bannieres}
      translate={translate}
    >
      <div style={{ minHeight: "2000px" }}>
        <Component {...pageProps} GlobalFunctions={GlobalFunctions} />
      </div>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
