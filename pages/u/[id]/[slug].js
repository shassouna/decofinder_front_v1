// Import from libraries
import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Univers(props) {
  /*---------------------------------------------------Functions end---------------------------------------------------*/

  return null;
}

export default Univers;

export async function getServerSideProps(context) {
  // Declarations
  const timeNowMs = Date.now();

  let findUnivers = undefined;

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
      // categories of univers
      "localizations.categories.typeprods.produits.exposant",
      "localizations.categories.typeprods.produits.style",
      "localizations.categories.typeprods.produits.couleur",
      "localizations.categories.typeprods.produits.motif",
      "localizations.categories.typeprods.produits.materiau",
      "localizations.categories.typeprods.produits.images",
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

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], ["univers", "home"])),
    },
  };
}
