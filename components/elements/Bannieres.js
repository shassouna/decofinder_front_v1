import React from "react";
import Link from "next/link";

const Communiques = ({ bannieres }) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-12  col-12">
        {bannieres.map((banniere) => (
          <div className="text-center" key={banniere["id"]}>
            <a href={banniere["attributes"]["lien"]}>
              <img
                src={
                  banniere["attributes"]["image"]["data"]["attributes"]["url"]
                }
              ></img>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communiques;
