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
  const [activeIndex, setActiveIndex] = useState(16);

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
                  <h1 className="mb-10">{translate("INFORMATIONS SUR")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Qu'est-ce")}
                    </h2>
                    <p>{translate("Les cookies")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Finalité des")}
                    </h2>
                    <p>{translate("Nous utilisons")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Notre utilisation")}
                    </h2>
                    <p>{translate("Nous utilisons 2")}</p>
                    <ul>
                      <li>- {translate("Mémoriser vos")}</li>
                      <li>- {translate("Vous identifier")}</li>
                      <li>- {translate("Mémoriser les")}</li>
                      <li>- {translate("Réunir des")}</li>
                      <li>- {translate("Mémoriser vos 2")}</li>
                      <li>- {translate("Collecter des")}</li>
                      <li>- {translate("Déterminer si")}</li>
                    </ul>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Informations collectées")}
                    </h2>
                    <p>{translate("Les cookies 2")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Types de")}
                    </h2>
                    <p>{translate("Cookies de")}</p>
                    <p>{translate("Cookies permanents")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Gestion des")}
                    </h2>
                    <p>{translate("Le menu")}</p>
                    <ul className="mb-10">
                      <li>- {translate("d'afficher vos")}</li>
                      <li>- {translate("d'autoriser les")}</li>
                      <li>- {translate("de désactiver")}</li>
                      <li>- {translate("de désactiver 2")}</li>
                      <li>- {translate("de bloquer")}</li>
                      <li>- {translate("d'être informé")}</li>
                    </ul>
                    <p>{translate("Veuillez noter")}</p>
                    <p>{translate("Veuillez noter 2")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Informations supplémentaires")}
                    </h2>
                    <p>{translate("Pour en")}</p>
                    <ul className="mb-10">
                      <li>- {translate("www.allaboutcookies.org")}</li>
                      <li>- {translate("http")}</li>
                      <li>- {translate("www.international")}</li>
                    </ul>
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
