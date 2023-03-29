// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function RevueDePresse() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(4);

  // Translations
  const { t: translate } = useTranslation("revuedepresse");
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
          <div className="card-header mb-50">
            <h1 className="mb-10">
              {translate("LE WEB ET LA PRESSE EN PARLENT")}
            </h1>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-marieclaire.maison.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">
                {translate(
                  "On peut maintenant trouver la table ou la vaisselle de ses rêves sur internet grâce au DecoFinder.'"
                )}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-intramuros.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-biba.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Vous cherchez")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-plaisirMaison.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder 2")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_votremaison.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder 3")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-elle2.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("LE PLUS")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/Logo_se-loger.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Site complet")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/Logo_linternaute.png`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Si vous")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-femmeenville.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Les grandes")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-femmeActuelle.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("C'est LE")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-Le-figaro-Magazine.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Faites votre")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-figaro.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("L'ordinateur vous")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-mobilis.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder 4")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_PC_Multimedia.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Si vous 2")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-offrirInternational.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Le hasard")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_net.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder est")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_artetdecoration.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Plus de")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-bestonweb.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("DecoFinder.com est")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_familoo.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Le moteur")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-msn.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("L'annuaire de")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_bonweb.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Plusieurs milliers")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-Tiscali.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Service en")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-Club-Internet.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Une base")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-voila.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Le service")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-BranchezVous.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Un autre")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo-excite.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Portail de")}</p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid black",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <img
                className="default-img w-80"
                src={`/assets/imgs/revuedepresse/logo_francite.jpg`}
                alt=""
              />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p className="w-80">{translate("Showroom de")}</p>
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
        "revuedepresse",
        "home",
      ])),
    },
  };
}
