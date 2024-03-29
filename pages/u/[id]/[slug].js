// Import from components
import GlobalFunctions from "../../../components/elements/GlobalFunctions";
import Sidebar from "../../../components/elements/sideBar";
import ExpertsTag from "../../../components/elements/Experts";
import CategoryTag from "../../../components/elements/Category";
import PremiumsTag from "../../../components/elements/Premiums";
import SingleProduct from "../../../components/elements/SingleProduct";
// Import from libraries
import axios from "axios";
// Import from react
import { useState, useEffect } from "react";
// Import from Next
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Constantes
const limit = 10;
const marquesFilter = "marques";
const pricesFilter = "prices";
const designersFilter = "designers";
const stylesFilter = "styles";
const couleursFilter = "couleurs";
const materiauxFilter = "materiaux";
const motifsFilter = "motifs";

function Univers(props) {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // Routers
  const router = useRouter();

  // Translations
  const { t: translate } = useTranslation("univers");

  // States
  const [currentPage, setCurrentPage] = useState(1);

  const [Univers, setUnivers] = useState(props["Univers"]);
  const [Categories, setCategories] = useState(props["Categories"]);
  const [Superunivers, setSuperuinvers] = useState(props["Superunivers"]);
  const [Products, setProducts] = useState(props["Products"]);
  const [Premiums, setPremiums] = useState(props["Premiums"]);
  const [Experts, setExperts] = useState(props["Experts"]);
  const [Universs_Superunivers_Univers, setUniverss_Superunivers_Univers] =
    useState(props["Universs_Superunivers_Univers"]);

  const [Marques, setMarques] = useState(props["marques"]);
  const [Prices, setPrices] = useState(props["prices"]);
  const [Designers, setDesigners] = useState(props["designers"]);
  const [Styles, setStyles] = useState(props["styles"]);
  const [Couleurs, setCouleurs] = useState(props["couleurs"]);
  const [Motifs, setMotifs] = useState(props["motifs"]);
  const [Materiaux, setMateriaux] = useState(props["materiaux"]);

  const [executeOthersUseEffect, setExecuteOthersUseEffect] = useState(true);

  useEffect(() => {
    if (executeOthersUseEffect) {
      // Get filters ids
      let filterPrices = Prices.find((price) => price["checked"])
        ? Prices.find((price) => price["checked"])["item"]
        : [];
      let filterMarques = Marques.filter((marque) => marque["checked"]).map(
        (marque) => marque["item"]["id"]
      );
      let filterDesigners = Designers.filter(
        (designer) => designer["checked"]
      ).map((designer) => designer["item"]["id"]);
      let filterStyles = Styles.filter((style) => style["checked"]).map(
        (style) => style["item"]["id"]
      );
      let filterCouleurs = Couleurs.filter((couleur) => couleur["checked"]).map(
        (couleur) => couleur["item"]["id"]
      );
      let filterMotifs = Motifs.filter((motif) => motif["checked"]).map(
        (motif) => motif["item"]["id"]
      );
      let filterMateriaux = Materiaux.filter(
        (materiau) => materiau["checked"]
      ).map((materiau) => materiau["item"]["id"]);

      // Initialize products to filter
      let productsFiltered = [...props["Products"]];

      // Filter products
      if (filterPrices.length > 0) {
        productsFiltered = productsFiltered.filter(
          (product) =>
            parseFloat(product["attributes"]["TARIF_PUB"]) >= filterPrices[0] &&
            parseFloat(product["attributes"]["TARIF_PUB"]) <= filterPrices[1]
        );
      }

      if (filterMarques.length > 0) {
        productsFiltered = productsFiltered.filter((product) =>
          filterMarques.includes(product["id"])
        );
      }

      if (filterDesigners.length > 0) {
        productsFiltered = productsFiltered.filter((product) =>
          filterDesigners.includes(product["id"])
        );
      }

      if (filterStyles.length > 0) {
        productsFiltered = productsFiltered.filter((product) => {
          if (
            product["attributes"]["style"] &&
            product["attributes"]["style"]["data"]
          ) {
            return filterStyles.includes(
              product["attributes"]["style"]["data"]["id"]
            );
          }
        });
      }

      if (filterCouleurs.length > 0) {
        productsFiltered = productsFiltered.filter((product) => {
          if (
            product["attributes"]["couleur"] &&
            product["attributes"]["couleur"]["data"]
          ) {
            return filterCouleurs.includes(
              product["attributes"]["couleur"]["data"]["id"]
            );
          }
        });
      }

      if (filterMotifs.length > 0) {
        productsFiltered = productsFiltered.filter((product) => {
          if (
            product["attributes"]["motif"] &&
            product["attributes"]["motif"]["data"]
          ) {
            return filterMotifs.includes(
              product["attributes"]["motif"]["data"]["id"]
            );
          }
        });
      }

      if (filterMateriaux.length > 0) {
        productsFiltered = productsFiltered.filter((product) => {
          if (
            product["attributes"]["materiau"] &&
            product["attributes"]["materiau"]["data"]
          ) {
            return filterMateriaux.includes(
              product["attributes"]["materiau"]["data"]["id"]
            );
          }
        });
      }

      // Update products state
      setProducts([...productsFiltered]);

      // Router management
      if (productsFiltered.length != props["Products"]) {
        const obj = { ...router.query };

        obj["prix"] = filterPrices;
        obj["couleur"] = filterCouleurs;
        obj["motif"] = filterMotifs;
        obj["style"] = filterStyles;
        obj["materiau"] = filterMateriaux;
        obj["designer"] = filterDesigners;
        obj["marque"] = filterMarques;

        delete obj["id"];
        delete obj["slug"];

        router.push(
          {
            pathname: `/u${router.query["id"]}/${router.query["slug"]}`,
            query: { ...obj },
          },
          undefined,
          { shallow: true }
        );
      }
    }
  }, [Couleurs, Motifs, Styles, Designers, Marques, Materiaux, Prices]);
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  /*---------------------------------------------------Functions begin---------------------------------------------------*/
  // Update user filters
  const handleFilter = (id, filterKey) => {
    if (filterKey == couleursFilter) {
      const itemsLocal = [...Couleurs];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setCouleurs([...itemsLocal]);
    } else if (filterKey == motifsFilter) {
      const itemsLocal = [...Motifs];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setMotifs([...itemsLocal]);
    } else if (filterKey == stylesFilter) {
      const itemsLocal = [...Styles];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setStyles([...itemsLocal]);
    } else if (filterKey == designersFilter) {
      const itemsLocal = [...Designers];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setDesigners([...itemsLocal]);
    } else if (filterKey == marquesFilter) {
      const itemsLocal = [...Marques];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setMarques([...itemsLocal]);
    } else if (filterKey == materiauxFilter) {
      const itemsLocal = [...Materiaux];
      itemsLocal.find((item) => item["item"]["id"] == id)["checked"] =
        !itemsLocal.find((item) => item["item"]["id"] == id)["checked"];
      setMateriaux([...itemsLocal]);
    } else if (filterKey == pricesFilter) {
      const itemsLocal = [...Prices];
      itemsLocal
        .filter((item) => item["id"] != id)
        .forEach((item) => (item["checked"] = false));
      itemsLocal.find((item) => item["id"] == id)["checked"] = !itemsLocal.find(
        (item) => item["id"] == id
      )["checked"];
      setPrices([...itemsLocal]);
    }
  };
  /*---------------------------------------------------Functions end---------------------------------------------------*/

  return (
    <div className="container custom mt-50">
      <div className="mb-50">
        {/* Univers decription begin */}
        {!Marques.find((marque) => marque["checked"]) &&
          !Prices.find((price) => price["checked"]) &&
          !Designers.find((designer) => designer["checked"]) &&
          !Styles.find((style) => style["checked"]) &&
          !Couleurs.find((couleur) => couleur["checked"]) &&
          !Motifs.find((motif) => motif["checked"]) &&
          !Materiaux.find((materiau) => materiau["checked"]) && (
            <div
              className="newsletter mb-15  wow animate__animated animate__fadeIn univers-header_parallax"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9)),
                  url(${Univers["attributes"]["image"]["data"]["attributes"]["url"]})`,
              }}
            >
              <div className="position-relative newsletter-inner">
                <div
                  className="newsletter-content"
                  style={{ textAlign: "center" }}
                >
                  <h2 className="mb-20">
                    Univers : {Univers["attributes"]["LIB"]}
                  </h2>
                  <p
                    className="mb-20"
                    style={{ color: "white" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        Univers["attributes"]["DOSSIER_TEXTE"].substring(
                          0,
                          Univers["attributes"]["DOSSIER_TEXTE"].length / 3
                        ) + " ...",
                    }}
                  />
                  {Univers["attributes"]["DOSSIER_TEXTE"] && (
                    <a
                      href="#univers-description-detail"
                      aria-label="Lire la suite"
                      className="btn"
                    >
                      {translate("Lire la suite")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        {/* Univers decription end */}
      </div>
      <div className="row">
        {/* SideBar filters begin */}
        <div className="col-lg-3 primary-sidebar sticky-sidebar">
          <Sidebar
            Univers={Univers}
            Categories={Categories}
            Superunivers={Superunivers}
            Universs_Superunivers_Univers={Universs_Superunivers_Univers}
            Marques={Marques}
            Prices={Prices}
            Designers={Designers}
            Styles={Styles}
            Couleurs={Couleurs}
            Motifs={Motifs}
            Materiaux={Materiaux}
            marquesFilter={marquesFilter}
            pricesFilter={pricesFilter}
            designersFilter={designersFilter}
            stylesFilter={stylesFilter}
            couleursFilter={couleursFilter}
            materiauxFilter={materiauxFilter}
            motifsFilter={motifsFilter}
            translate={translate}
            handleFilter={handleFilter}
          />
        </div>
        {/* SideBar filters end */}
        <div className="col-lg-9">
          {!Marques.find((marque) => marque["checked"]) &&
            !Prices.find((price) => price["checked"]) &&
            !Designers.find((designer) => designer["checked"]) &&
            !Styles.find((style) => style["checked"]) &&
            !Couleurs.find((couleur) => couleur["checked"]) &&
            !Motifs.find((motif) => motif["checked"]) &&
            !Materiaux.find((materiau) => materiau["checked"]) && (
              <>
                {/* list of experts begin */}
                {Experts.length > 0 && (
                  <div>
                    <h2 className="mb-30" style={{ textAlign: "center" }}>
                      {translate("Découvrez la sélection de")} :
                    </h2>
                    <ExpertsTag experts={Experts} />
                  </div>
                )}
                {/* list of experts end */}

                {/* list of categories begin */}
                <div className="mb-50">
                  <h2 className="mb-30">{translate("Dans cet univers")} :</h2>
                  <div className="loop-grid">
                    <div className="row">
                      {Categories.map((category) => (
                        <CategoryTag
                          key={category["id"]}
                          category={category}
                          translate={translate}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* list of categories end */}

                {/* list of selections begin */}
                <div className="mb-100">
                  <h2 className="mb-30" style={{ textAlign: "center" }}>
                    {translate("Découvrez nos sélections")} :
                  </h2>
                  <div className="home-slide-cover">
                    <PremiumsTag premiums={Premiums} />
                  </div>
                </div>
                {/* list of selections end */}

                {/* Univers detail begin */}
                <div id="univers-description-detail" className="row mb-50">
                  <div className="col-lg-6">
                    <div className="pl-25">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            Univers["attributes"]["DOSSIER_TEXTE"].substring(
                              0,
                              Univers["attributes"]["DOSSIER_TEXTE"].length / 2
                            ) + " ...",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="pl-25">
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            Univers["attributes"]["DOSSIER_TEXTE"].substring(
                              Univers["attributes"]["DOSSIER_TEXTE"].length / 2,
                              Univers["attributes"]["DOSSIER_TEXTE"].length
                            ) + " ...",
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* Univers detail end */}
              </>
            )}

          {/* list of products begin */}
          {(Marques.find((marque) => marque["checked"]) ||
            Prices.find((price) => price["checked"]) ||
            Designers.find((designer) => designer["checked"]) ||
            Styles.find((style) => style["checked"]) ||
            Couleurs.find((couleur) => couleur["checked"]) ||
            Motifs.find((motif) => motif["checked"]) ||
            Materiaux.find((materiau) => materiau["checked"])) && (
            <div className="row product-grid-3">
              {Products.length === 0 && <h3>{translate("Pas de produits")}</h3>}
              <h2 className="mb-30">
                {translate("Découvrez tous les produits de l'univers") +
                  " " +
                  Univers["attributes"]["LIB"]}{" "}
                :{" "}
              </h2>
              {Products.slice(
                (currentPage - 1) * limit,
                currentPage * limit
              ).map((product) => (
                <div
                  key={product["id"]}
                  className="col-lg-1-5 col-md-4 col-sm-6 col-12 "
                >
                  <SingleProduct product={product} translate={translate} />
                </div>
              ))}
            </div>
          )}
          {/* list of products end */}
        </div>
      </div>
    </div>
  );
}

export default Univers;

export async function getServerSideProps(context) {
  // Declarations
  const timeNowMs = Date.now();

  let findUnivers = undefined;
  let premiums = [];
  let experts = [];

  let universProducts = [];

  let typeprodsIds = [];

  let marques = [];
  let prices = [];
  let designers = [];
  let styles = [];
  let couleurs = [];
  let motifs = [];
  let materiaux = [];

  // Import qs
  const qs = require("qs");

  // Query univers
  const query = qs.stringify({
    populate: [
      "image",
      // categories of univers
      "categories.typeprods.produits.exposant",
      "categories.typeprods.produits.style",
      "categories.typeprods.produits.couleur",
      "categories.typeprods.produits.motif",
      "categories.typeprods.produits.materiau",
      "categories.typeprods.produits.images",
      "categories.typeprods.produits.typeprod",
      "categories.produits.exposant",
      "categories.produits.style",
      "categories.produits.couleur",
      "categories.produits.motif",
      "categories.produits.materiau",
      "categories.produits.images",
      "categories.produits.typeprod",
      // superunivers of univers
      "superuniver.univers.categories.typeprods.produits.exposant",
      "superuniver.univers.categories.typeprods.produits.style",
      "superuniver.univers.categories.typeprods.produits.couleur",
      "superuniver.univers.categories.typeprods.produits.motif",
      "superuniver.univers.categories.typeprods.produits.materiau",
      "superuniver.univers.categories.typeprods.produits.images",
      "superuniver.univers.categories.typeprods.produits.typeprod",
      // images of categories
      "categories.image",

      // internationalization
      "localizations.image",
      // categories of univers
      "localizations.categories.typeprods.produits.exposant",
      "localizations.categories.typeprods.produits.style",
      "localizations.categories.typeprods.produits.couleur",
      "localizations.categories.typeprods.produits.motif",
      "localizations.categories.typeprods.produits.materiau",
      "localizations.categories.typeprods.produits.images",
      "localizations.categories.typeprods.produits.typeprod",
      "localizations.categories.produits.exposant",
      "localizations.categories.produits.style",
      "localizations.categories.produits.couleur",
      "localizations.categories.produits.motif",
      "localizations.categories.produits.materiau",
      "localizations.categories.produits.images",
      "localizations.categories.produits.typeprod",
      // superunivers of univers
      "localizations.superuniver.univers.categories.typeprods.produits.exposant",
      "localizations.superuniver.univers.categories.typeprods.produits.style",
      "localizations.superuniver.univers.categories.typeprods.produits.couleur",
      "localizations.superuniver.univers.categories.typeprods.produits.motif",
      "localizations.superuniver.univers.categories.typeprods.produits.materiau",
      "localizations.superuniver.univers.categories.typeprods.produits.images",
      "localizations.superuniver.univers.categories.typeprods.produits.typeprod",
      // images of categories
      "localizations.categories.image",
    ],
  });

  const universRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/universs/${context["params"]["id"]}?${query}`
  );

  // get localization univers
  findUnivers = universRes["data"]["data"]["attributes"]["localizations"][
    "data"
  ].find((e) => e["attributes"]["locale"] == context["locale"]);
  if (!findUnivers) findUnivers = universRes["data"]["data"];

  // Get all products of univers
  findUnivers["attributes"]["categories"]["data"].forEach((category) => {
    universProducts = universProducts.concat(
      category["attributes"]["produits"]["data"]
    );
    category["attributes"]["typeprods"]["data"].map(
      (typeprod) =>
        (universProducts = universProducts.concat(
          typeprod["attributes"]["produits"]["data"]
        ))
    );
  });

  // Create filtres
  universProducts.forEach((product) => {
    marques.push(product);
    prices.push(product);
    designers.push(product);
    product["attributes"]["style"] &&
      styles.push(product["attributes"]["style"]["data"]);
    product["attributes"]["couleur"] &&
      couleurs.push(product["attributes"]["couleur"]["data"]);
    product["attributes"]["motif"] &&
      motifs.push(product["attributes"]["motif"]["data"]);
    product["attributes"]["materiau"] &&
      materiaux.push(product["attributes"]["materiau"]["data"]);
  });
  console.log(couleurs);
  marques = GlobalFunctions["handleCountProductsOfEachFilter"](
    marques,
    "MARQUE"
  );
  prices = GlobalFunctions["handleCountProductsOfEachPrice"](
    prices,
    "TARIF_PUB",
    [0, 150, 350, 500, 750, 1000, 2000, 1000000]
  );
  designers = GlobalFunctions["handleCountProductsOfEachFilter"](
    designers,
    "DESIGNER"
  );
  styles = GlobalFunctions["handleCountProductsOfEachFilter"](styles, "LIB");
  couleurs = GlobalFunctions["handleCountProductsOfEachFilter"](
    couleurs,
    "LIB"
  );
  motifs = GlobalFunctions["handleCountProductsOfEachFilter"](motifs, "LIB");
  materiaux = GlobalFunctions["handleCountProductsOfEachFilter"](
    materiaux,
    "LIB"
  );
  // Query Experts
  const queryExperts = qs.stringify({
    populate: [
      // image
      "image",
      // selection
      "selection_df",
    ],
    locale: context["locale"],
  });
  try {
    const expertRes = await axios.get(
      `${process.env.BASE_URL_SERVER}/api/experts?${queryExperts}`
    );
    experts = expertRes["data"]["data"];
  } catch (err) {}

  // Query Premiums
  typeprodsIds = GlobalFunctions["handleSegmentArray"](
    GlobalFunctions["handleGetIdsOfTypeProdssOfUnivers"](findUnivers),
    50
  );

  for (const segment of typeprodsIds) {
    const querySegment = qs.stringify({
      populate: [
        // image
        "image",
        // exposant
        "exposant.logo",
        // typeprod
        "typeprod",
      ],
      pagination: {
        limit: Math.ceil(10 / typeprodsIds.length), // Répartir les 10 résultats sur l'ensemble des segments
      },
      filters: {
        date_debut: { $lt: timeNowMs },
        date_fin: { $gt: timeNowMs },
        typeprod: { id: { $in: segment } },
      },
    });

    try {
      const premiumRes = await axios.get(
        `${process.env.BASE_URL_SERVER}/api/premiums?${querySegment}`
      );

      premiums.push(...premiumRes.data.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des données :", err);
    }
    if (premiums.length >= 10) {
      break;
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], ["univers", "home"])),
      Univers: findUnivers,
      Categories: findUnivers["attributes"]["categories"]["data"],
      Superunivers: findUnivers["attributes"]["superuniver"]["data"],
      Premiums: premiums,
      Experts: experts,
      Universs_Superunivers_Univers: findUnivers["attributes"]["superuniver"][
        "data"
      ]
        ? findUnivers["attributes"]["superuniver"]["data"]["attributes"][
            "univers"
          ]["data"]
        : [],
      marques: marques,
      prices: prices,
      designers: designers,
      styles: styles,
      couleurs: couleurs,
      motifs: motifs,
      materiaux: materiaux,
      Products: universProducts,
    },
  };
}
