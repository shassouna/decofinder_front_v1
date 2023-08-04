// Import from Components
import Search from "../elements/Search";
// Import from Next
import { useRouter } from "next/router";
import Link from "next/link";
// Import from React
import React, { useEffect, useState } from "react";

const Header = ({
  toggleClick,
  translate,
  superuniverss,
  bannieres,
  setShowSearchingPage,
  setShowFilteringPage,
}) => {
  const router = useRouter();

  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  if (typeof window !== "undefined") {
    useEffect(() => {
      const wishlistLocal = JSON.parse(localStorage.getItem("wishlist"));
      if (wishlistLocal != null) {
        setWishlist(wishlistLocal);
      }
    }, [localStorage.getItem("wishlist")]);
  }

  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                {bannieres.map((banniere) => (
                  <div className="text-center" key={banniere["id"]}>
                    <a target="_blank" href={banniere["attributes"]["lien"]}>
                      <img
                        src={
                          banniere["attributes"]["image"]["data"]["attributes"][
                            "url"
                          ]
                        }
                      ></img>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/" locale={router["locale"]}>
                  <a>
                    <img src="/assets/imgs/logos/logo_df.jpg" alt="logo" />
                  </a>
                </Link>
              </div>
              <div className="header-right">
                <div className="header-info header-info-right mr-50 mt-10">
                  <ul>
                    <li>
                      {router["locale"] == "fr" ? (
                        <Link href={router["asPath"]}>
                          <a className="language-dropdown-active">
                            <img src="/assets/imgs/theme/flag-fr.png" alt="" />
                            Français
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                      ) : router["locale"] == "en" ? (
                        <Link href={router["asPath"]}>
                          <a className="language-dropdown-active">
                            <img src="/assets/imgs/theme/flag-gbr.png" alt="" />
                            English
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                      ) : router["locale"] == "es" ? (
                        <Link href={router["asPath"]}>
                          <a className="language-dropdown-active">
                            <img src="/assets/imgs/theme/flag-es.png" alt="" />
                            Espagnol
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                      ) : router["locale"] == "de" ? (
                        <Link href={router["asPath"]}>
                          <a className="language-dropdown-active">
                            <img src="/assets/imgs/theme/flag-de.png" alt="" />
                            Deutsch
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                      ) : router["locale"] == "it" ? (
                        <Link href={router["asPath"]} locale="it">
                          <a className="language-dropdown-active">
                            <img src="/assets/imgs/theme/flag-it.png" alt="" />
                            Italiano
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                      ) : null}
                      <ul className="language-dropdown">
                        <li>
                          <Link
                            href={
                              router["query"]["id"]
                                ? `${
                                    router["asPath"].split(
                                      router["asPath"].match(
                                        router["query"]["id"]
                                      )[0]
                                    )[0]
                                  }/${router["query"]["id"]}/${
                                    router["query"]["slug"]
                                  }`.replace("//", "/")
                                : router["asPath"]
                            }
                            as={router["asPath"]}
                            locale="fr"
                          >
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-fr.png"
                                alt=""
                              />
                              Français
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={
                              router["query"]["id"]
                                ? `${
                                    router["asPath"].split(
                                      router["asPath"].match(
                                        router["query"]["id"]
                                      )[0]
                                    )[0]
                                  }/${router["query"]["id"]}/${
                                    router["query"]["slug"]
                                  }`.replace("//", "/")
                                : router["asPath"]
                            }
                            as={router["asPath"]}
                            locale="en"
                          >
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-gbr.png"
                                alt=""
                              />
                              English
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={
                              router["query"]["id"]
                                ? `${
                                    router["asPath"].split(
                                      router["asPath"].match(
                                        router["query"]["id"]
                                      )[0]
                                    )[0]
                                  }/${router["query"]["id"]}/${
                                    router["query"]["slug"]
                                  }`.replace("//", "/")
                                : router["asPath"]
                            }
                            as={router["asPath"]}
                            locale="de"
                          >
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-de.png"
                                alt=""
                              />
                              Deutsch
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={
                              router["query"]["id"]
                                ? `${
                                    router["asPath"].split(
                                      router["asPath"].match(
                                        router["query"]["id"]
                                      )[0]
                                    )[0]
                                  }/${router["query"]["id"]}/${
                                    router["query"]["slug"]
                                  }`.replace("//", "/")
                                : router["asPath"]
                            }
                            as={router["asPath"]}
                            locale="it"
                          >
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-it.png"
                                alt=""
                              />
                              Italiano
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={
                              router["query"]["id"]
                                ? `${
                                    router["asPath"].split(
                                      router["asPath"].match(
                                        router["query"]["id"]
                                      )[0]
                                    )[0]
                                  }/${router["query"]["id"]}/${
                                    router["query"]["slug"]
                                  }`.replace("//", "/")
                                : router["asPath"]
                            }
                            as={router["asPath"]}
                            locale="es"
                          >
                            <a>
                              <img
                                src="/assets/imgs/theme/flag-es.png"
                                alt=""
                              />
                              Espagnol
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="search-style-2">
                  <Search
                    setShowSearchingPage={setShowSearchingPage}
                    setShowFilteringPage={setShowFilteringPage}
                    translate={translate}
                  />
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link href="#">
                        <a>
                          <span className="lable">
                            {translate("Inspirations")}
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <a target="_blank" href="https://mag.decofinder.com/">
                        <span className="lable">{translate("LE MAG")}</span>
                      </a>
                    </div>

                    <div className="header-action-icon-2">
                      <Link href="/new">
                        <a>
                          <span className="lable">
                            {translate("Nouveautés")}
                          </span>
                        </a>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link href="/liste-envies">
                        <a
                          style={{
                            fontSize: wishlist.length > 0 ? "40px" : "40px",
                          }}
                        >
                          {wishlist.length > 0 && "\u2764"}
                          {wishlist.length == 0 && "\u2661"}
                        </a>
                      </Link>
                      <Link href="/liste-envies">
                        <a>
                          <span>{wishlist.length}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? "header-bottom header-bottom-bg-color sticky-bar stick"
              : "header-bottom header-bottom-bg-color sticky-bar"
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <div
                    className={
                      isToggled
                        ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                        : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                    }
                  >
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    ></div>
                    <div className="more_categories">
                      <span className="icon"></span>{" "}
                      <span className="heading-sm-1">
                        {translate("Afficher plus")} ...
                      </span>
                    </div>
                  </div>
                </div>
                {/* ------------------------- maga menu pc begin ------------------------- */}
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                  <nav>
                    <ul>
                      {superuniverss.map((superunivers) => (
                        <li
                          className="position-static"
                          key={superunivers["id"]}
                        >
                          <Link
                            href={`/su${superunivers["id"]}/${superunivers["attributes"]["slug"]}`}
                            as={`/su/${superunivers["id"]}/${superunivers["attributes"]["slug"]}`}
                          >
                            <a>
                              {superunivers["attributes"]["LIB"]}
                              <i className="fi-rs-angle-down"></i>
                            </a>
                          </Link>
                          <ul className="mega-menu">
                            {superunivers["attributes"]["univers"]["data"].map(
                              (univers) => (
                                <li
                                  className="sub-mega-menu sub-mega-menu-width-22"
                                  key={univers["id"]}
                                >
                                  <Link
                                    href={`/u/${univers["id"]}/${univers["attributes"]["slug"]}`}
                                    as={`/u${univers["id"]}/${univers["attributes"]["slug"]}`}
                                  >
                                    <a className="menu-title" href="#">
                                      {univers["attributes"]["LIB"]}
                                    </a>
                                  </Link>
                                  <ul>
                                    {univers["attributes"]["categories"][
                                      "data"
                                    ].map((category) => (
                                      <li key={category["id"]}>
                                        <Link
                                          href={`/c/${category["id"]}/${category["attributes"]["slug"]}`}
                                          as={`/c${category["id"]}/${category["attributes"]["slug"]}`}
                                        >
                                          <a>{category["attributes"]["LIB"]}</a>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                {/* ------------------------- maga menu pc end ------------------------- */}
              </div>

              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/liste-envies">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count white">
                          {wishlist.length}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div
                      className="burger-icon burger-icon-white"
                      onClick={toggleClick}
                    >
                      <span className="burger-icon-top"></span>
                      <span className="burger-icon-mid"></span>
                      <span className="burger-icon-bottom"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
