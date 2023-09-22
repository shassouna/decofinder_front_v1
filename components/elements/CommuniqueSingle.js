import Link from "next/link";
import React from "react";

const BlogSingle = ({ Communique, translate }) => {
  return (
    <>
      <div className="single-page pt-50 pr-30">
        <div className="single-header style-2">
          <div className="row">
            <div className="col-xl-12 col-lg-12 m-auto">
              <div className="mb-10">
                <h2
                  dangerouslySetInnerHTML={{
                    __html:
                      translate("Communiqué de Presse") +
                      " : " +
                      Communique["attributes"]["exposant"]["data"][
                        "attributes"
                      ]["NOM"],
                  }}
                ></h2>
              </div>
              <h2
                className="mb-10"
                dangerouslySetInnerHTML={{
                  __html: Communique["attributes"]["titre"],
                }}
              ></h2>
              <div className="single-header-meta">
                <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                  <span className="time-reading has-dot">
                    {Communique["attributes"]["DATE_INS"] &&
                      Communique["attributes"]["DATE_INS"].split("T")[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20">
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
        </div>
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
        <div
          className="row mb-25"
          key={Communique["attributes"]["exposant"]["data"]["id"]}
        >
          <h6>
            {translate("A propos")} :{" "}
            {Communique["attributes"]["exposant"]["data"]["attributes"]["NOM"]}
          </h6>
          <span>
            {
              Communique["attributes"]["exposant"]["data"]["attributes"][
                "ADRESSE"
              ]
            }
          </span>
          <span>
            {Communique["attributes"]["exposant"]["data"]["attributes"]["CP"]}
          </span>
          <span>
            {
              Communique["attributes"]["exposant"]["data"]["attributes"][
                "VILLE"
              ]
            }
          </span>
          <span>
            {Communique["attributes"]["exposant"]["data"]["attributes"]["pay"][
              "data"
            ] &&
              Communique["attributes"]["exposant"]["data"]["attributes"]["pay"][
                "data"
              ]["attributes"]["LIB"]}
          </span>
          <span>
            {
              Communique["attributes"]["exposant"]["data"]["attributes"][
                "TELEPHONE"
              ]
            }
          </span>
          <div className="vendor-info mt-15">
            <Link
              href={`/pp/${Communique["attributes"]["exposant"]["data"]["id"]}/${Communique["attributes"]["exposant"]["data"]["attributes"]["slug"]}`}
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
              href={
                Communique["attributes"]["exposant"]["data"]["attributes"][
                  "SRV_INTERNET"
                ]
              }
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
      </div>
    </>
  );
};

export default BlogSingle;
