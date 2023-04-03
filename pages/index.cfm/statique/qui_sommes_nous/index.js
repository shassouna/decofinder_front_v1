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
  const { t: translate } = useTranslation("home");
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
                  <h1 className="mb-10">{translate("L'ÉQUIPE")}</h1>
                </div>
                <div className="card-body">
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>
                        Directeur général
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/Yves MANCHEC.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Yves MANCHEC
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-de.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>
                        Directeur adjoint
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/Erwan MANCHEC.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Erwan MANCHEC
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>
                        Rédactrice en chef
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/Catherine JARNO.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Erwan MANCHEC
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>
                        Chargés de clientèle
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/Rita DE GAETANO.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Rita DE GAETANO
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>
                        Support Technique
                      </span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/erwan MANCHEC.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            SALIM HASSOUNA
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>Développeur</span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/erwan Manchec.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Anis Bennamene
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>Développeur</span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <img src="/assets/imgs/equipe/erwan Manchec.jpg" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          <span style={{ marginLeft: "25px" }}>
                            Samira Seddar
                          </span>
                          <div>
                            <img
                              src="/assets/imgs/theme/flag-fr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                            <img
                              src="/assets/imgs/theme/flag-gbr.png"
                              alt=""
                              style={{ width: "25px", marginRight: "5px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-50">
                    <div
                      className="col-lg-6 col-md-6 col-sm-6 col-6"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "25px" }}>Coordonnées</span>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span className="mb-10">
                          17 rue Chartran 92200 Neuilly sur Seine FRANCE
                        </span>
                        <span className="mb-10">
                          Mail : info@decofinder.com T : 0141279260
                        </span>
                        <span>
                          TVA intra-communautaire : 90399699099 Distrimart SAS
                          au capital de 250 000 Euros RCS Nanterre B 399 699 099
                          (95B0111738)
                        </span>
                      </div>
                    </div>
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
      ...(await serverSideTranslations(context["locale"], ["home"])),
    },
  };
}
