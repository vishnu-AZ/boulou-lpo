import React from "react";
import insurance from "../../../../public/assets/lpo/insurance-law.png";
import lemon from "../../../../public/assets/img/newimage/Lemon Law.jpg";
import lpoinc from "../../../../public/assets/lpo1/case.jpg";
import topinc from "../../../../public/assets/lpo1/clami.jpg";
import cxxinc from "../../../../public/assets/lpo1/cvvvv.jpg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";

const LemonLaw = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Expert Lemon Law Paralegal Support
              </div>
              <h1 className="hero-title">Lemon Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for lemon
                law attorneys, ensuring claims, documentation, and filings are
                handled accurately and efficiently. From client intake to
                settlement preparation, we help attorneys manage the detailed
                work involved in protecting consumers’ rights while staying
                organized and meeting deadlines.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={lemon} alt="Lawyer" />
                {/* Floating Images */}
                
              </div>
              
            </div>
          </div>
        </div>
      </section>

        <section class="features__area-two section-py-130 pt-0">
        <div class="container">
         <h2  className="text-center pb-5" style={{ fontSize: "40px", color: "#002688" }}>Types of Services We Offer</h2>
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-10 order-0 order-lg-2">
              <div class="features__img">
                <img src={insurance} alt="img" />
              </div>
            </div>
            <div class="col-lg-7 col-md-10  ">
              <div class="features__content-two">
                <div class="section__title mb-25">
                  <span class="sub-title">Types of Services We Offer </span>
                  <h2>Expert Lemon Law Paralegal Support </h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive lemon
                    law assistance, including:
                  </p>
                </div>

                <ul class="list-wrap about__list-item-two">
                  <li>
                    <div class="icon">
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
                    Conducting client intake and case evaluation
                  </li>
                  <li>
                    <div class="icon">
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
                    Drafting demand letters, complaints, and settlement
                    documents
                  </li>
                  <li>
                    <div class="icon">
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
                    Organizing repair records, warranties, and supporting
                    documentation
                  </li>
                  <li>
                    <div class="icon">
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
                    Coordinating communications with clients, manufacturers, and
                    dealerships
                  </li>
                  <li>
                    <div class="icon">
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
                    Tracking deadlines and filing requirements for claims and
                    court actions
                  </li>
                  <li>
                    <div class="icon">
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
                    Conducting legal research on state lemon laws and case
                    precedents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform Your Lemon Law Practice{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Case Management for Consumer Protection
              </h6>
              <p className="transform-description text-muted">
                Lemon law cases involve meticulous documentation, deadlines, and
                negotiation with manufacturers. Our team manages administrative
                and paralegal tasks so attorneys can focus on client advocacy,
                case strategy, and settlements. This ensures cases move
                efficiently and clients receive timely, professional service.
              </p>
            </div>

            {/* RIGHT: Image Cards */}
            <div className="col-lg-12">
              <div className="row g-4">
                {/* Card 1 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={lpoinc}
                      className="transform-card-img"
                      alt="Lemon Law Vehicle Protection"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                    Case Documentation & Review
                      </h5>
                      <p>
                       We help law firms organize repair records, warranties, and purchase agreements, ensuring all documentation is accurate and comprehensive.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={topinc}
                      className="transform-card-img"
                      alt="Fighting Warranty Disputes"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                       Claim Support & Analysis
                      </h5>
                      <p>
                        Our teams provide detailed case summaries, evidence tracking, and reporting to assist attorneys in evaluating and managing lemon law claims efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (full width below) */}
                <div className="col-12">
                  <div className="transform-card"  style={{ minHeight: '400px' }}>
                    <img
                      src={cxxinc}
                      className="transform-card-img"
                      alt="Guidance Through Lemon Law Claims"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                        Compliance & Workflow Management
                      </h5>
                      <p>
                        From regulatory checks to document organization, we handle back-office processes so
                         attorneys can focus on strategy and client advocacy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features__area-three section-py-130 pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section__title text-center mb-40">
                <h2 class="title">Why Choose Boulou LPO?</h2>
              </div>
            </div>
          </div>
          <div class="row gutter-y-24 justify-content-center">
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-partner"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Skilled, Scalable Support</h3>
                  <p>
                    Paralegals experienced in lemon law claims, documentation,
                    and case management.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-health-insurance"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Bilingual Capabilities</h3>
                  <p>
                    Clear communication with English and Spanish-speaking
                    clients, dealerships, and manufacturers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-tax"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Industry-Focused Expertise</h3>
                  <p>
                    Knowledge of state-specific lemon law statutes and
                    processes.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-report"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Confidential & Compliant</h3>
                  <p>
                    Secure handling of sensitive client and case information.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-calculator"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Cost-Effective Partnership</h3>
                  <p>
                    Professional support without the expense of additional in
                    house staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sub-page-baner pb-5" style={{ marginTop: "0px" }}>
        <div className="container">
          <section class="banner__area-five">
            <div class="container custom-container-five">
              <div
                class="banner__bg-foura"
                style={{
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg) ",
                }}
              >
                <div
                  class="banner__bg-shape"
                  style={{
                    backgroundImage:
                      "url(assets/img/banner/h8_hero_bg_shape.svg)",
                  }}
                ></div>
                <div class="row">
                  <div class="col-xl-8 col-lg-8">
                    <div
                      class="banner__content-five"
                      style={{ padding: "30px" }}
                    >
                      <h2 class="title" data-aos="fade-up" data-aos-delay="400">
                        Reliable Support for Every Lemon Law Case
                      </h2>
                  
                      <p data-aos="fade-up" data-aos-delay="600">
                        Boulou LPO helps your lemon law practice stay organized,
                        meet critical deadlines, and handle documentation with
                        precision. We allow your attorneys to focus on resolving
                        cases successfully while providing clients with
                        confident, professional support throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    

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

export default LemonLaw;
