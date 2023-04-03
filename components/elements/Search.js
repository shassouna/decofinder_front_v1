import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = ({ setShowSearchingPage, setShowFilteringPage, translate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(
      {
        pathname: `/`,
        query: { search: searchTerm },
      },
      undefined,
      { shallow: true }
    );

    setSearchTerm("");
    setShowFilteringPage(filter);
    setShowSearchingPage(true);
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  return (
    <>
      <form>
        <select
          className="select-active"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option>{translate("Tout")}</option>
          <option>{translate("Super univers")}</option>
          <option>{translate("Univers")}</option>
          <option>{translate("Categorie")}</option>
          <option>{translate("Type produit")}</option>
          <option>{translate("Produit")}</option>
          <option>{translate("Exposant")}</option>
        </select>
        <input
          value={searchTerm}
          onKeyDown={handleInput}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder={translate("Recherchez")}
        />
      </form>
    </>
  );
};

export default Search;
