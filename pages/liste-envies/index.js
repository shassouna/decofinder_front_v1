// Import from React
import { useEffect, useState } from "react";
// Import from Next
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Import from components
import PopupRevendeurs from "../../components/popups/PopupRevendeurs";

const Wishlist = () => {
  /*---------------------------------------------------Hooks begin---------------------------------------------------*/
  // Translations
  const { t: translate } = useTranslation("liste-envies");

  // useStates
  const [wishlist, setWishlist] = useState([]);
  const [showPopupRevendeurs, setShowPopupRevendeurs] = useState(false);
  const [selectedRevendeurs_produit, setSelectedRevendeurs_produit] = useState(
    []
  );

  useEffect(() => {
    const wishlistLocal = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlistLocal != null) {
      setWishlist(wishlistLocal);
    }
  }, []);
  /*---------------------------------------------------Hooks end---------------------------------------------------*/

  const handleShowPopupRevendeurs = (product) => {
    setSelectedRevendeurs_produit(
      product["attributes"]["lienrevendeurproduits"]["data"]
    );
    setShowPopupRevendeurs(!showPopupRevendeurs);
  };

  const handleDeleteFromWishlist = (product) => {
    setWishlist(wishlist.filter((element) => element["id"] != product["id"]));
    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlist.filter((element) => element["id"] != product["id"])
      )
    );
  };

  return (
    <>
      <PopupRevendeurs
        showPopup={showPopupRevendeurs}
        setShowPopup={setShowPopupRevendeurs}
        revendeurs={selectedRevendeurs_produit}
        translate={translate}
      />
      <div className="container mt-50 mb-50">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            {wishlist.length > 0 ? (
              <div className="table-responsive shopping-summery">
                <table className="table table-wishlist">
                  <thead>
                    <tr className="main-heading">
                      <th className="custome-checkbox start pl-30 text-center"></th>
                      <th className="text-center" scope="col">
                        {translate("Produit")}
                      </th>
                      <th className="text-center" scope="col"></th>
                      <th className="text-center" scope="col">
                        {translate("Exposant")}
                      </th>
                      <th className="text-center" scope="col">
                        {translate("Revendeurs")}
                      </th>
                      <th className="text-center end" scope="col">
                        {translate("Supprimer")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((product) => (
                      <tr className="pt-30 text-center" key={product["id"]}>
                        <td className="image product-thumbnail pt-40">
                          <img
                            src={
                              product["attributes"]["images"]["data"]
                                ? `${product["attributes"]["images"]["data"]["0"]["attributes"]["url"]}`
                                : "/assets/imgs/theme/image_blanche.png"
                            }
                            alt=""
                            className="img-fluid"
                          />
                        </td>
                        <td className="product-des product-name">
                          <h6 className="product-name">
                            <a>{product["attributes"]["TITRE"]}</a>
                          </h6>
                        </td>
                        <Link
                          href={
                            product["attributes"]["exposant"]["data"]
                              ? `/pp/${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`
                              : "#"
                          }
                          as={
                            product["attributes"]["exposant"]["data"]
                              ? `/pp${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`
                              : "#"
                          }
                        >
                          <td className="image product-thumbnail pt-40">
                            {product["attributes"]["exposant"]["data"] && (
                              <img
                                src={
                                  product["attributes"]["exposant"]["data"][
                                    "attributes"
                                  ]["logo"]["data"]
                                    ? `${product["attributes"]["exposant"]["data"]["attributes"]["logo"]["data"]["attributes"]["url"]}`
                                    : "/assets/imgs/theme/image_blanche.png"
                                }
                                alt=""
                                className="img-fluid"
                              />
                            )}
                          </td>
                        </Link>
                        <Link
                          href={
                            product["attributes"]["exposant"]["data"]
                              ? `/pp/${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`
                              : "#"
                          }
                          as={
                            product["attributes"]["exposant"]["data"]
                              ? `/pp${product["attributes"]["exposant"]["data"]["id"]}/${product["attributes"]["exposant"]["data"]["attributes"]["slug"]}`
                              : "#"
                          }
                        >
                          <td className="text-center detail-info">
                            {product["attributes"]["exposant"]["data"] ? (
                              <span className="stock-status in-stock mb-0">
                                {
                                  product["attributes"]["exposant"]["data"][
                                    "attributes"
                                  ]["NOM"]
                                }
                              </span>
                            ) : (
                              <span className="stock-status out-stock mb-0">
                                {translate("Pas d'exposant")}
                              </span>
                            )}
                          </td>
                        </Link>
                        <td className="text-right">
                          <button
                            className="btn btn-sm"
                            onClick={() => handleShowPopupRevendeurs(product)}
                          >
                            {translate("Revendeurs")}
                          </button>
                        </td>
                        <td className="action">
                          <a onClick={() => handleDeleteFromWishlist(product)}>
                            <i className="fi-rs-trash"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <h4 className="mb-0">{translate("Pas de produits")}</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;

export async function getServerSideProps(context) {
  // Declarations

  // Import qs
  const qs = require("qs");

  // get localization category

  return {
    props: {
      ...(await serverSideTranslations(context["locale"], [
        "liste-envies",
        "home",
      ])),
    },
  };
}
