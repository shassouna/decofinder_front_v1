// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function Recrutement() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(9);

  // Translations
  const { t: translate } = useTranslation("recrutement");
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  return (
    <div className="container page-content pt-40 pb-40">
      <div className="row">
        <div
          className="col-lg-2 col-md-2 col-sm-12 col-12"
          style={{ position: "sticky", top: "0" }}
        >
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
                  <h1 className="mb-10">{translate("DECOFINDER RECRUTE")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Distrimart")}
                    </h2>
                    <p>{translate("Fondé en")}</p>
                    <ul className="mb-10">
                      <li>- {translate("Decofinder.com")}.</li>
                      <li>- {translate("Agendadecodesign.com")}.</li>
                      <li>- {translate("DecoProfiles.com")}.</li>
                      <li>- {translate("Finexport.eu")}.</li>
                      <li>- {translate("Decoprivate.com")}.</li>
                    </ul>
                    <p>{translate("Vous êtes")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Candidatures spontanées")}
                    </h2>
                    <p>
                      {translate("Distrimart offre")}{" "}
                      <span style={{ fontSize: "20px" }}>
                        recrutement@distrimart.fr
                      </span>
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Nos offres")}
                    </h2>
                    <ul>
                      <li className="mb-40">
                        <h3 className="mb-10">
                          {translate("Commercial conseil")} :
                        </h3>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Type de 2").split(":")[0]}:
                          </h4>
                          <span>{translate("Type de 2").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Temps de").split(":")[0]}:
                          </h4>
                          <span>{translate("Temps de").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Profil principal").split(":")[0]}:
                          </h4>
                          <span>
                            {translate("Profil principal").split(":")[1]}.
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PRÉSENTATION SOCIÉTÉ")}
                        </h4>
                        <p className="mb-15">{translate("Fondé en 1")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("DESCRIPTION DE")}
                        </h4>
                        <p>{translate("Finexport estationur")}</p>
                        <p className="mb-15">{translate("Vous serez")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PROFIL")}
                        </h4>
                        <p>{translate("Issu(e) d'une")}</p>
                        <p className="mb-15">{translate("Autonome, doté")}</p>
                        <ul className="mb-15">
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Localisation du").split(":")[0]}:
                            </h4>
                            <p>{translate("Localisation du").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'études").split(":")[0]}:
                            </h4>
                            <p>{translate("Niveau d'études").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Diplôme").split(":")[0]}:
                            </h4>
                            <p>{translate("Diplôme").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'expérience").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'expérience").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Rémunération").split(":")[0]}:
                            </h4>
                            <p>{translate("Rémunération").split(":")[1]}.</p>
                          </li>
                        </ul>
                        <p style={{ fontWeight: "bold" }}>
                          {translate("Merci d'envoyer")}.
                        </p>
                      </li>
                      <li className="mb-40">
                        <h3 className="mb-10">
                          {translate("Commercial bilingue 2")} :
                        </h3>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Type de 2").split(":")[0]}:
                          </h4>
                          <span>{translate("Type de 2").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Temps de").split(":")[0]}:
                          </h4>
                          <span>{translate("Temps de").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Profil principal 2").split(":")[0]}:
                          </h4>
                          <span>
                            {translate("Profil principal 2").split(":")[1]}.
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PRÉSENTATION SOCIÉTÉ")}
                        </h4>
                        <p className="mb-15">{translate("Fondé en 1")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("DESCRIPTION DE")}
                        </h4>
                        <p>{translate("Decofinder est")}</p>
                        <p className="mb-15">{translate("Vous serez 2")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PROFIL")}
                        </h4>
                        <p>{translate("Issu(e) d'une 2")}</p>
                        <p>{translate("Autonome, doté(e)")}</p>
                        <p className="mb-15">{translate("Vous êtes 2")}</p>
                        <ul className="mb-15">
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Localisation du").split(":")[0]}:
                            </h4>
                            <p>{translate("Localisation du").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'études 2").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'études 2").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Diplôme 2").split(":")[0]}:
                            </h4>
                            <p>{translate("Diplôme 2").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'expérience").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'expérience").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Rémunération").split(":")[0]}:
                            </h4>
                            <p>{translate("Rémunération").split(":")[1]}.</p>
                          </li>
                        </ul>
                        <p style={{ fontWeight: "bold" }}>
                          {translate("Merci d'envoyer 2")}.
                        </p>
                      </li>
                      <li className="mb-40">
                        <h3 className="mb-10">
                          {translate("Commercial bilingue 2")} :
                        </h3>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Type de 2").split(":")[0]}:
                          </h4>
                          <span>{translate("Type de 2").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Temps de").split(":")[0]}:
                          </h4>
                          <span>{translate("Temps de").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Profil principal 3").split(":")[0]}:
                          </h4>
                          <span>
                            {translate("Profil principal 3").split(":")[1]}.
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PRÉSENTATION SOCIÉTÉ")}
                        </h4>
                        <p className="mb-15">{translate("Fondé en 1")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("DESCRIPTION DE")}
                        </h4>
                        <p>{translate("Decofinder est")}</p>
                        <p className="mb-15">{translate("Vous serez 3")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PROFIL")}
                        </h4>
                        <p>{translate("Issu(e) d'une 2")}</p>
                        <p>{translate("Autonome, doté(e)")}</p>
                        <p className="mb-15">{translate("Vous êtes 3")}</p>
                        <ul className="mb-15">
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Localisation du").split(":")[0]}:
                            </h4>
                            <p>{translate("Localisation du").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'études 2").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'études 2").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Diplôme 2").split(":")[0]}:
                            </h4>
                            <p>{translate("Diplôme 2").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'expérience").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'expérience").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Rémunération").split(":")[0]}:
                            </h4>
                            <p>{translate("Rémunération").split(":")[1]}.</p>
                          </li>
                        </ul>
                        <p style={{ fontWeight: "bold" }}>
                          {translate("Merci d'envoyer 3")}.
                        </p>
                      </li>
                      <li className="mb-40">
                        <h3 className="mb-10">{translate("Stage chef")} :</h3>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Type de").split(":")[0]}:
                          </h4>
                          <span>{translate("Type de").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Temps de").split(":")[0]}:
                          </h4>
                          <span>{translate("Temps de").split(":")[1]}.</span>
                        </div>
                        <div className="mb-15">
                          <h4
                            style={{
                              fontSize: "15px",
                              color: "rgba(50,50,50,1)",
                            }}
                          >
                            {translate("Profil principal 3").split(":")[0]}:
                          </h4>
                          <span>
                            {translate("Profil principal 3").split(":")[1]}.
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PRÉSENTATION SOCIÉTÉ")}
                        </h4>
                        <p className="mb-15">{translate("Fondé en 1")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("DESCRIPTION DE")}
                        </h4>
                        <p>{translate("Votre mission")}</p>
                        <p>{translate("Vous élaborez")}</p>
                        <p>{translate("Vous assurez")}</p>
                        <p>{translate("Vous coordonnez")}</p>
                        <p>{translate("Vous établissez")}</p>
                        <p className="mb-15">{translate("Vous participez")}</p>
                        <h4
                          style={{
                            fontSize: "15px",
                            color: "rgba(50,50,50,1)",
                          }}
                        >
                          {translate("PROFIL")}
                        </h4>
                        <p>{translate("Issu(e) d'une 2")}</p>
                        <p>{translate("Autonome, doté(e)")}</p>
                        <p className="mb-15">{translate("Vous êtes 3")}</p>
                        <ul className="mb-15">
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Localisation du").split(":")[0]}:
                            </h4>
                            <p>{translate("Localisation du").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'études 2").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'études 2").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Diplôme 2").split(":")[0]}:
                            </h4>
                            <p>{translate("Diplôme 2").split(":")[1]}.</p>
                          </li>
                          <li
                            className="mb-15"
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Niveau d'expérience").split(":")[0]}:
                            </h4>
                            <p>
                              {translate("Niveau d'expérience").split(":")[1]}.
                            </p>
                          </li>
                          <li
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "15px",
                                color: "rgba(50,50,50,1)",
                              }}
                            >
                              {translate("Rémunération").split(":")[0]}:
                            </h4>
                            <p>{translate("Rémunération").split(":")[1]}.</p>
                          </li>
                        </ul>
                        <p style={{ fontWeight: "bold" }}>
                          {translate("Merci d'envoyer 3")}.
                        </p>
                      </li>
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
        "recrutement",
        "home",
      ])),
    },
  };
}
