import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import about2 from "../../public/assets/img/home-page/about2.jpg";
import about3 from "../../public/assets/img/home-page/about3.jpg";
import services10 from "../../public/assets/img/bg/h10_services_bg.jpg";
import service1 from "../../public/assets/img/services/services_img01.jpg";
import services_img02 from "../../public/assets/img/services/services_img02.jpg";
import services_img03 from "../../public/assets/img/services/services_img03.jpg";
import services_img04 from "../../public/assets/img/services/services_img04.jpg";
import about4 from "../../public/assets/img/home-page/about4.jpg";
import right from "../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../public/assets/img/images/h2_cta_shape.svg";
import Faq from "./Accordain";

const About = () => {
  return (
    <div style={{overflow: "hidden"}}>
      <Helmet>
        <title>About Bouloulpo| U.S.-Based Legal Support Firm</title>
        <meta
          name="description"
          content="Learn about Bouloulpo, your U.S.-based boutique legal support partner offering trusted paralegal, CLM, document review, and admin services for law firms."
        />
      </Helmet>
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">About Us</h2>
                  <p>Your Trusted Partner in Legal Process Outsourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="history__area-six section-py-130">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-8">
              <div class="history__img-wrap-six">
                <img src={about2} alt="BoulouLPO Office" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="history__content-six">
                <div class="section__title mb-20">
                  <span class="sub-title">Who We Are</span>
                  <h2 class="title">
                    Empowering Legal Teams with Trusted Outsourcing Solutions
                  </h2>
                </div>
                <div class="history__content-inner-three mb-25">
                  <div class="content__left">
                    <p class="info-two">
                      Boulou LPO is a team of passionate legal professionals
                      committed to providing high-quality legal process
                      outsourcing services. With a strong foundation in legal
                      operations. We serve law firms, solo attorneys, and
                      corporate legal departments with unmatched flexibility and
                      confidentiality.
                    </p>
                    <ul class="list-wrap about__list-item">
                      <li>
                        <div class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                          >
                            <path
                              d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                              stroke="currentColor"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        Multilingual Legal Process Outsourcing
                      </li>
                      <li>
                        <div class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                          >
                            <path
                              d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                              stroke="currentColor"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        Trusted by Legal Teams Across North America
                      </li>
                      <li>
                        <div class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                          >
                            <path
                              d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                              stroke="currentColor"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        Scalable, Confidential, and Cost-Effective Solutions
                      </li>
                    </ul>
                  </div>
                  <div class="history__inner-img">
                    <img src={about3} alt="Legal Team Experience" />
                    <div class="experience__wrap-five">
                      <h2 class="count">5</h2>
                      <span>
                        Years of <br />
                        Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services__area section-py-130 pt-0">
        <div class="container">
          <div class="row gutter-y-30 justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="services__item-two">
                <div class="services__icon-two">
                  <i class="flaticon-analytics"></i>
                </div>
                <div class="services__content-two">
                  <h4 class="title">
                    <a href="#">Our Mission</a>
                  </h4>
                  <p>
                    Boulou LPO delivers cost-effective, multilingual paralegal
                    support to help law firms scale, serve diverse clients, and
                    uphold top legal standards.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="services__item-two">
                <div class="services__icon-two">
                  <i class="flaticon-envelope-1"></i>
                </div>
                <div class="services__content-two">
                  <h4 class="title">
                    <a href="#">Our Vision</a>
                  </h4>
                  <p>
                    To become a global leader in legal process outsourcing by
                    consistently delivering trusted, multilingual, and
                    high-quality legal support.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="services__item-two">
                <div class="services__icon-two">
                  <i class="flaticon-report"></i>
                </div>
                <div class="services__content-two">
                  <h4 class="title">
                    <a href="#">Our Core Values</a>
                  </h4>
                  <p>
                    Integrity, confidentiality, accountability, and a relentless
                    commitment to client success define everything we do at
                    BoulouLPO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="services__area-ten services__bg-five section-py-130 pt-0"
        data-background={services10}
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="section__title text-center mb-40">
                <span class="sub-title">How We Work</span>
                <h2 class="title">
                  Seamless Legal Process Outsourcing From Start to Finish
                </h2>
                <p>
                  Our process is designed for simplicity and efficiency. From
                  initial consultation to onboarding and daily collaboration,{" "}
                  <br />
                  BoulouLPO ensures your legal operations run smoothly with
                  reliable bilingual support and full transparency.
                </p>
              </div>
            </div>
          </div>
          <div class="row gutter-y-24">
            <div class="col-lg-6">
                <div class="services__item-eleven shine__animate-item">
                <div class="services__thumb-eleven shine__animate-link">
                  <a >
                    <img src={services_img04} alt="Ongoing Support" />
                  </a>
                  <div class="services__icon-eight">1</div>
                </div>
                <div class="services__content-eleven">
                  <h2 class="title">
                    <a >Ongoing Legal Support</a>
                  </h2>
                  <p>
                    Benefit from continuous legal assistance, transparent
                    communication, and role flexibility as your needs evolve.
                  </p>
                </div>
              </div>
              
            </div>

            <div class="col-lg-6">
              <div class="services__item-eleven shine__animate-item">
                <div class="services__thumb-eleven shine__animate-link">
                  <a >
                    <img src={services_img02} alt="Match Professionals" />
                  </a>
                  <div class="services__icon-eight">2</div>
                </div>
                <div class="services__content-eleven">
                  <h2 class="title">
                    <a >Get Matched with Legal Professionals</a>
                  </h2>
                  <p>
                    We assign bilingual case managers, paralegals, or support
                    staff based on your required roles and language preference.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="services__item-eleven shine__animate-item">
                <div class="services__thumb-eleven shine__animate-link">
                  <a >
                    <img src={services_img03} alt="Onboarding" />
                  </a>
                  <div class="services__icon-eight">3</div>
                </div>
                <div class="services__content-eleven">
                  <h2 class="title">
                    <a >Smooth Onboarding & Integration</a>
                  </h2>
                  <p>
                    Our team quickly integrates with your systems and workflow,
                    ensuring seamless communication and collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
            <div class="services__item-eleven shine__animate-item">
                <div class="services__thumb-eleven shine__animate-link">
                  <a >
                    <img src={service1} alt="Consultation" />
                  </a>
                  <div class="services__icon-eight">4</div>
                </div>
                <div class="services__content-eleven">
                  <h2 class="title">
                    <a >Free Consultation</a>
                  </h2>
                  <p>
                    Begin with a detailed consultation to understand your legal
                    support needs and identify the right solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="choose__area-five section-py-130 pt-0">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-7 col-md-9 order-0 order-lg-2">
              <div class="choose__img-wrap-four">
                <img
                  src={about4}
                  alt="img"
                  data-aos="fade-left"
                  data-aos-delay="200"
                />

                <div
                  class="chart__wrap"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div class="content">
                    <span>Success Rate</span>
                    <h2 class="count">100%</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="choose__content-five">
                <div class="section__title mb-15">
                  <span class="sub-title">Why Choose Us</span>
                  <h2 class="title">Reliable Legal Support You Can Trust</h2>
                </div>
                <p>
                  At BoulouLPO, we deliver multilingual legal services with
                  precision, confidentiality, and dedication—empowering law
                  firms and legal departments across the globe.
                </p>
                <ul class="list-wrap about__list-item">
                  <li>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Multilingual Legal Expertise (English, French, Spanish)
                  </li>
                  <li>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Contract-Based & Full-Time Support Options
                  </li>
                  <li>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Trusted by Law Firms Across North America
                  </li>
                  <li>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Scalable Solutions for Solo, Mid, and Large Firms
                  </li>
                  <li>
                    <div class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Strong Focus on Confidentiality & Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="faq__area-three section-py-130 pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section__title text-center mb-50">
                <span class="sub-title">FREQUENTLY ASKED QUESTIONS</span>
                <h2 class="title">Got any questions?</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12">
              <div class="faq__wrap faq__wrap-three">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What services does BoulouLPO provide?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          We offer bilingual legal process outsourcing services
                          including legal research, drafting, document review,
                          paralegal assistance, and administrative legal support
                          for law firms and corporate legal departments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What languages do you support?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          Our team provides services in English, French, and
                          Spanish, allowing law firms to operate smoothly in
                          multiple jurisdictions and across bilingual markets.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do I get started with your services?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          You can begin with a free consultation through our
                          website or contact page. Once we understand your
                          needs, we’ll prepare a proposal and begin onboarding
                          your team.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Is your team qualified in legal processes?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          Yes. Our legal professionals are trained in global
                          legal systems and have prior experience working with
                          international law firms, ensuring quality and accuracy
                          in every task.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can BoulouLPO handle confidential data securely?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          Absolutely. We follow strict data privacy protocols
                          and confidentiality agreements to ensure your
                          sensitive legal information is always protected.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Do you offer full-time and contract-based support?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          Yes. We provide flexible engagement models, including
                          full-time dedicated legal assistants or contract-based
                          teams based on your firm’s needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      <Faq/>

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
                    Call Now{" "}
                    <img src={right} alt="right" className="injectable" />
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
    </div>
  );
};

export default About;
