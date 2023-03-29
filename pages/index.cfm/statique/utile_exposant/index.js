// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function APropos() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(2);

  // Translations
  const { t: translate } = useTranslation("utile_exposant");
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
                  <h1 className="mb-10">{translate("DECOFINDER UTILE")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Le bon")}
                    </h2>
                    <div className="row">
                      <div
                        className="col-lg-4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/assets/imgs/theme/graphique_profit.gif"
                          alt=""
                        />
                      </div>
                      <div
                        className="col-lg-8"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <p>{translate("Lorsqu'elle est")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Quelques 'rappels'")}
                    </h2>
                    <ul>
                      <li>
                        {" . "}
                        {translate("Dans le")}
                      </li>
                      <li>
                        {" . "}
                        {translate("Elles seules")}
                      </li>
                      <li>
                        {" . "}
                        {translate("Malgré leur")}
                      </li>
                      <li>
                        {" . "}
                        {translate("Pour les")}
                      </li>
                      <li>
                        {" . "}
                        {translate("S'il ne")}
                      </li>
                      <li>
                        {" . "}
                        {translate("Même s'il")}
                      </li>
                      <li>
                        {" . "}
                        {translate("Même vos")}
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Les cibles")}
                    </h2>
                    <ul className="mb-10">
                      <li>{translate("1 -Celle qui")}</li>
                      <li>{translate("2 -Celle qui 2")}</li>
                      <li>{translate("3 -Celle qui 3")}</li>
                    </ul>
                    <h3 className="mb-10">{translate("Vos clients")}</h3>
                    <p className="mb-10">{translate("Il importe")}</p>
                    <h3 className="mb-10">{translate("Acheteurs en")}</h3>
                    <p>{translate("Cette cible")}</p>
                    <p>{translate("C'est un")}</p>
                    <p className="mb-10">{translate("Elle est")}</p>
                    <h3 className="mb-10">{translate("Vos clients 2")}</h3>
                    <p>{translate("Les moyens")}</p>
                    <p>{translate("Pour les 2")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Le bon 2")}
                    </h2>
                    <p>{translate("Conçu pour")}</p>
                    <p>{translate("DF facteur")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h3 className="mb-10">{translate("vous touchez")}</h3>
                    <p className="mb-10">{translate("Grâce au")}</p>
                    <h3 className="mb-10">{translate("des acheteurs")}</h3>
                    <p className="mb-10">{translate("Les utilisateurs")}</p>
                    <h3 className="mb-10">{translate("vous fidélisez")}</h3>
                    <p className="mb-10">{translate("Si, comme")}</p>
                    <h3 className="mb-10">{translate("votre site")}</h3>
                    <p className="mb-10">{translate("Chaque produit")}</p>
                    <h3 className="mb-10">{translate("vous gagnez")}</h3>
                    <p className="mb-10">{translate("Votre nom")}</p>
                    <h3 className="mb-10">{translate("présence dans")}</h3>
                    <p className="mb-10">{translate("Vous êtes")}</p>
                    <h3 className="mb-10">{translate("vous avez")}</h3>
                    <p className="mb-10">{translate("Vos coordonnées")}</p>
                    <h3 className="mb-10">{translate("votre espace")}</h3>
                    <p>{translate("Votre nom 2")}</p>
                    <p>{translate("Pour chaque")} :</p>
                    <p>{translate("- Un zoom")}</p>
                    <p>{translate("- Un lien")}</p>
                    <p className="mb-10">{translate("Vous mettez")}</p>
                    <h3 className="mb-10">{translate("vous avez 2")}</h3>
                    <p className="mb-10">{translate("Affichages, zoom")}</p>
                    <h3 className="mb-10">{translate("des emplacements")}</h3>
                    <p className="mb-10">{translate("Pour vos")}</p>
                    <h3 className="mb-10">{translate("un investissement")}</h3>
                    <p>{translate("Des formules")}</p>
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
        "utile_exposant",
        "home",
      ])),
    },
  };
}
