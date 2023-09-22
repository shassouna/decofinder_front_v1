import React from "react";
import Link from "next/link";

const Communiques = ({ communiques, translate }) => {
  return (
    <>
      {communiques.length === 0 && <h3>{translate("Pas de communiqués")}</h3>}
      {communiques.length > 0 && (
        <>
          <div className="row">
            {communiques.map((communique) => (
              <div
                key={communique["id"]}
                className="col-lg-3 col-md-4 col-sm-6 col-12"
              >
                <div
                  className="banner-img wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  {communique["attributes"]["images"]["data"] ? (
                    <img
                      src={`${communique["attributes"]["images"]["data"][0]["attributes"]["url"]}`}
                      alt=""
                      style={{ height: "300px", width: "100%", opacity: 0.5 }}
                    />
                  ) : (
                    <img
                      src="/assets/imgs/theme/image_blanche.png"
                      alt=""
                      style={{ height: "300px", width: "100%", opacity: 0.5 }}
                    />
                  )}
                  <div className="banner-text">
                    <h5 className="mb-5">
                      {communique["attributes"]["titre"]}
                    </h5>
                    {communique["attributes"]["description"] && (
                      <div
                        style={{ color: "black" }}
                        dangerouslySetInnerHTML={{
                          __html: communique["attributes"][
                            "description"
                          ].substring(0, 200),
                        }}
                      />
                    )}
                    <Link
                      target="_blank"
                      href={`/cpp/${communique["id"]}/${communique["attributes"]["slug"]}`}
                      as={`/cpp${communique["id"]}/${communique["attributes"]["slug"]}`}
                    >
                      <a className="btn btn-xs">
                        {translate("Lire plus")}
                        <i className="fi-rs-arrow-small-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Communiques;
