// import from components
import LeftSideBar from "../../../../components/elements/LeftSideBar";
import RightSideBar from "../../../../components/elements/RightSideBar";

// import from libraries
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import from react
import React, { useState } from "react";

export default function FaqExposant() {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // States
  const [activeIndex, setActiveIndex] = useState(14);

  // Translations
  const { t: translate } = useTranslation("faq_exposant");
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
                      &#x25cf; {translate("Quels sont")}
                    </h2>
                    <p>{translate("Format jpeg")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Certains produits")}
                    </h2>
                    <p>{translate("Ce sont")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Comment améliorer")}
                    </h2>
                    <p>{translate("Renseigner tous")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Puis-je")}
                    </h2>
                    <p>
                      {translate("Decofinder draine")}.{" "}
                      {translate("C'est aussi")}.
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Faut-il")}
                    </h2>
                    <p>{translate("La réponse")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Quel est")}
                    </h2>
                    <p>{translate("Par ordre")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Je souhaite")}
                    </h2>
                    <p>{translate("Pour les adhérents")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Je souhaite 2")}
                    </h2>
                    <p>{translate("Pour les adhérents")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Puis-je 2")}
                    </h2>
                    <p>{translate("Oui, nous")}.</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Je n'ai")}
                    </h2>
                    <p>
                      {translate("Vous avez")}. {translate("C'est un moyen")}.
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Quelle est")}
                    </h2>
                    <p>
                      {translate("Tous nos")}. {translate("Passé ce délai")}.
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Je ne vends")}
                    </h2>
                    <p>
                      {translate("Plus de")}. {translate("N'oubliez pas")}.{" "}
                      {translate("Grâce à Decofinder")}.{" "}
                      {translate("Ils apprécieront")}.
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("J'ai déjà")}
                    </h2>
                    <p>
                      {translate("Pour aller")}. {translate("Ce n'est")}.{" "}
                      {translate("Nous travaillons")}. {translate("De même")}.
                    </p>
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
        "faq_exposant",
        "home",
      ])),
    },
  };
}
