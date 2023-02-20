import React, { useState } from "react"
import Head from "next/head"
import Breadcrumb from "./Breadcrumb"

     
const Layout = ({
    children,
    parent,
    sub,
    subChild,
    noBreadcrumb,
    headerStyle,
    translate,
    superuniverss,
    exposants
}) => {
    const [isToggled, setToggled] = useState(false)
    const toggleClick = () => {
        setToggled(!isToggled)
        isToggled
            ? document
                  .querySelector("body")
                  .classList.remove("mobile-menu-active")
            : document
                  .querySelector("body")
                  .classList.add("mobile-menu-active")
    }
    return (
        <>
            <Head>
                <title>Decofinder</title>
                <meta name="description" content="decofinder" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

 
            <main className="main">
                {children}
            </main>
        </>
    )
}

export default Layout
