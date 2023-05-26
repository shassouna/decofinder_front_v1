import Link from "next/link";
import React from "react";

const BlogSingle = ({ Communique, translate }) => {
  return (
    <>
      <div className="single-page pt-50 pr-30">
        <div className="single-header style-2">
          <div className="row">
            <div className="col-xl-12 col-lg-12 m-auto">
              <h2 className="mb-10">
                {`${translate("Communiqué de Presse")} : `}
                {Communique["attributes"]["exposants"]["data"].map(
                  (exposant, index) =>
                    index ==
                    Communique["attributes"]["exposants"]["data"].length - 1
                      ? ` ${exposant["attributes"]["NOM"]}`
                      : ` ${exposant["attributes"]["NOM"]},`
                )}
              </h2>
              <span>
                <h2 className="mb-10">{Communique["attributes"]["titre"]}</h2>
              </span>
              <div className="single-header-meta">
                <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                  <span className="time-reading has-dot">
                    {Communique["attributes"]["DATE_INS"].split("T")[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {Communique["attributes"]["images"]["data"] && (
          <figure className="single-thumbnail">
            {Communique["attributes"]["images"]["data"].map((image) => (
              <img
                src={`${image["attributes"]["url"]}`}
                alt=""
                key={image["id"]}
              />
            ))}
          </figure>
        )}
        <div className="mb-20">
          <div className="row">
            <div className="col-xl-12 col-lg-12 m-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: Communique["attributes"]["description"],
                }}
              />
            </div>
          </div>
        </div>
        {Communique["attributes"]["exposants"]["data"].map((exposant) => (
          <div className="row mb-25" key={exposant["id"]}>
            <h6>
              {translate("A propos")} : {exposant["attributes"]["NOM"]}
            </h6>
            <span>{exposant["attributes"]["ADRESSE"]}</span>
            <span>{exposant["attributes"]["CP"]}</span>
            <span>{exposant["attributes"]["VILLE"]}</span>
            <span>
              {exposant["attributes"]["pay"]["data"] &&
                exposant["attributes"]["pay"]["data"]["attributes"]["LIB"]}
            </span>
            <span>{exposant["attributes"]["TELEPHONE"]}</span>
            <div className="vendor-info mt-15">
              <Link
                href={`/ss/${exposant["id"]}/${exposant["attributes"]["slug"]}`}
              >
                <a
                  className="btn btn-xs"
                  style={{
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {translate("Accéder à la collection de cette entreprise")}
                </a>
              </Link>
              <br />
              <a
                href={exposant["attributes"]["SRV_INTERNET"]}
                className="btn btn-xs"
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {translate("Accéder au siteweb de cette entreprise")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogSingle;
