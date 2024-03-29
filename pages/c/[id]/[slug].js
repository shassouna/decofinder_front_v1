// Import from components
import GlobalFunctions from "../../../components/elements/GlobalFunctions";
import Sidebar from "../../../components/elements/sideBar";
import Pagination from "../../../components/elements/Pagination";
import Title from "../../../components/elements/Title";
import SingleProduct from "../../../components/elements/SingleProduct";
import TypeprodsTag from "../../../components/elements/Typeprod";
import PremiumsTag from "../../../components/elements/Premiums";

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
const getPaginationGroup = [1, 2, 3, 4, 5];
const marquesFilter = "marques";
const pricesFilter = "prices";
const designersFilter = "designers";
const stylesFilter = "styles";
const couleursFilter = "couleurs";
const materiauxFilter = "materiaux";
const motifsFilter = "motifs";

function Category(props) {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // Routers
  const router = useRouter();

  // Translations
  const { t: translate } = useTranslation("category");

  // States
  const [currentPage, setCurrentPage] = useState(1);

  const [Category, setCategory] = useState(props["Category"]);
  const [Products, setProducts] = useState(props["Products"]);
  const [Typeprods, setTypeprods] = useState(props["Typeprods"]);
  const [Premiums, setPremiums] = useState(props["Premiums"]);

  const [Categories_Univers_Category, setCategories_Univers_Category] =
    useState(props["Categories_Univers_Category"]);
  const [Univers_Category, setUnivers_Category] = useState(
    props["Univers_Category"]
  );

  const [Marques, setMarques] = useState(props["marques"]);
  const [Prices, setPrices] = useState(props["prices"]);
  const [Designers, setDesigners] = useState(props["designers"]);
  const [Styles, setStyles] = useState(props["styles"]);
  const [Couleurs, setCouleurs] = useState(props["couleurs"]);
  const [Motifs, setMotifs] = useState(props["motifs"]);
  const [Materiaux, setMateriaux] = useState(props["materiaux"]);

  const [executeOthersUseEffect, setExecuteOthersUseEffect] = useState(false);

  useEffect(() => {
    // initialize sidebar checkboxs
    Prices.forEach((item) => {
      if (
        props["filterPrices"][0] == item["item"][0] &&
        props["filterPrices"][1] == item["item"][1]
      ) {
        item["checked"] = true;
      }
    });
    Marques.forEach((item) => {
      if (props["filterMarques"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });
    Designers.forEach((item) => {
      if (props["filterDesigners"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });
    Styles.forEach((item) => {
      if (props["filterStyles"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });
    Couleurs.forEach((item) => {
      if (props["filterCouleurs"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });
    Motifs.forEach((item) => {
      if (props["filterMotifs"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });
    Materiaux.forEach((item) => {
      if (props["filterMateriaux"].includes(item["item"]["id"])) {
        item["checked"] = true;
      }
    });

    // Initialize products to filter
    let productsFiltered = [...props["Products"]];

    // Filter products
    if (props["filterPrices"].length > 0) {
      productsFiltered = productsFiltered.filter(
        (product) =>
          parseFloat(product["attributes"]["TARIF_PUB"]) >=
            props["filterPrices"][0] &&
          parseFloat(product["attributes"]["TARIF_PUB"]) <=
            props["filterPrices"][1]
      );
    }

    if (props["filterMarques"].length > 0) {
      let filters = productsFiltered
        .filter((product) => props["filterMarques"].includes(product["id"]))
        .map((e) => e["attributes"]["MARQUE"]);

      productsFiltered = productsFiltered.filter((product) =>
        filters.includes(product["attributes"]["MARQUE"])
      );
    }

    if (props["filterDesigners"].length > 0) {
      let filters = productsFiltered
        .filter((product) => props["filterDesigners"].includes(product["id"]))
        .map((e) => e["attributes"]["DESIGNER"]);

      productsFiltered = productsFiltered.filter((product) =>
        filters.includes(product["attributes"]["DESIGNER"])
      );
    }

    if (props["filterStyles"].length > 0) {
      productsFiltered = productsFiltered.filter((product) => {
        if (
          product["attributes"]["style"] &&
          product["attributes"]["style"]["data"]
        ) {
          return props["filterStyles"].includes(
            product["attributes"]["style"]["data"]["id"]
          );
        }
      });
    }

    if (props["filterCouleurs"].length > 0) {
      productsFiltered = productsFiltered.filter((product) => {
        if (
          product["attributes"]["couleur"] &&
          product["attributes"]["couleur"]["data"]
        ) {
          return props["filterCouleurs"].includes(
            product["attributes"]["couleur"]["data"]["id"]
          );
        }
      });
    }

    if (props["filterMotifs"].length > 0) {
      productsFiltered = productsFiltered.filter((product) => {
        if (
          product["attributes"]["motif"] &&
          product["attributes"]["motif"]["data"]
        ) {
          return props["filterMotifs"].includes(
            product["attributes"]["motif"]["data"]["id"]
          );
        }
      });
    }

    if (props["filterMateriaux"].length > 0) {
      productsFiltered = productsFiltered.filter((product) => {
        if (
          product["attributes"]["materiau"] &&
          product["attributes"]["materiau"]["data"]
        ) {
          return props["filterMateriaux"].includes(
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

      obj["prix"] = props["filterPrices"];
      obj["couleur"] = props["filterCouleurs"];
      obj["motif"] = props["filterMotifs"];
      obj["style"] = props["filterStyles"];
      obj["materiau"] = props["filterMateriaux"];
      obj["designer"] = props["filterDesigners"];
      obj["marque"] = props["filterMarques"];

      delete obj["id"];
      delete obj["slug"];

      router.push(
        {
          pathname: `/c${router.query["id"]}/${router.query["slug"]}`,
          query: { ...obj },
        },
        undefined,
        { shallow: true }
      );
    }

    // autorize other effects
    setExecuteOthersUseEffect(true);
  }, []);

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
        let filters = productsFiltered
          .filter((product) => filterMarques.includes(product["id"]))
          .map((e) => e["attributes"]["MARQUE"]);

        productsFiltered = productsFiltered.filter((product) =>
          filters.includes(product["attributes"]["MARQUE"])
        );
      }

      if (filterDesigners.length > 0) {
        let filters = productsFiltered
          .filter((product) => filterDesigners.includes(product["id"]))
          .map((e) => e["attributes"]["DESIGNER"]);

        productsFiltered = productsFiltered.filter((product) =>
          filters.includes(product["attributes"]["DESIGNER"])
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
            pathname: `/c${router.query["id"]}/${router.query["slug"]}`,
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
  // Show next page (pagination)
  const next = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  // Show previous page (pagination)
  const prev = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  // Show selected page (pagination)
  const handleActive = (item) => {
    setCurrentPage(item);
  };

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
        {/* Categorie decription begin */}
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
                  url(${Category["attributes"]["image"]["data"]["attributes"]["url"]})`,
              }}
            >
              <div className="position-relative newsletter-inner">
                <div
                  className="newsletter-content"
                  style={{ textAlign: "center" }}
                >
                  <h2 className="mb-20">
                    {translate("Categorie")} : {Category["attributes"]["LIB"]}
                  </h2>
                  <p
                    className="mb-20"
                    style={{ color: "white" }}
                    dangerouslySetInnerHTML={{
                      __html: Category["attributes"]["FULLTEXT"],
                    }}
                  />
                  {Category["attributes"]["FULLTEXT"] && (
                    <a
                      href="#category-description-detail"
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
        {/* Categorie decription end */}
      </div>

      <div className="row">
        {/* SideBar filters begin */}
        <div className="col-lg-3 primary-sidebar sticky-sidebar">
          <Sidebar
            Category={Category}
            Univers_Category={Univers_Category}
            Categories_Univers_Category={Categories_Univers_Category}
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
            handleFilter={handleFilter}
            translate={translate}
          />
        </div>
        {/* SideBar filters end */}

        <div className="col-lg-9">
          {/* list of typeproducts begin */}
          <div className="mb-75">
            <div className="shop-product-fillter">
              <Title
                elements={[
                  Univers_Category["attributes"]["LIB"],
                  Category["attributes"]["LIB"],
                ]}
              />
            </div>
            <div className="loop-grid">
              <TypeprodsTag typeprods={Typeprods} />
            </div>
          </div>
          {/* list of typeproducts end */}

          {/* list of selections begin */}
          {/*Premiums.length > 0 && (
            <div className="mb-100">
              <h2 className="mb-30" style={{ textAlign: "center" }}>
                {translate("Découvrez nos sélections")} :
              </h2>
              <div className="home-slide-cover">
                <PremiumsTag premiums={Premiums} />
              </div>
            </div>
          )*/}
          {/* list of selections end */}

          {/* list of products begin */}
          <div className="row product-grid-3">
            {Products.length === 0 && <h3>{translate("Pas de produits")}</h3>}
            <h2 className="mb-30">
              {translate("Découvrez tous les produits de la catégorie") +
                " " +
                Category["attributes"]["LIB"]}{" "}
              :{" "}
            </h2>
            {Products.slice((currentPage - 1) * limit, currentPage * limit).map(
              (product) => (
                <div
                  key={product["id"]}
                  className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                >
                  <SingleProduct product={product} translate={translate} />
                </div>
              )
            )}
          </div>
          {/* list of products end */}

          {/* pagination begin */}
          <div className="pagination-area mt-15 mb-sm-5 mb-lg-60">
            <Pagination
              getPaginationGroup={getPaginationGroup}
              currentPage={currentPage}
              next={next}
              prev={prev}
              handleActive={handleActive}
            />
          </div>
          {/* pagination end */}
        </div>
      </div>
    </div>
  );
}

export default Category;

export async function getServerSideProps(context) {
  // Declaration
  const timeNowMs = Date.now();

  let categoryProducts = [];

  let typeprodsIds = [];

  let marques = [];
  let prices = [];
  let designers = [];
  let styles = [];
  let couleurs = [];
  let motifs = [];
  let materiaux = [];

  let filterMarques = [];
  let filterPrices = [];
  let filterDesigners = [];
  let filterStyles = [];
  let filterCouleurs = [];
  let filterMotifs = [];
  let filterMateriaux = [];

  let findCategory = undefined;

  // Import qs
  const qs = require("qs");

  // Query categories
  const query = qs.stringify({
    populate: [
      "image",
      // products of typeprods
      "typeprods.produits.exposant",
      "typeprods.produits.typeprod",
      "typeprods.produits.images",
      "typeprods.produits.style",
      "typeprods.produits.couleur",
      "typeprods.produits.motif",
      "typeprods.produits.materiau",
      // products of category
      "produits.exposant",
      "produits.typeprod",
      "produits.images",
      "produits.style",
      "produits.couleur",
      "produits.motif",
      "produits.materiau",
      // products of univers
      "univer.categories.typeprods.produits",
      "univer.categories.produits",
      // typeprods
      "typeprods.image",

      // internationalization
      "localizations.image",
      // products of typeprods
      "localizations.typeprods.produits.exposant",
      "localizations.typeprods.produits.typeprod",
      "localizations.typeprods.produits.images",
      "localizations.typeprods.produits.style",
      "localizations.typeprods.produits.couleur",
      "localizations.typeprods.produits.motif",
      "localizations.typeprods.produits.materiau",
      // products of category
      "localizations.produits.exposant",
      "localizations.produits.typeprod",
      "localizations.produits.images",
      "localizations.produits.style",
      "localizations.produits.couleur",
      "localizations.produits.motif",
      "localizations.produits.materiau",
      // products of univers
      "localizations.univer.categories.typeprods.produits",
      "localizations.univer.categories.produits",
      // typeprods
      "localizations.typeprods.image",
    ],
  });
  const categorieRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/categories/${context["params"]["id"]}?${query}`
  );

  // get localization category
  findCategory = categorieRes["data"]["data"]["attributes"]["localizations"][
    "data"
  ].find((e) => e["attributes"]["locale"] == context["locale"]);
  if (!findCategory) findCategory = categorieRes["data"]["data"];

  // Get all products of category
  categoryProducts = categoryProducts.concat(
    findCategory["attributes"]["produits"]["data"]
  );
  findCategory["attributes"]["typeprods"]["data"]
    .map((e) => e["attributes"]["produits"]["data"])
    .forEach((tab) => (categoryProducts = categoryProducts.concat(tab)));

  console.log(categoryProducts);

  // Create filtres
  categoryProducts.forEach((product) => {
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

  // Get list of filters from url
  if (context.query.marque) {
    filterMarques =
      typeof context.query.marque == "string"
        ? [parseInt(context.query.marque)]
        : context.query.marque.map((element) => parseInt(element));
  }
  if (context.query.designer) {
    filterDesigners =
      typeof context.query.designer == "string"
        ? [parseInt(context.query.designer)]
        : context.query.designer.map((element) => parseInt(element));
  }
  if (context.query.prix) {
    filterPrices =
      typeof context.query.prix == "string"
        ? [parseInt(context.query.prix)]
        : context.query.prix.map((element) => parseInt(element));
  }
  if (context.query.style) {
    filterStyles =
      typeof context.query.style == "string"
        ? [parseInt(context.query.style)]
        : context.query.style.map((element) => parseInt(element));
  }
  if (context.query.couleur) {
    filterCouleurs =
      typeof context.query.couleur == "string"
        ? [parseInt(context.query.couleur)]
        : context.query.couleur.map((element) => parseInt(element));
  }
  if (context.query.motif) {
    filterMotifs =
      typeof context.query.motif == "string"
        ? [parseInt(context.query.motif)]
        : context.query.motif.map((element) => parseInt(element));
  }
  if (context.query.materiau) {
    filterMateriaux =
      typeof context.query.materiau == "string"
        ? [parseInt(context.query.materiau)]
        : context.query.materiau.map((element) => parseInt(element));
  }

  // Get premiums
  typeprodsIds = findCategory["attributes"]["typeprods"]["data"].map(
    (typeprod) => typeprod["id"]
  );
  const queryPremium = qs.stringify({
    populate: [
      // image
      "image",
      // exposant
      "exposant",
      // typeprod
      "typeprod",
    ],
    filters: {
      date_debut: { $lt: timeNowMs },
      date_fin: { $gt: timeNowMs },
      typeprod: { id: { $in: typeprodsIds } },
    },
    locale: context["locale"],
  });
  const premiumRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/premiums?${queryPremium}`
  );

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [
        "category",
        "home",
      ])),
      Category: findCategory,
      Typeprods: findCategory["attributes"]["typeprods"]["data"],
      Products: categoryProducts,
      Premiums: premiumRes["data"]["data"],
      Univers_Category: findCategory["attributes"]["univer"]["data"],
      Categories_Univers_Category:
        findCategory["attributes"]["univer"]["data"]["attributes"][
          "categories"
        ]["data"],
      marques: marques,
      prices: prices,
      designers: designers,
      styles: styles,
      couleurs: couleurs,
      motifs: motifs,
      materiaux: materiaux,
      filterMarques: filterMarques,
      filterDesigners: filterDesigners,
      filterPrices: filterPrices,
      filterStyles: filterStyles,
      filterCouleurs: filterCouleurs,
      filterMotifs: filterMotifs,
      filterMateriaux: filterMateriaux,
    },
  };
}
