import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../assets/img/boulo-ipo-logo.png";
import es1 from "../assets/img/facebook.svg";
import es2 from "../assets/img/twitter.svg";
import es3 from "../assets/img/instagram.svg";
import es4 from "../assets/img/linkedin-black.svg";
import BackToTopButton from "./BackTop";

const Footer = () => {
  return (
    <>
      <footer className="footer__area-three fix">
        <div className="container">
          <div className="footer__top-two footer__top-three">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Follow us On:</h4>
                  <div className="footer__content-two">
                    <div className="footer__social footer__social-three">
                      <ul className="list-wrap">
                        <li>
                          <a
                            href="https://www.facebook.com/BoulouLPO"
                            target="_blank"
                          >
                            <img
                             src={es1}
                              
                              alt=""
                              className="injectable footer-social facebook-icon"
                            />
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a href="https://x.com/BoulouLpo" target="_blank">
                            <img
                             src={es2}
                              alt=""
                              className="injectable footer-social"
                            />
                           X (Twitter)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/bouloulpo/"
                            target="_blank"
                          >
                            <img
                             src={es3}
                              alt=""
                              className="injectable footer-social"
                            />
                            Instagram
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/boulou-lpo/"
                            target="_blank"
                          >
                            <img
                             src={es4}
                              alt=""
                              className="injectable footer-social"
                            />
                            Linkedin
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Quick Links</h4>
                  <ul className="footer__widget-link list-wrap">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/internalguide">Practice Areas</Link>
                    </li>

                    <li>
                      <Link to="/roles">Roles</Link>
                    </li>
                    

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/Career">Careers</Link>
                    </li>
                    <li>
                      <Link to="/privacypolicy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Contact</h4>
                  <div className="footer__contact-two">
                    <ul className="list-wrap">
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <a href="#">
                        11-13 Westminster Road, Kingston 10, Jamaica.
                        </a>
                      </li>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <a href="#">
                          4400 N Federal Hwy Suite 8, Boca Raton, FL 33431, USA.
                        </a>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:paralegalservices@bouloulpo.com">
                          paralegalservices@bouloulpo.com
                        </a>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume"></i>
                        <a href="tel:1-561-409-5858"> 1-561-409-5858</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-three">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="footer__bottom-logo">
                  <a className="footer-logo">
                    <img src={footerlogo} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright__content-three">
                  <p>Copyright © Boulou LPO | All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BackToTopButton/>
    </>
  );
};

export default Footer;
