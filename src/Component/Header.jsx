import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/boulo-ipo-logo.png";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="transparent-header desktop-header">
        <div id="header-fixed-height"></div>
        <div
          id="sticky-header"
          className={`tg-header__area tg-header__area-two ${isSticky ? "sticky" : ""
            }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="Main Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/internalguide">Practice Areas</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/roles">Roles</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/Case-Coordinator">
                                Case Co-Ordinator
                              </Link>
                            </li>
                            <li>
                              <Link to="/Case-Manager">Case Manager</Link>
                            </li>
                            <li>
                              <Link to="/Paralegal-Role">Paralegal</Link>
                            </li>
                            <li>
                              <Link to="/Secretary-Receptionist">
                                Secretary / Receptionist
                              </Link>
                            </li>
                            <li>
                              <Link to="/Legal-Admin">Legal Admin</Link>
                            </li>
                            <li>
                              <Link to="/Intake-Specialist">
                                Intake Specialist
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/service">Services</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/paralegal-service">
                                Paralegal Service
                              </Link>
                            </li>
                            <li>
                              <Link to="/contract-life-cycle-management">
                                Contract Life Cycle Management
                              </Link>
                            </li>
                            <li>
                              <Link to="/document-review">Document Review</Link>
                            </li>
                            <li>
                              <Link to="/admin-supports">Admin Supports</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/Blog">Blogs</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action tgmenu__action-two">
                      <ul className="list-wrap">
                        <li className="header-btn header-btn-two">
                          <Link to="/contact" className="tg-btn">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler">
                      <i className="tg-flaticon-menu"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="tgmobile__menu">
          <nav className="tgmobile__menu-box">
            <div className="close-btn">
              <i className="tg-flaticon-close-1"></i>
            </div>
            <div className="nav-logo">
              <Link to="/">
                <img src="assets/img/logo/logo.svg" alt="Mobile Logo" />
              </Link>
            </div>
            <div className="tgmobile__search">
              <form action="#">
                <input type="text" placeholder="Search here..." />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div className="tgmobile__menu-outer">
              {/* Inject mobile menu via JavaScript if needed */}
            </div>
            <div className="social-links">
              <ul className="list-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="tgmobile__menu-backdrop"></div>
      </header>
    </>
  );
};

export default Header;
