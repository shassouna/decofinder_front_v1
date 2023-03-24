import React from "react";

function ExposantDescriptions({ Exposant, Activites, translate }) {
  return (
    <div className="heading_s1 mb-3">
      <h4 className="mb-10" style={{ minWidth: "50px", width: "30%" }}>
        {Exposant["attributes"]["NOM"]}
      </h4>
      {Activites.length > 0 && (
        <>
          {translate("Activités")} : &nbsp;
          <span>
            {Activites.map((activite, index) =>
              index == Activites.length - 1
                ? activite["attributes"]["LIB"]
                : activite["attributes"]["LIB"] + ", "
            )}
          </span>
        </>
      )}
      <div className="mt-10 mb-10">{Exposant["attributes"]["SLOGAN"]}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: Exposant["attributes"]["DESC"],
        }}
      />
    </div>
  );
}

export default ExposantDescriptions;
