import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { navData } from "./navData";
import Logo from "/public/images/logo_resized.png";

const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const menus = useRef();

  const hidenMenu = () => {
    menus.current.classList.remove("show");
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section ${
        windowHeight > 50 && "header-fixed animated fadeInDown"
      }`}
    >
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" href="/" onClick={hidenMenu}>
                <Image src={Logo} className="logo" alt="logo" />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-content"
              >
                <i>
                  <FaBars />
                </i>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
                ref={menus}
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                    return !dropdown ? (
                      <li key={id} className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          href={url}
                          onClick={hidenMenu}
                        >
                          {itm}
                        </Link>
                      </li>
                    ) : (
                      <li key={id} className="nav-item dropdown main-navbar">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="/"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                        >
                          {itm}
                        </Link>
                        <ul className="dropdown-menu main-menu shadow">
                          {dropdown_itms?.map(
                            ({ id, dp_itm, url, target, sbu_dropdown, sub_items }) =>
                              !sbu_dropdown ? (
                                <li key={id}>
                                  <Link
                                    className="nav-link"
                                    href={url}
                                    onClick={hidenMenu}
                                    target={target || "_self"}
                                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                                  >
                                    {dp_itm}
                                  </Link>
                                </li>
                              ) : (
                                <li key={id} className="dropend sub-navbar">
                                  <Link
                                    href="/"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                  >
                                    {dp_itm}
                                  </Link>
                                  <ul className="dropdown-menu sub-menu shadow">
                                    {sub_items?.map(({ id, url, sub_itm }) => (
                                      <li key={id}>
                                        <Link
                                          className="nav-link"
                                          href={url}
                                          onClick={hidenMenu}
                                        >
                                          {sub_itm}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

