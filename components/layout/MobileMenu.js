import Link from "next/link"
import { useState } from "react"
import useClickOutside from "../../util/outsideClick"


const MobileMenu = ({ superuniverss, translate, isToggled, toggleClick }) => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        })
    })
    
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/logos/logo_df.jpg"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder={translate("Recherchez")}
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                {superuniverss.map((superunivers, index)=>(
                                    /* superunivers begin */
                                    <li
                                    key={superunivers["id"]}
                                    className={
                                        isActive.key == index
                                            ? "menu-item-has-children active"
                                            : "menu-item-has-children"
                                    }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>{superunivers["attributes"]["LIB"]}</a>
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == index
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                        {superunivers["attributes"]["univers"]["data"].map(univers=>(
                                            /* univers begin */
                                            <li key={univers["id"]} className="menu-item-has-children">
                                                <span className="menu-expand"></span>
                                                <Link href="#">
                                                    <a>{univers["attributes"]["LIB"]}</a>
                                                </Link>
                                                <ul className="dropdown">
                                                    {univers["attributes"]["categories"]["data"].map(category=>
                                                    <li key={category["id"]}>
                                                        <Link href="/shop-product-right">
                                                            <a>{category["attributes"]["LIB"]}</a>
                                                        </Link>
                                                    </li>
                                                    )}
                                                </ul>
                                            </li>
                                            /* univers end */
                                        ))}
                                        </ul>
                                    </li>
                                    /* superunivers end */
                                ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">{translate("Suivez-nous")}</h5>
                            <a href="https://www.facebook.com/decofinder">
                                <img
                                    src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="https://twitter.com/decofinder">
                                <img
                                    src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.instagram.com/decofinder/">
                                <img
                                    src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.pinterest.fr/decofinder/">
                                <img
                                    src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                    alt=""
                                />
                            </a>
                            <a href="https://www.youtube.com/@decofinder">
                                <img
                                    src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
