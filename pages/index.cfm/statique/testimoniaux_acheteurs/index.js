// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function TestimoniauxAcheteurs() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(6);

  // Translations
  const { t: translate } = useTranslation("testimoniaux_acheteurs");
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
                {translate("Mlle Michaud")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je tenais")}
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
                {translate("Myrène Stroup")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je tiens")}
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
                {translate("Barbara Prod’homme")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("J’ai découvert")}
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
                {translate("M Vahanian")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Superbe site")}
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
                {translate("Anonyme")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Super beau")}
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
                {translate("Anonyme")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Bravo! Que")}
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
                {translate("M Veyre")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Votre site")}
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
                {translate("M Marcaire")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Je profite")}
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
                {translate("M Colin")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Excellent site")}
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
                {translate("Mme Noiret")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Allez-vous")}
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
                {translate("Mlle Grattepain")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("j'ai reçu")}
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
                {translate("M Roy")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Votre site 2")}
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
                {translate("Responsable d'une")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Votre site 3")}
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
                {translate("Mlle Veronique")}
              </p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-9 text-center">
              <p
                className="w-80"
                style={{
                  background: "rgba(200,200,200,0.2)",
                  borderRadius: "2px",
                }}
              >
                {translate("Touchez à")}
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
        "testimoniaux_acheteurs",
        "home",
      ])),
    },
  };
}
