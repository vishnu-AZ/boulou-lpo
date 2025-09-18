import { Link } from "react-router-dom";
import "swiper/css"; // Core Swiper styles
import "swiper/css/autoplay";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import baner from "../../public/assets/img/home-page/baner.jpg";
import about from "../../public/assets/img/home-page/about.jpg";
import right from "../../public/assets/img/icons/right_arrow.svg";
import icons6 from "../../public/assets/img/lpo-icons/6.png";
import icons18 from "../../public/assets/img/lpo-icons/18.png";
import icons17 from "../../public/assets/img/lpo-icons/17.png";
import icons14 from "../../public/assets/img/lpo-icons/14.png";
import icons15 from "../../public/assets/img/lpo-icons/15.png";
import icons8 from "../../public/assets/img/lpo-icons/8.png";
import h2_project_img01 from "../../public/assets/img/project/h2_project_img01.jpg";
import h2_project_img02 from "../../public/assets/img/project/h2_project_img02.jpg";
import h2_project_img03 from "../../public/assets/img/project/h2_project_img03.jpg";
import h2_project_img04 from "../../public/assets/img/project/h2_project_img04.jpg";
import project_item_shape from "../../public/assets/img/project/project_item_shape.svg";
import whychoose from "../../public/assets/img/whychoose.jpg";
import h2_cta_shape from "../../public/assets/img/images/h2_cta_shape.svg";
import vedio from "../assets/kk.mp4";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Trusted Legal Process Outsourcing Partner | Boulou LPO</title>
        <meta
          name="description"
          content="Partner with Boulou LPO for reliable legal process outsourcing. 
        We help law firms & attorneys with contract lifecycle management, paralegal services & document review.
