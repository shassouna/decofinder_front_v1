// Import from components
import UniversTag from "../../../components/elements/Univers";
import CategoryTag from "../../../components/elements/Category";
// Import from libraries
import axios from "axios";
// Import from react
import { useState } from "react";
// Import from Next
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Superunivers(props) {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // Translations
  const { t: translate } = useTranslation("superunivers");

  // States
  const [Superunivers, setSuperunivers] = useState(props["Superunivers"]);
  const [Universs, setUniverss] = useState(props["Universs"]);
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  return (
    <div className="container custom mt-50">
      {/* Superunivers decription begin */}
      <div className="newsletter mb-15  wow animate__animated animate__fadeIn">
        <div className="position-relative newsletter-inner">
          <div className="newsletter-content" style={{ textAlign: "center" }}>
            <h2 className="mb-20">
              Superunivers : {Superunivers["attributes"]["LIB"]}
            </h2>
            <p
              className="mb-20"
              dangerouslySetInnerHTML={{
                __html: Superunivers["attributes"]["DESCR"],
              }}
            />
          </div>
        </div>
      </div>
      {/* Superunivers decription end */}

      {/* list of univers begin */}
      <div className="mb-50">
        <h2 className="mb-30">{translate("Les Univers")} :</h2>
        <div className="loop-grid">
          <div className="row">
            {Universs.map((univers) => (
              <UniversTag key={univers["id"]} univers={univers} />
            ))}
          </div>
        </div>
      </div>
      {/* list of univers end */}

      {/* list of univers categories begin */}
      {Universs.map((univers) => (
        <div className="mb-50" key={univers["id"]}>
          <h2 className="mb-30">{univers["attributes"]["LIB"]}</h2>
          <h3 className="mb-30">{translate("Les catégories")} :</h3>
          <div className="loop-grid">
            <div className="row">
              {univers["attributes"]["categories"]["data"].map((category) => (
                <CategoryTag key={category["id"]} category={category} />
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* list of univers categories end */}
    </div>
  );
}

export default Superunivers;

export async function getServerSideProps(context) {
  // Declarations
  let findSuperunivers = undefined;

  // Import qs
  const qs = require("qs");

  // Query superunivers
  const query = qs.stringify({
    populate: [
      "univers.image",
      "univers.categories.image",
      // internationalization
      "localizations.univers.image",
      "localizations.univers.categories.image",
    ],
  });
  const superuniversRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/superuniverss/${context["params"]["id"]}?${query}`
  );

  // get localization univers
  findSuperunivers = superuniversRes["data"]["data"]["attributes"][
    "localizations"
  ]["data"].find((e) => e["attributes"]["locale"] == context["locale"]);
  if (!findSuperunivers) findSuperunivers = superuniversRes["data"]["data"];

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [
        "superunivers",
        "home",
      ])),
      Superunivers: findSuperunivers,
      Universs: findSuperunivers["attributes"]["univers"]["data"],
    },
  };
}
