// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function Audience() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(8);

  // Translations
  const { t: translate } = useTranslation("audience");
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
          <div className="mb-50">
            <h1>{translate("DECOFINDER, CHIFFRES")}</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    30%
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {translate("de professionnels")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    10
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    millions {translate("de pages")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    45%
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {translate("de visiteurs")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    8.2
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    milles {translate("visites / jour")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    8%
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {translate("des visiteurs")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    3
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    millions {translate("visites / an")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    6
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    millions {translate("de recherches")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    4
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    minutes {translate("durée moyenne")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    3
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    millions {translate("de redirections")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mb-20">
              <div className="w-90 card-header text-center">
                <div className="row">
                  <p
                    className="col-lg-2 col-md-2 col-sm-2 col-2"
                    style={{
                      borderRadius: "100%",
                      border: "2px solid #73AD21",
                      padding: "20px",
                      fontSize: "20px",
                    }}
                  >
                    6
                  </p>
                  <p
                    className="col-lg-10 col-md-10 col-sm-10 col-10 text-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    pages {translate("vues / visite")}
                  </p>
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
        "audience",
        "home",
      ])),
    },
  };
}
