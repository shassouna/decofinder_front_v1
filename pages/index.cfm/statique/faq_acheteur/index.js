// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function FaqAcheteur() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(13);

  // Translations
  const { t: translate } = useTranslation("faq_acheteur");
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
                  <h1 className="mb-10">{translate("LES QUESTIONS")}</h1>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Comment faire")}
                    </h2>
                    <p>{translate("Cliquez sur")}.</p>
                    <p>{translate("Si le produit")}.</p>
                    <p>{translate("Vous pouvez")}.</p>
                    <p>{translate("Vous souhaitez")}.</p>
                    <p>{translate("Cliquez sur 2")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Puis-je")}
                    </h2>
                    <p>
                      {translate("Oui, réalisez")}.{" "}
                      {translate("Chaque fabricant")}.
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Comment faire 2")}
                    </h2>
                    <p>{translate("Demandez-lui")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Les prix")}
                    </h2>
                    <p>{translate("Nous les incitons")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Le fabricant")}
                    </h2>
                    <p>{translate("Le rôle")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("J'ai rempli")}
                    </h2>
                    <p>{translate("Oui mais")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Je n'ai")}
                    </h2>
                    <p>{translate("Oui, précise")}.</p>
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
        "faq_acheteur",
        "home",
      ])),
    },
  };
}
