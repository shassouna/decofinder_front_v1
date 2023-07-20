import React from "react";

function ExposantInformations({
  Exposant,
  translate,
  handleShowPopupPointsDeVente,
}) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 text-center">
      <div
        className="sidebar-widget widget-store-info mb-30 p-10"
        style={{ background: "rgba(240,240,240,0.5)" }}
      >
        <div className="vendor-logo mb-30">
          <img
            src={
              Exposant["attributes"]["logo"]["data"]
                ? `${Exposant["attributes"]["logo"]["data"]["attributes"]["url"]}`
                : "/assets/imgs/theme/image_blanche.png"
            }
            alt=""
          />
        </div>
        <div className="vendor-info">
          <div className="ollow-social mb-20">
            <h6 className="mb-5">{translate("Suivez-nous")}</h6>
            <ul className="social-network">
              {Exposant["attributes"]["TWITTER"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["TWITTER"]} target="_blank">
                    <img src="/assets/imgs/theme/icons/social-tw.svg" alt="" />
                  </a>
                </li>
              )}
              {Exposant["attributes"]["FACEBOOK"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["FACEBOOK"]} target="_blank">
                    <img src="/assets/imgs/theme/icons/social-fb.svg" alt="" />
                  </a>
                </li>
              )}
              {Exposant["attributes"]["INSTAGRAM"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["INSTAGRAM"]} target="_blank">
                    <img
                      src="/assets/imgs/theme/icons/social-insta.svg"
                      alt=""
                    />
                  </a>
                </li>
              )}
              {Exposant["attributes"]["PINTEREST"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["PINTEREST"]} target="_blank">
                    <img src="/assets/imgs/theme/icons/social-pin.svg" alt="" />
                  </a>
                </li>
              )}
              {Exposant["attributes"]["YOUTUBE"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["YOUTUBE"]} target="_blank">
                    <img
                      src="/assets/imgs/theme/icons/social-youtube.svg"
                      alt=""
                    />
                  </a>
                </li>
              )}
              {Exposant["attributes"]["VIMEO"] && (
                <li className="hover-up">
                  <a href={Exposant["attributes"]["VIMEO"]} target="_blank">
                    <img
                      src="/assets/imgs/theme/icons/social-vimeo.svg"
                      alt=""
                    />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="vendor-info">
            <h6 className="mb-5">{translate("Coordonnées")}</h6>
            <ul className="ont-sm mb-20">
              <li>
                <strong>{translate("Adresse")} : </strong>{" "}
                <span>{Exposant["attributes"]["ADRESSE"]}</span>
              </li>
              <li>
                <span>{Exposant["attributes"]["CP"]}</span>
              </li>
              <li>
                <span>{Exposant["attributes"]["VILLE"]}</span>
              </li>
              <li>
                <span>
                  {Exposant["attributes"]["pay"]["data"] &&
                    Exposant["attributes"]["pay"]["data"]["attributes"]["LIB"]}
                </span>
              </li>
              <li>
                <strong>{translate("Appelez-nous")} : </strong>
                <span>{Exposant["attributes"]["TELEPHONE"]}</span>
              </li>
              <li>
                <strong>{translate("Fax")} : </strong>
                <span>{Exposant["attributes"]["FAX"]}</span>
              </li>
              <li>
                <strong>{translate("Show Room")} : </strong>
                <span>{Exposant["attributes"]["SHOW_ROOM"]}</span>
              </li>
            </ul>
            <a
              onClick={handleShowPopupPointsDeVente}
              className="btn btn-xs"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {translate("Points de vente")}
            </a>
            <br />
            {Exposant["attributes"]["SRV_INTERNET"] && (
              <a
                target="_blank"
                href={Exposant["attributes"]["SRV_INTERNET"]}
                className="btn btn-xs"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {translate("Visiter le site")}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExposantInformations;
