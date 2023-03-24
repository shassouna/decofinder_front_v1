import React from "react";

function Filters({ filter, handleChoseFilter, translate }) {
  return (
    <div className="row mb-50">
      <ul className="list-inline nav nav-tabs links">
        <li className="list-inline-item nav-item">
          <a
            className={filter == 1 ? "nav-link active" : "nav-link"}
            onClick={() => handleChoseFilter(1)}
          >
            {translate("Produits")}
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a
            className={filter == 2 ? "nav-link active" : "nav-link"}
            onClick={() => handleChoseFilter(2)}
          >
            {translate("Marques")}
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a
            className={filter == 3 ? "nav-link active" : "nav-link"}
            onClick={() => handleChoseFilter(3)}
          >
            {translate("Catalogues")}
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a
            className={filter == 4 ? "nav-link active" : "nav-link"}
            onClick={() => handleChoseFilter(4)}
          >
            {translate("News")}
          </a>
        </li>
        <li className="list-inline-item nav-item">
          <a
            className={filter == 5 ? "nav-link active" : "nav-link"}
            onClick={() => handleChoseFilter(5)}
          >
            {translate("Newsletters")}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
