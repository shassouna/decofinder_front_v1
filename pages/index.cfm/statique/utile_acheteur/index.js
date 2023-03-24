// import from components
import LeftSideBar from "../../../components/elements/LeftSideBar";
import RightSideBar from "../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function APropos() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(3);

  // Translations
  const { t: translate } = useTranslation("utile_acheteur");
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
          <div className="col-lg-3 col-md-3 col-sm-6 col-6"></div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6"></div>
          <div className="tab-content account dashboard-content pl-50">
            <div className="tab-pane fade active show">
              <div className="card">
                <div className="card-header mb-20">
                  <h1 className="mb-10">{translate("DECOFINDER UTILE")}</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className="col-lg-12 mb-lg-0 mb-25">
                        <h3 className="mb-2 text-brand">
                          {translate("L'acheteur face")}
                        </h3>
                        <div className="row mb-10">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <p className="mb-10">
                              {translate("Je cherchais")}
                              {" : "}
                            </p>
                            <p className="mb-10">{translate("Je ne")}</p>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <img src="/assets/imgs/theme/visage_1.jpg" alt="" />
                          </div>
                        </div>
                        <p className="mb-10">{translate("J'ignorais le")}</p>
                        <p className="mb-10">
                          {translate("Je voulais")}
                          {" : "}
                        </p>
                        <p className="mb-10">{translate("Voir en")}</p>
                        <p className="mb-10">{translate("Connaitre le")}</p>
                        <p className="mb-10">{translate("Savoir où")}</p>
                        <p className="mb-10">{translate("Eviter de")}</p>
                        <p className="mb-10">{translate("Ne me")}</p>
                        <p className="mb-10">{translate("J'ai essayé")}</p>
                        <div className="row mb-10">
                          <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                            <p className="mb-10">{translate("Google m'a")}</p>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <img src="/assets/imgs/theme/visage_2.jpg" alt="" />
                          </div>
                        </div>
                        <p className="mb-10">{translate("J'ai ouvert")}</p>
                        <p className="mb-10">{translate("Le deuxième")}</p>
                        <p className="mb-10">{translate("Le troisième")}</p>
                        <p className="mb-10">{translate("Au quatrième")}</p>
                        <p className="mb-10">{translate("J'ai pu")}</p>
                        <p className="mb-10">{translate("Rien d'autre")}</p>
                        <p className="mb-10">{translate("J'ai zoomé")}</p>
                        <p className="mb-10">{translate("Le nom")}</p>
                        <p className="mb-10">{translate("Un autre")}</p>
                        <p className="mb-10">{translate("Mon problème")}</p>
                        <p className="mb-10">{translate("Pour obtenir")}</p>
                        <p className="mb-10">{translate("Ayant comme")}</p>
                        <p className="mb-10">{translate("Je pourrais")}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div className="col-lg-12 mb-lg-0 mb-25">
                        <h3 className="mb-2 text-brand">
                          {translate("Analyse et")}
                        </h3>
                        <p className="mb-10">{translate("Le secteur")}</p>
                        <p className="mb-10">{translate("Conséquence de")}</p>
                        <p className="mb-10">{translate("L'acheteur a")}</p>
                        <p className="mb-10">{translate("En réalité")}</p>
                        <p className="mb-10">{translate("Si 2")}</p>
                        <p className="mb-10">
                          {translate("L'acheteur d'aujourd'hui")}
                        </p>
                        <p className="mb-10">{translate("Encore faut")}</p>
                        <p className="mb-10">{translate("L'acheteur ne")}</p>
                        <p className="mb-10">{translate("Qu'on lui")}</p>
                        <p className="mb-10">{translate("Perdre du")}</p>
                        <p className="mb-10">{translate("Avoir à")}</p>
                        <p className="mb-10">{translate("Qu'on lui 2")}</p>
                        <p className="mb-10">{translate("Voir toujours")}</p>
                        <p className="mb-10">{translate("Ce qu'il")}</p>
                        <p className="mb-10">{translate("Une réponse")}</p>
                        <p className="mb-10">{translate("Dans un")}</p>
                        <img src="/assets/imgs/theme/visage_3.jpg" alt="" />
                        <p className="mb-10">{translate("Ce qu'il 2")}</p>
                        <p className="mb-10">{translate("Un seul")}</p>
                        <p className="mb-10">{translate("Une ergonomie")}</p>
                        <p className="mb-10">
                          {translate("Une offre-produits")}
                        </p>
                        <img src="/assets/imgs/theme/visage_4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <p>{translate("Qu'il recherche")}</p>
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
        "utile_acheteur",
        "home",
      ])),
    },
  };
}
