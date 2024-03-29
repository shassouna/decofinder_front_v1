import React, { useState } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({
  children,
  headerStyle,
  translate,
  superuniverss,
  bannieres,
  setShowSearchingPage,
  setShowFilteringPage,
}) => {
  const [isToggled, setToggled] = useState(false);

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled
      ? document.querySelector("body").classList.remove("mobile-menu-active")
      : document.querySelector("body").classList.add("mobile-menu-active");
  };
  return (
    <>
      <Head>
        <title>Decofinder</title>
        <meta name="description" content="decofinder" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <Header
        headerStyle={headerStyle}
        isToggled={isToggled}
        toggleClick={toggleClick}
        translate={translate}
        superuniverss={superuniverss}
        bannieres={bannieres}
        setShowSearchingPage={setShowSearchingPage}
        setShowFilteringPage={setShowFilteringPage}
      />
      <MobileMenu
        isToggled={isToggled}
        toggleClick={toggleClick}
        translate={translate}
        superuniverss={superuniverss}
      />
      <main className="main">{children}</main>
      <Footer translate={translate} />
    </>
  );
};

export default Layout;
