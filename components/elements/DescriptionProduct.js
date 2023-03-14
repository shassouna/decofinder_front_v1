import React, { useState } from "react"
import Revendeur from "./Revendeur"

const ProductTab = ({Product, Couleur, Style, Motif, Materiau, Exposant, Liens_Revendeurs_Produit, translate}) => {

    return (
        <div className="product-info">
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a className="nav-link active" id="Additional-info-tab" data-bs-toggle="tab">
                            {translate("Détails")}
                        </a>
                    </li>
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div className="tab-pane fade show active" id="Description">
                        <div dangerouslySetInnerHTML={{ __html: Product["attributes"]["DESC"]}} />
                        <ul className="product-more-infor mt-30">
                            {Product["attributes"]["DESIGNER"]&&
                            <li>
                                <span>{translate("Designer")}</span>
                                {Product["attributes"]["DESIGNER"]}
                            </li>
                            }
                            {Product["attributes"]["MARQUE"]&&
                            <li>
                                <span>{translate("Marque")}</span>
                                {Product["attributes"]["MARQUE"]}
                            </li>
                            }
                            {Couleur&&Couleur["attributes"]["LIB"]&&
                            <li>
                                <span>{translate("Couleur")}</span>
                                {Couleur["attributes"]["LIB"]}
                            </li>
                            }
                            {Style&&Style["attributes"]["LIB"]&&
                            <li>
                                <span>{translate("Style")}</span>
                                {Style["attributes"]["LIB"]}
                            </li>
                            }
                            {Motif&&Motif["attributes"]["LIB"]&&
                            <li>
                                <span>{translate("Motif")}</span>
                                {Motif["attributes"]["LIB"]}
                            </li>
                            }
                            {Materiau&&Materiau["attributes"]["LIB"]&& 
                            <li>
                                <span>{translate("Materiau")}</span>
                                {Materiau["attributes"]["LIB"]}
                            </li>  
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTab
