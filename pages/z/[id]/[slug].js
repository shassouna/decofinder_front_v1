// import libraries
import axios from "axios";
// import from next
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import from react
import { useState } from "react";
// import from components
import ThumbSliderImages from "../../../components/elements/Thumb";
import DescriptionProduct from "../../../components/elements/DescriptionProduct";
import RelatedProducts from "../../../components/elements/FourProducts";
import Revendeur from "../../../components/elements/Revendeur";

const ProductId = (props) => {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/

  // Translations
  const { t: translate } = useTranslation("product");

  // States
  const [Product, setProduct] = useState(props["Product"]);
  const [Exposant, setExposant] = useState(props["Exposant"]);
  const [Typeprod, setTypeprod] = useState(props["Typeprod"]);
  const [Liens_Revendeurs_Produit, setLiens_Revendeurs_Produit] = useState(
    props["Liens_Revendeurs_Produit"]
  );
  const [Couleur, setCouleur] = useState(props["Couleur"]);
  const [Style, setStyle] = useState(props["Style"]);
  const [Motif, setMotif] = useState(props["Motif"]);
  const [Materiau, setMateriau] = useState(props["Materiau"]);
  const [
    Products_SameExposant_SameTypeprods,
    setProducts_SameExposant_SameTypeprods,
  ] = useState(props["Products_SameExposant_SameTypeprods"]);
  const [Products_Exposant_Product, setProducts_Exposant_Product] = useState(
    props["Products_Exposant_Product"]
  );
  const [Products_Typeprod_Product, setProducts_Typeprod_Product] = useState(
    props["Products_Typeprod_Product"]
  );
  const [Images, setImages] = useState(props["Images"]);

  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  const handleAddToWishList = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));

    if (wishlist == null) {
      wishlist = [];
    }
    if (!wishlist.find((item) => item["id"] == Product["id"])) {
      wishlist.push(Product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-xl-10 col-lg-12 m-auto">
          <div className="product-detail accordion-detail">
            <div className="row mb-50  mt-30">
              {/* slider images product begin */}
              <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                <div className="detail-gallery">
                  <div className="product-image-slider">
                    <ThumbSliderImages Images={Images} />
                  </div>
                </div>
              </div>
              {/* slider images product end */}

              {/* informations product begin */}
              <div
                className="col-md-6 col-sm-12 col-xs-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="detail-info  pr-30 pl-30">
                  {Exposant && Exposant["attributes"]["logo"]["data"] && (
                    <img
                      className="mb-10"
                      id={Exposant["id"]}
                      src={`${Exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`}
                    />
                  )}
                  <br />
                  {Exposant && <strong>{Exposant["attributes"]["NOM"]}</strong>}
                  {Typeprod && (
                    <h2 className="title-detail mt-10">{`${Typeprod["attributes"]["LIB"]} - ${Product["attributes"]["TITRE"]}`}</h2>
                  )}
                  <div className="clearfix product-price-cover">
                    <div className="product-price primary-color float-left">
                      <span className="current-price  text-brand">
                        {Product["attributes"]["TARIF_PUB"] &&
                          Product["attributes"]["TARIF_PUB"] + " €"}
                      </span>
                    </div>
                  </div>

                  <div className="short-desc mb-30">
                    <p className="font-lg">{Product["attributes"]["DESC"]}</p>
                  </div>
                  <div className="vendor-info">
                    <a
                      href={Exposant["attributes"]["SRV_INTERNET"]}
                      className="btn btn-xs"
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {translate("SITE WEB")}
                    </a>
                    <br />
                    <a
                      className="btn btn-xs"
                      style={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      onClick={handleAddToWishList}
                    >
                      {translate("METTRE EN FAVORIS")}
                    </a>

                    <div
                      className="ollow-social mb-20 mt-40"
                      style={{ textAlign: "center" }}
                    >
                      {Exposant && (
                        <ul className="social-network">
                          {Exposant["attributes"]["TWITTER"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["TWITTER"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-tw.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                          {Exposant["attributes"]["FACEBOOK"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["FACEBOOK"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-fb.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                          {Exposant["attributes"]["INSTAGRAM"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["INSTAGRAM"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-insta.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                          {Exposant["attributes"]["PINTEREST"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["PINTEREST"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-pin.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                          {Exposant["attributes"]["YOUTUBE"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["YOUTUBE"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-youtube.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                          {Exposant["attributes"]["VIMEO"] && (
                            <li className="hover-up">
                              <a
                                href={Exposant["attributes"]["VIMEO"]}
                                target="_blank"
                              >
                                <img
                                  src="/assets/imgs/theme/icons/social-vimeo.svg"
                                  alt=""
                                />
                              </a>
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* informations product end */}
            </div>

            {
              /* liste revendeurs begin */
              Liens_Revendeurs_Produit.length > 0 && (
                <div className="row mb-60">
                  <div className="col-12">
                    <h3 className="section-title style-1 mb-30">
                      {translate("Revendeurs")}
                    </h3>
                  </div>
                  <div className="col-12">
                    <div className="row related-products position-relative">
                      {Liens_Revendeurs_Produit.map((lien_revendeur) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
                          <Revendeur
                            key={lien_revendeur["id"]}
                            revendeur={lien_revendeur}
                            translate={translate}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
              /* liste revendeurs end */
            }

            {/* Description product begin */}
            <DescriptionProduct
              Product={Product}
              Couleur={Couleur}
              Style={Style}
              Motif={Motif}
              Materiau={Materiau}
              Exposant={Exposant}
              Liens_Revendeurs_Produit={Liens_Revendeurs_Produit}
              translate={translate}
            />
            {/* Description product end */}

            {
              /* Products of the same Typeprod begin*/
              Products_Typeprod_Product.length > 0 && (
                <div className="mt-60">
                  <h3 className="section-title style-1 mb-30">
                    {translate("Autres produits") +
                      " " +
                      Typeprod["attributes"]["LIB"]}
                  </h3>
                  <div className="related-products position-relative">
                    <RelatedProducts
                      Products={Products_Typeprod_Product}
                      translate={translate}
                    />
                  </div>
                </div>
              )
              /* Products of the same Typeprod end*/
            }
            {
              /* Products of the same Exposant begin*/
              Products_Exposant_Product.length > 0 && (
                <div className="mt-60">
                  <h3 className="section-title style-1 mb-30">
                    {translate("Toute la collection de") +
                      " " +
                      Exposant["attributes"]["NOM"]}
                  </h3>
                  <div className="related-products position-relative">
                    <RelatedProducts
                      Products={Products_Exposant_Product}
                      translate={translate}
                    />
                  </div>
                </div>
              )
              /* Products of the same Exposant end*/
            }
            {Products_SameExposant_SameTypeprods.length > 0 && (
              <div className="mt-60">
                <h3 className="section-title style-1 mb-30">
                  {translate("Produits associés")}
                </h3>
                <div className="related-products position-relative">
                  <RelatedProducts
                    Products={Products_SameExposant_SameTypeprods}
                    translate={translate}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;

export async function getServerSideProps(context) {
  // Declarations
  let findProduct = undefined;

  // Import qs
  const qs = require("qs");

  // Query produit
  const query = qs.stringify({
    populate: [
      // product
      "couleur",
      "style",
      "motif",
      "materiau",
      "images",
      // typeprod
      "typeprod.produits.images",
      "typeprod.produits.exposant",
      "typeprod.produits.typeprod",
      // exposant
      "exposant.produits.images",
      "exposant.produits.exposant",
      "exposant.produits.typeprod",
      "exposant.revendeurs",
      "exposant.logo",
      // lienrevendeurproduits
      "lienrevendeurproduits.exposant.logo",
      // Internationalization
      // product
      "localizations.couleur",
      "localizations.style",
      "localizations.motif",
      "localizations.materiau",
      "localizations.images",
      // typeprod
      "localizations.typeprod.produits.images",
      "localizations.typeprod.produits.exposant",
      "localizations.typeprod.produits.typeprod",
      // exposant
      "localizations.exposant.produits.images",
      "localizations.exposant.produits.exposant",
      "localizations.exposant.produits.typeprod",
      "localizations.exposant.revendeurs",
      "localizations.exposant.logo",
      // lienrevendeurproduits
      "localizations.lienrevendeurproduits.exposant.logo",
    ],
  });

  const productRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/produits/${context["params"]["id"]}?${query}`
  );

  findProduct = productRes["data"]["data"]["attributes"]["localizations"][
    "data"
  ].find((e) => e["attributes"]["locale"] == context["locale"]);
  if (!findProduct) findProduct = productRes["data"]["data"];

  // Query produit Typeprod Exposant
  let filters = { ID: { $ne: findProduct["id"] }, exposant: {}, typeprod: {} };

  if (findProduct["attributes"]["exposant"]["data"]) {
    filters["exposant"]["ID"] = {
      $eq: findProduct["attributes"]["exposant"]["data"]["id"],
    };
  }

  if (findProduct["attributes"]["typeprod"]["data"]) {
    filters["typeprod"]["ID"] = {
      $eq: findProduct["attributes"]["typeprod"]["data"]["id"],
    };
  }

  const queryExposantTypeProd = qs.stringify({
    populate: [
      // product
      "images",
      // typeprod
      "typeprod",
      // exposant
      "exposant",
    ],
    filters: filters,
  });
  const exposantTypeprodRes = await axios.get(
    `${process.env.BASE_URL_SERVER}/api/produits?${queryExposantTypeProd}`
  );

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], ["product", "home"])),
      Product: findProduct,
      Exposant: findProduct["attributes"]["exposant"]["data"],
      Typeprod: findProduct["attributes"]["typeprod"]["data"],
      Images: findProduct["attributes"]["images"]["data"],
      Liens_Revendeurs_Produit:
        findProduct["attributes"]["lienrevendeurproduits"]["data"],

      Couleur: findProduct["attributes"]["couleur"]["data"],
      Style: findProduct["attributes"]["style"]["data"],
      Motif: findProduct["attributes"]["motif"]["data"],
      Materiau: findProduct["attributes"]["materiau"]["data"],
      Products_SameExposant_SameTypeprods: exposantTypeprodRes["data"]["data"],
      Products_Exposant_Product: findProduct["attributes"]["exposant"]["data"]
        ? findProduct["attributes"]["exposant"]["data"] &&
          findProduct["attributes"]["exposant"]["data"]["attributes"][
            "produits"
          ]["data"]
        : [],
      Products_Typeprod_Product: findProduct["attributes"]["typeprod"]["data"]
        ? findProduct["attributes"]["typeprod"]["data"] &&
          findProduct["attributes"]["typeprod"]["data"]["attributes"][
            "produits"
          ]["data"]
        : [],
    },
  };
}
