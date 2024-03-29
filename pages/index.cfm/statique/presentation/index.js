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
  const [activeIndex, setActiveIndex] = useState(1);

  // Translations
  const { t: translate } = useTranslation("presentation");
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
                  <h1 className="mb-10">
                    {translate("À PROPOS DE DECOFINDER")}
                  </h1>
                  <p>
                    {translate(
                      "Decofinder est depuis 1994 le salon en ligne de la décoration, de l'ameublement et du design. Decofinder a été créé pour permettre aux acheteurs -particuliers et professionnels- de trouver rapidement les produits, les entreprises et les documents qu'ils recherchent. Fantastique outil de découverte pour les acheteurs, il assure aussi aux entreprises une meilleure diffusion de leurs produits aux plans national et international, une plus grande profitabilité grâce à un accès à une clientèle additionnelle en phase d'acquisition ainsi qu'à de nouveaux marchés, un allongement des séries, une commercialisation plus rapide, plus directe et plus économique."
                    )}
                  </p>
                </div>
                <div className="card-body">
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Le marché")}
                    </h2>
                    <p>
                      {translate(
                        "Le marché de la décoration est composé de très nombreuses entreprises, souvent petites et qui communiquent peu. Notre constat est que dans 95% des cas, l'acheteur ignore le nom des fabricants des produits qu'il recherche. Cette réalité rend très difficile l'accès à leurs collections. C'est un fait deux points les entreprises du secteur manquent cruellement de notoriété, celle qui fait vendre tôt ou tard."
                      )}
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Utile pour l'internaute")}
                    </h2>
                    <p>{translate("Utile pour l'internaute texte")}</p>
                    <p>
                      {translate(
                        "Selon le sondage Opinionway, 67% des visiteurs de Decofinder sont en phase d'acquisition. Mais avant d'acheter, l'internaute doit faire le « tour du marché » pour se décider."
                      )}
                    </p>
                    <p>
                      {translate(
                        "Decofinder est utile car il présente sur un même site et en 5 langues tous les produits du secteur. Ces produits sont accessibles par mots-clés, par univers ou, lorsqu'on la connait, par marque. Ils sont triables par style, couleur, motif, designer et bien sûr par prix. l'internaute découvre ainsi des produits et des entreprises qu'il ne connaissait pas 5 min auparavant."
                      )}
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Utile pour l'entreprise")}
                    </h2>
                    <p>
                      {translate(
                        "Parce qu'il est le pont entre l'offre et la demande, Decofinder est un véritable outil marketing pour les professionnels de la décoration. Exposer ses produits là où les clients les cherchent génère de nombreuses propositions d'affaire."
                      )}
                    </p>
                    <p>
                      {translate(
                        "Decofinder fait connaitre vos produits et votre entreprise à des millions d'internautes (3 millions en 2012) du monde entier (45% sont à l'export). Ces visiteurs sont des pros pour 28%. Les particuliers (72%) sont fortement CSP+, ciblés déco, et surtout en phase active d'acquisition. C'est l'assurance d'une plus grande notoriété et d'un chiffre d'affaire additionnel."
                      )}
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Un site valorisant")}
                    </h2>
                    <p>{translate("Un site valorisant texte")}</p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Un support riche et actualisé")}
                    </h2>
                    <p>
                      {translate(
                        "Decofinder référence tous les produits et toutes les entreprises de la décoration. Decofinder édite chaque semaine un dossier thématique. Decofinder est actualisé en temps réel grâce au Decopro où les exposants mettent à jour eux-mêmes leurs collections."
                      )}
                    </p>
                  </div>
                  <div className="col-lg-12 mb-lg-0 mb-25">
                    <h2 className="mb-2 text-brand">
                      &#x25cf; {translate("Audience & Visitorat")}
                    </h2>
                    <p className="mb-10">
                      {translate(
                        "Incontournable depuis 1994, et diffusé en 5 langues (allemand, anglais, espagnol, français et italien) Decofinder réunit 3 millions de visiteurs annuels"
                      )}
                    </p>
                    <div className="single-content">
                      <ul>
                        <li>
                          {translate(
                            "28 % de professionnels, soit près d'1 000 000/an"
                          )}
                        </li>
                        <li>
                          {translate(
                            "45% de visiteurs à l'international, soit 1 350 000/an"
                          )}
                        </li>
                        <li>
                          {translate(
                            "8% des visiteurs achètent immédiatement après avoir consulté Decofinder soit 240 000 transactions/an (Opinion Way)"
                          )}
                        </li>
                        <li>{translate("10 millions de pages vues")}</li>
                        <li>{translate("700 000 contacts d'exposants")}</li>
                      </ul>
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
      ...(await serverSideTranslations(context["locale"], [
        "presentation",
        "home",
      ])),
    },
  };
}