"
        />
      </Helmet>
      <section className="banner__area-two fix">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="banner__img-two">
                <div className="main-img">
                  <img src={baner} alt="img" />
                </div>

                <div className="shape-wrap">
                  <img className="rightToLeft" />

                  <img className="alltuchtopdown" />
                  <img data-aos="fade-right" data-aos-delay="400" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner__content-two">
                <h2 className="title" data-aos="fade-up" data-aos-delay="0">
                  Reliable Legal Process Outsourcing for Law Firms & Attorneys
                </h2>
                <p data-aos="fade-right" data-aos-delay="400">
                  Whether English-speaking or bilingual support, Boulou LPO
                  delivers expert legal asistance to boost efficiency and keep
                  your workflow running smoothly.
                </p>
                <a
                  href="https://outlook.office365.com/book/BoulouLPOClientBookings@bouloublue.com/?ismsaljsauthenabled=true"
                  className="tg-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="about__img-wrap-two">
                <img src={about} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-two">
                <div className="section__title mb-10">
                  <span className="sub-title">About us</span>
                  <h2 className="title">
                    Your Legal Process Outsourcing Partner for Seamless Support
                  </h2>
                </div>
                <p>
                  At Boulou LPO, we deliver reliable, high-quality legal support
                  to law firms, legal departments, and legal professionals
                  worldwide. With a skilled team fluent in English, French, and
                  Spanish, we ensure clear, confident communication across
                  languages, giving your firm a competitive edge in serving
                  diverse clients.
                </p>

                <a href="/about" className="tg-btn">
                  Know More
                  <img src={right} alt="arrow" className="injectable" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <span className="sub-title">Roles</span>
                <h2 className="title">
                  Skilled Legal Support <br /> for Law Firms & Attorneys
                </h2>
                <p>
                  Flexible legal support! Contract or full-time professionals
                  fluent in English, French, and Spanish, to streamline your
                  legal operations.
                </p>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30 justify-content-center home-page-icon-img">
            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons6} alt="img" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Case-Coordinator">Case Coordinator</Link>
                    </h4>
                    <p>
                      Efficiently manages documentation, deadlines, and case
                      progression while bridging communication between teams.
                    </p>
                  </div>
                </div>
                <Link to="/Case-Coordinator" className="tg-btn tg-btn-two">
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons18} alt="img" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Case-Manager">Case Manager</Link>
                    </h4>
                    <p>
                      Oversees the legal process, client interactions, and case
                      development with bilingual expertise.
                    </p>
                  </div>
                </div>
                <Link to="/Case-Manager" className="tg-btn tg-btn-two">
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons17} alt="" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Paralegal-Role">Paralegal</Link>
                    </h4>
                    <p>
                      Provides legal research, document drafting, and
                      administrative support to attorneys.
                    </p>
                  </div>
                </div>
                <Link to="/Paralegal-Role" className="tg-btn tg-btn-two">
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons14} alt="" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Secretary-Receptionist">
                        Secretary / Receptionist
                      </Link>
                    </h4>
                    <p>
                      Manages client calls, schedules, and correspondence
                      ensuring smooth office communication.
                    </p>
                  </div>
                </div>
                <Link
                  to="/Secretary-Receptionist"
                  className="tg-btn tg-btn-two"
                >
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons15} alt="" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Legal-Admin">Legal Admin</Link>
                    </h4>
                    <p>
                      Handles day-to-day legal admin tasks including case file
                      Management, data entry, and compliance.
                    </p>
                  </div>
                </div>
                <Link to="/Legal-Admin" className="tg-btn tg-btn-two">
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two home-rols-card">
                <div className="roles-card">
                  <div className="services__icon-two">
                    <img src={icons8} alt="" />
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <Link to="/Intake-Specialist">Intake Specialist</Link>
                    </h4>
                    <p>
                      First point of contact for new clients—collecting and
                      verifying legal case information.
                    </p>
                  </div>
                </div>
                <Link to="/Intake-Specialist" className="tg-btn tg-btn-two">
                  Read More
                  <img
                    src={right}
                    alt=""
                    className="injectable home-rols-readmore-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project__area-two section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section__title text-center mb-50">
                <span className="sub-title"> Services</span>
                <h2 className="title">
                  Comprehensive Legal Support Tailored to Your Needs
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30">
            {/* Paralegal */}
            <div className="col-lg-4 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <Link to="/paralegal-service">
                    <img src={h2_project_img01} alt="img" />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/paralegal-service">Paralegal</Link>
                  </h2>
                  <span>
                    Supports attorneys with legal research, documentation, and
                    drafting to streamline the legal process.
                  </span>
                  <Link to="/paralegal-service">
                    <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
                <div className="shape">
                  <img src={project_item_shape} alt="shape" />
                </div>
              </div>
            </div>

            {/* Contract Life Cycle */}
            <div className="col-lg-8 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <Link to="/contract-life-cycle-management">
                    <img src={h2_project_img02} alt="img" />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/contract-life-cycle-management">
                      Contract Life Cycle Management
                    </Link>
                  </h2>
                  <span>
                    End-to-end management of contracts from creation to <br />
                    execution, ensuring compliance and efficiency.
                  </span>
                  <Link to="/contract-life-cycle-management">
                    <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
                <div className="shape">
                  <img src={project_item_shape} alt="shape" />
                </div>
              </div>
            </div>

            {/* Document Review */}
            <div className="col-lg-6 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <Link to="/document-review">
                    <img src={h2_project_img03} alt="img" />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/document-review">Document Review</Link>
                  </h2>
                  <span>
                    Detailed analysis and verification of legal documents to
                    identify risks, gaps, and required changes.
                  </span>
                  <Link to="/document-review">
                    <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
                <div className="shape">
                  <img src={project_item_shape} alt="shape" />
                </div>
              </div>
            </div>

            {/* Admin Supports */}
            <div className="col-lg-6 col-md-6">
              <div className="project__item-two">
                <div className="project__thumb-two">
                  <Link to="/admin-supports">
                    <img src={h2_project_img04} alt="img" />
                  </Link>
                </div>
                <div className="project__content-two">
                  <h2 className="title">
                    <Link to="/admin-supports">Admin Supports</Link>
                  </h2>
                  <span>
                    Administrative assistance to legal teams including calendar
                    management, data entry, and reporting tasks.
                  </span>
                  <Link to="/admin-supports">
                    <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
                <div className="shape">
                  <img src={project_item_shape} alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="testimonial__area-three section-py-130 pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6">
              <div class="section__title text-center mb-40">
                <span class="sub-title">Our Testimonials</span>
                <h2 class="title">We are very glad to get client review</h2>
              </div>
            </div>
          </div>
          <div class="row gy-4">
            <div class="col-md-6">
              <div class="testimonial__item-three">
                <div class="testimonial__content-two">
                  <div class="testimonial__content-top">
                    <div class="testimonial__author">
                      <div class="thumb">
                        <img
                          src="assets/img/images/testi_avatar04.png"
                          alt="img"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">Mr.Robey Alexa</h3>
                        <span>CEO, Xara Agency</span>
                      </div>
                    </div>
                    <div class="testimonial__rating-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <p>
                    “Morem ipsum dolor sit amconsectetur adipiscing elitaaey um
                    dolor sitter amet consect eturellam eu neque esacili
                    facilisis vitae massa. Quisque ”
                  </p>
                </div>
                <div class="testimonial__icon-three">
                  <img
                    src="assets/img/icons/quote02.svg"
                    alt="icon"
                    class="injectable"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="testimonial__item-three">
                <div class="testimonial__content-two">
                  <div class="testimonial__content-top">
                    <div class="testimonial__author">
                      <div class="thumb">
                        <img
                          src="assets/img/images/testi_avatar02.png"
                          alt="img"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">Savannah Nguyen</h3>
                        <span>CEO, Xara Agency</span>
                      </div>
                    </div>
                    <div class="testimonial__rating-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <p>
                    “Morem ipsum dolor sit amconsectetur adipiscing elitaaey um
                    dolor sitter amet consect eturellam eu neque esacili
                    facilisis vitae massa. Quisque ”
                  </p>
                </div>
                <div class="testimonial__icon-three">
                  <img
                    src="assets/img/icons/quote02.svg"
                    alt="icon"
                    class="injectable"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="testimonial__item-three">
                <div class="testimonial__content-two">
                  <div class="testimonial__content-top">
                    <div class="testimonial__author">
                      <div class="thumb">
                        <img
                          src="assets/img/images/testi_avatar03.png"
                          alt="img"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">Wade Warren</h3>
                        <span>CEO, Xara Agency</span>
                      </div>
                    </div>
                    <div class="testimonial__rating-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <p>
                    “Morem ipsum dolor sit amconsectetur adipiscing elitaaey um
                    dolor sitter amet consect eturellam eu neque esacili
                    facilisis vitae massa. Quisque ”
                  </p>
                </div>
                <div class="testimonial__icon-three">
                  <img
                    src="assets/img/icons/quote02.svg"
                    alt="icon"
                    class="injectable"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="testimonial__item-three">
                <div class="testimonial__content-two">
                  <div class="testimonial__content-top">
                    <div class="testimonial__author">
                      <div class="thumb">
                        <img
                          src="assets/img/images/testi_avatar01.png"
                          alt="img"
                        />
                      </div>
                      <div class="content">
                        <h3 class="title">Courtney Henry</h3>
                        <span>CEO, Xara Agency</span>
                      </div>
                    </div>
                    <div class="testimonial__rating-two">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <p>
                    “Morem ipsum dolor sit amconsectetur adipiscing elitaaey um
                    dolor sitter amet consect eturellam eu neque esacili
                    facilisis vitae massa. Quisque ”
                  </p>
                </div>
                <div class="testimonial__icon-three">
                  <img
                    src="assets/img/icons/quote02.svg"
                    alt="icon"
                    class="injectable"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="counter__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="choose__img-two" style={{ position: "relative" }}>
                <img src={whychoose} alt="img" style={{ width: "100%" }} />
                <button
                  className="play-btn"
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "white",
                    borderRadius: "50%",
                    border: "none",
                    padding: "20px",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="28"
                    viewBox="0 0 22 28"
                    fill="black"
                  >
                    <path
                      d="M0 2.66333C0 1.081 1.75049 0.125316 3.08152 0.980974L20.7163 12.3176C21.941 13.1049 21.941 14.8951 20.7163 15.6824L3.08152 27.019C1.7505 27.8747 0 26.919 0 25.3367V2.66333Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <Popup
                  open={open}
                  onClose={() => setOpen(false)}
                  modal
                  closeOnDocumentClick
                >
                  <div className="video-popup-container">
                    <video
                      controls
                      autoPlay
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    >
                      <source src={vedio} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Popup>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content-two">
                <div className="section__title mb-10">
                  <span className="sub-title">Why Choose Us</span>
                  <h2 className="title">
                    Trusted Legal Support Built on Accuracy & Efficiency
                  </h2>
                </div>

                <div className="about__inner-wrap-two mb-3">
                  <ul className="list-wrap about__list-item-two">
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M12.091 2L5.091 9L1.90918 5.81818"
                            stroke="currentColor"
                            stroke-width="2.1875"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Bilingual Legal Professionals (EN–FR / EN–ES)
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M12.091 2L5.091 9L1.90918 5.81818"
                            stroke="currentColor"
                            stroke-width="2.1875"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Contract-Based & Full-Time Role Options
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M12.091 2L5.091 9L1.90918 5.81818"
                            stroke="currentColor"
                            stroke-width="2.1875"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Proven Track Record in Legal Process Outsourcing
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M12.091 2L5.091 9L1.90918 5.81818"
                            stroke="currentColor"
                            stroke-width="2.1875"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      Dedicated Support Team for Seamless Case Handling
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="tg-btn">
                  Contact With Us
                  <img src={right} alt="" className="injectable" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta__area-two section-py-130 pt-0">
        <div className="container">
          <div className="cta__inner-wrap-two">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta__content-three">
                  <h2 className="title">
                    Click to get a free Consultation Now
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta__content-right">
                  <div className="cta__contact">
                    <div className="icon">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <div className="content">
                      <a href="tel:1 (561) 409-5858">1 (561) 409-5858</a>
                    </div>
                  </div>
                  <a
                    href="tel:1 (561) 409-5858"
                    className="tg-btn tg-border-btn "
                  >
                    Call Now <img src={right} alt="" className="injectable" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cta__shape-three">
              <img src={h2_cta_shape} alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
