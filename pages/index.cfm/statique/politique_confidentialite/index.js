// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function InformationsCookies() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(17);

  // Translations
  const { t: translate } = useTranslation("informations_cookies");
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  return (
    <div className="container page-content pt-40 pb-40">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 col-12">
          <div className="dashboard-menu">
            <LeftSideBar
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              translate={translate}
            />
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="tab-content account dashboard-content pl-50">
            <div className="tab-pane fade active show">
              <div className="card">
                <div className="card-header mb-20">
                  <h1 className="mb-10">{translate("POLITIQUE DE")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Collecte des")}
                    </h2>
                    <p>{translate("Lorsque vous")}</p>
                    <p style={{ fontWeight: "bold" }}>
                      {translate("Données personnelles")}
                    </p>
                    <p>{translate("Nous recueillons")}</p>
                    <p>{translate("Communications. Lors")}</p>
                    <p style={{ fontWeight: "bold" }}>
                      {translate("Données personnelles")}
                    </p>
                    <p>{translate("Decofinder peut")}</p>
                    <p style={{ fontWeight: "bold" }}>
                      {translate("Cookies et")}
                    </p>
                    <p>{translate("Dans le")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Utilisation des")}
                    </h2>
                    <p>{translate("Decofinder utilise")}</p>
                    <p>{translate("Cela permet")}</p>
                    <p>{translate("Les messages")}</p>
                    <p>{translate("Decofinder pourra")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Partage de")}
                    </h2>
                    <p>{translate("Decofinder ne")}</p>
                    <p style={{ fontWeight: "bold" }}>
                      {translate("Annonceurs et")}
                    </p>
                    <p>{translate("Decofinder utilise")}</p>
                    <p>{translate("Decofinder peut")}</p>
                    <p>{translate("Les entreprises")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Protection des")}
                    </h2>
                    <p>{translate("Nous appliquons")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Mises à")}
                    </h2>
                    <p>
                      {translate("Decofinder peut")}
                      {translate("Notre utilisation")}
                      {translate("Si nous")}
                    </p>
                    <p>{translate("En continuant")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          {<RightSideBar />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [
        "informations_cookies",
        "home",
      ])),
    },
  };
}
