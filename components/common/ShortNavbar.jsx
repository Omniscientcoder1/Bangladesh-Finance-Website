import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "/public/images/logo_small.png";

const ShortNavbar = () => {
  const [windowHeight, setWindowHeight] = useState(0);

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
      className={`header-section register login ${
        windowHeight > 50 && "header-fixed animated fadeInDown"
      }`}
    >
      <div className="overlay">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar d-flex justify-content-between navbar-expand-lg navbar-dark">
              <Link className="navbar-brand" href="/">
                <Image src={logo} className="logo" alt="logo" />
              </Link>
              {/* <div className="d-flex align-items-center justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">Don&#39;t have an account</li>
                </ul>
                <div className="right-area header-action d-flex align-items-center">
                  <Link href="/register" className="cmn-btn">
                    Register
                  </Link>
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShortNavbar;
