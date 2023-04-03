// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function TestimoniauxExposants() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(5);

  // Translations
  const { t: translate } = useTranslation("testimoniaux_exposants");
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
            <h1 className="mb-10">{translate("DECOFINDER")}</h1>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Frédéric Almaviva")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Grâce à")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Marc Bonnet")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Ce que")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Nathalie Beaussart")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("D'abord hésitante")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Etienne Wacheux")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je suis")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Jean Decombredet")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Remerciements pour")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Frédéric Cornali")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("J'ai parcouru")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("D.Goros, importateur")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Les visiteurs")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Yannick Herriot")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Ce client")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Pierre Lefers")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("J'ai commencé")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("M Dubois, fabricant")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("J'ai réservé")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Melle Rinaldi")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Bravo pour")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Angèle Hermann")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je n'y")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Jean Pierre")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Un journaliste")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Christophe Richard")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je pense")}
              </p>
            </div>
          </div>
          <div
            className="row mb-40"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 text-center">
              <p className="w-80" style={{ fontWeight: "bold" }}>
                {translate("Sylvie Viguie")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.23)",
                  borderRadius: "2px",
                }}
              >
                {translate("Le premier")}
              </p>
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
        "testimoniaux_exposants",
        "home",
      ])),
    },
  };
}
