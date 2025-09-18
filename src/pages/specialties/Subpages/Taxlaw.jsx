import React from "react";
import lpoinc from "../../../../public/assets/lpo1/incre.jpg";
import topinc from "../../../../public/assets/lpo1/AccesstheTop1.jpg";
import cxxinc from "../../../../public/assets/lpo1/ttt.jpg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import tax from "../../../../public/assets/lpo/tax-law.png";
import taximg from "../../../../public/assets/img/special/Tax.jpg";

const Taxlaw = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Precision and Strategic Solutions
              </div>
              <h1 className="hero-title">Tax Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for tax law
                attorneys and firms, ensuring accurate preparation, research,
                and filing of complex tax documents. From compliance to
                litigation support, we help your practice manage deadlines,
                minimize risk, and focus on delivering strategic solutions to
                clients.
              </p>
            
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={tax} alt="Tax Law" />
                
              </div>
             
            </div>
          </div>
        </div>
      </section>
    {/* SERVICES */}
      <section className="features__area-two section-py-130 pt-0">
        <div className="container">
                    <h2  className="text-center pb-5" style={{ fontSize: "40px", color: "#002688" }}>Types of Services We Offer</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src={taximg} alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  
                  <h2>Expert Tax Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive tax law
                    assistance, including:
                  </p>
                </div>
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Preparing and reviewing tax returns, filings, and
                    documentation
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Drafting correspondence for audits, disputes, and appeals
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Conducting legal research on tax statutes, regulations, and
                    case law
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Organizing financial records and supporting documentation
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Coordinating with clients, accountants, and government
                    agencies
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
                          strokeWidth="2.1875"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    Managing deadlines, compliance, and reporting requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TRANSFORM SECTION */}
      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform <br /> Your Tax Law Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Accurate, Timely Support for Complex Tax Matters
              </h6>
              <p className="transform-description text-muted">
                Tax law requires precision, organization, and strict adherence
                to deadlines. Our team handles document preparation, research,
                and filing tasks efficiently, allowing attorneys to focus on
                advising clients, resolving disputes, and implementing tax
                strategies. This reduces errors, prevents delays, and
                strengthens client trust.
              </p>
            </div>

            {/* Cards */}
            <div className="col-lg-12">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={lpoinc}
                      className="transform-card-img"
                      alt="Increase Profitability"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Increase Profitability</h5>
                      <p>
                       We streamline tax document review and case preparation, helping law firms reduce overhead and handle more matters efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card" >
                    <img
                      src={topinc}
                      className="transform-card-img"
                      alt="Access the Top 1%"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Access the Top 1%</h5>
                      <p>
                       Our skilled support teams provide specialized tax expertise, allowing firms to leverage high-level knowledge without expanding in-house staff.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12" style={{ minHeight: '400px' }}>
                  <div className="transform-card">
                    <img
                      src={cxxinc}
                      className="transform-card-img"
                      alt="Save Time"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Save Time</h5>
                      <p>
                        From research and compliance checks to organized document management, we handle the back-office work so attorneys can focus on client strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATEMENT */}
    

      {/* WHY CHOOSE */}
      <section className="features__area-three section-py-130 pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section__title text-center mb-40">
                <h2 className="title">Why Choose Boulou LPO?</h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-24 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-partner"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Skilled, Scalable Support</h3>
                  <p>
                    Paralegals experienced in tax filings, audits, and dispute
                    resolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-health-insurance"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Bilingual Capabilities</h3>
                  <p>
                    Effective communication with English and Spanish-speaking
                    clients, agencies, and stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-tax"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Industry-Focused Expertise</h3>
                  <p>Knowledge of federal, state, and local tax laws.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-report"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Confidential & Compliant</h3>
                  <p>
                    Secure handling of sensitive financial and client
                    information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="features__item-two">
                <div className="features__icon-two">
                  <i className="flaticon-calculator"></i>
                </div>
                <div className="features__content-four">
                  <h3 className="title">Cost-Effective Partnership</h3>
                  <p>
                    Professional support without the overhead of in-house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <div className="sub-page-baner pb-5" style={{ marginTop: "0px" }}>
        <div className="container">
          <section className="banner__area-five">
            <div className="container custom-container-five">
              <div
                className="banner__bg-foura"
                style={{
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg)",
                }}
              >
                <div
                  className="banner__bg-shape"
                  style={{
                    backgroundImage:
                      "url(assets/img/banner/h8_hero_bg_shape.svg)",
                  }}
                ></div>
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div
                      className="banner__content-five"
                      style={{ padding: "30px" }}
                    >
                      <h2 className="title">Reliable Paralegal Support for Every Tax Matter</h2>
                      
                      <p>
                        Boulou LPO ensures your tax law cases and filings are
                        handled with accuracy, compliance, and efficiency. We
                        help your firm meet deadlines, manage complex
                        documentation, and deliver high quality service that
                        keeps clients confident and satisfied.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  

      {/* CTA */}
      <section className="cta__area-two section-py-130 pt-5">
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
                    className="tg-btn tg-border-btn"
                  >
                    Call Now{" "}
                    <img
                      src={right}
                      alt=""
                      className="injectable"
                    />
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

export default Taxlaw;
