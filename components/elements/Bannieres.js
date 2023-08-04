import React from "react";

const Bannieres = ({ bannieres }) => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-12  col-12">
        {bannieres.map((banniere) => (
          <div className="text-center" key={banniere["id"]}>
            <a target="_blank" href={banniere["attributes"]["lien"]}>
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

export default Bannieres;
