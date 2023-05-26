// Import from Next
import Link from "next/link";

const Revendeur = ({ revendeurs, translate }) => {
  return (
    <div className="row vendor-grid">
      <h3 className="mb-20">{translate("Marques Revendues")} : </h3>
      {revendeurs.map((item) => (
        <div key={item["id"]} className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div
            className="vendor-wrap mb-10  style-2"
            style={{ background: "rgba(225,225,225,0.25)" }}
          >
            <div className="vendor-img-action-wrap">
              <div className="vendor-img">
                <Link
                  href={`/ss${item["id"]}/${item["attributes"]["slug"]}`}
                  as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}
                >
                  <a>
                    <img
                      src={
                        item["attributes"]["logo"]["data"]
                          ? `${item["attributes"]["logo"]["data"]["attributes"]["url"]}`
                          : "/assets/imgs/theme/image_blanche.png"
                      }
                      alt=""
                      className="default-img"
                    />
                  </a>
                </Link>
              </div>

              <div className="mt-25">
                <Link
                  href={`/ss${item["id"]}/${item["attributes"]["slug"]}`}
                  as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}
                >
                  <a>
                    <span className="font-small total-product">
                      {item["attributes"]["NOM"]}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="vendor-content-wrap">
              <div className="mb-30">
                <h4 className="mb-5">
                  <Link
                    href={`/ss${item["id"]}/${item["attributes"]["slug"]}`}
                    as={`/ss/${item["id"]}/${item["attributes"]["slug"]}`}
                  >
                    <a>{item["attributes"]["NOM"]}</a>
                  </Link>
                </h4>
                <div className="vendor-info d-flex justify-content-between align-items-end mt-30">
                  <ul className="contact-infor text-muted">
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-location.svg"
                        alt=""
                      />
                      <strong>{translate("Adresse")} : </strong>{" "}
                      <span>{item["attributes"]["ADRESSE"]}</span>
                    </li>
                    <li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <strong></strong>
                      <span>
                        {item["attributes"]["VILLE"]},{" "}
                        {item["attributes"]["CP"]}
                      </span>
                    </li>
                    <li className="mb-25">
                      <img
                        src="/assets/imgs/theme/icons/icon-contact.svg"
                        alt=""
                      />
                      <strong>{translate("Numéro de téléphone")} : </strong>
                      <span>{item["attributes"]["TELEPHONE"]}</span>
                    </li>
                    <li>
                      <a
                        href={item["attributes"]["SRV_INTERNET"]}
                        target="_blank"
                        className="btn btn-xs"
                      >
                        SiteWeb<i className="fi-rs-arrow-small-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Revendeur;
