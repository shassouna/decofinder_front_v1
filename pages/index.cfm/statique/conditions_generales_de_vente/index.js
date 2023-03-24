// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function ConditionsGeneralesDeVente() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(1);

  // Translations
  const { t: translate } = useTranslation("conditions_generales_de_vente");
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
                  <h1 className="mb-10">{translate("CONDITIONS GENERALES")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 1")}
                    </h2>
                    <p>1.1 - {translate("La Société")}</p>
                    <p>1.2 - {translate("La signature")}</p>
                    <p>1.3 - {translate("Les présentes")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 2")}
                    </h2>
                    <p>2.1 - {translate("Les emplacements")}</p>
                    <p>2.2 - {translate("Les tarifs")}</p>
                    <p>2.3 - {translate("Les conditions")}</p>
                    <p>2.4 - {translate("DISTRIMART SAS")}</p>
                    <p>2.5 - {translate("Les présentes")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 3")}
                    </h2>
                    <p>3.1 - {translate("Tout achat")}</p>
                    <p>- {translate("de la réception")}</p>
                    <p>- {translate("de la confirmation")}</p>
                    <p>3.2 - {translate("Le contrat")}</p>
                    <p>3.3 - {translate("Certains services")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 4")}
                    </h2>
                    <p>4.1 - {translate("Les messages")}</p>
                    <p>4.2 - {translate("L'insertion doit")}</p>
                    <p>4.3 - {translate("Le non respect")}</p>
                    <p>4.4 - {translate("La non-fourniture")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 5")}
                    </h2>
                    <p>5.1 - {translate("L'annonceur reconnaît")}</p>
                    <p>5.2 - {translate("L'annonceur certifie")}</p>
                    <p>5.3 - {translate("L'annonceur s'engage")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 6")}
                    </h2>
                    <p>6.1 - {translate("DISTRIMART SA")}</p>
                    <p>6.2 - {translate("En aucun cas")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 7")}
                    </h2>
                    <p>7.1 - {translate("Tout retard")}</p>
                    <p>7.2 - {translate("Tout retard 2")}</p>
                    <p>7.3 - {translate("Sauf stipulation")}</p>
                    <p>7.4 - {translate("De même")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 8")}
                    </h2>
                    <p>8.1 - {translate("DISTRIMART SA 2")}</p>
                    <p>8.2 - {translate("Au cours")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 9")}
                    </h2>
                    <p>9.1 - {translate("L'annonceur ne pourra")}</p>
                    <p>9.2 - {translate("Le fait")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 10")}
                    </h2>
                    <p>10.1 - {translate("La facturation")}</p>
                    <p>10.2 - {translate("Une remise")}</p>
                    <p>10.3 - {translate("A défaut")}</p>
                    <p>10.4 - {translate("A défaut 2")}</p>
                    <p>10.5 - {translate("Un intérêt")}</p>
                    <p>10.6 - {translate("L'envoi d'une lettre")}</p>
                    <p>{translate("Cas particulier")}</p>
                    <p>{translate("La durée")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Article 11")}
                    </h2>
                    <p>{translate("Tout litige")}</p>
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
        "conditions_generales_de_vente",
        "home",
      ])),
    },
  };
}
