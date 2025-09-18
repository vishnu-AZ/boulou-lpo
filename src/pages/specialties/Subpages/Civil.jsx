import React from "react";
import civilImage from "../../../../public/assets/lpo/Civil Litigation.png";
import lpoinc from "../../../../public/assets/lpo/inc.png";
import topinc from "../../../../public/assets/lpo1/qa.jpg";
import cxxinc from "../../../../public/assets/lpo1/mm.jpg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import civil from "../../../../public/assets/img/special/Civil.jpg"


const Civil = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Reliable & Efficient Litigation Support
              </div>
              <h1 className="hero-title">Civil Litigation</h1>
              <p className="hero-description">
                Boulou LPO provides skilled paralegal assistance for civil
                litigation attorneys, ensuring all aspects of case management,
                filings, and discovery are handled accurately and efficiently.
                From initial pleadings to trial preparation, we help your firm
                stay organized, meet deadlines, and focus on achieving favorable
                outcomes for clients.
              </p>
             
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={civilImage} alt="Civil Litigation" />
                {/* Floating Images */}
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
<section className="features__area-two section-py-130 ">
        <div className="container">
          <h1 className="text-center pb-5" style={{ fontSize: "40px", color: "#002688" }}>Types of Services We Offer</h1>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src={civil} alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                  
                  <h2>Expert Civil Litigation Paralegal Support</h2>
                  <p>
                    Our team provides end-to-end litigation assistance,
                    including:
                  </p>
                </div>
                <ul className="list-wrap about__list-item-two">
                  {[
                    "Drafting and filing complaints, motions, and discovery requests",
                    "Organizing and managing case files and exhibits",
                    "Coordinating depositions, witnesses, and court schedules",
                    "Conducting legal research on statutes, precedents, and case law",
                    "Preparing trial binders, exhibits, and evidence summaries",
                    "Managing litigation calendars, deadlines, and document production",
                  ].map((item, idx) => (
                    <li key={idx}>
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transform Section */}
      <section className="transform-section py-5">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-6">
              <h2
                className="transform-title fw-bold mb-3"
                style={{ fontSize: "40px", color: "#002688" }}
              >
                How We Can Transform <br /> Your Civil Litigation Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Case Management for Better Outcomes
              </h6>
              <p className="transform-description text-muted">
                Civil litigation involves multiple deadlines, documents, and
                parties. Our team handles the administrative and paralegal
                workload, ensuring filings are accurate, evidence is organized,
                and deadlines are met. This allows attorneys to focus on
                strategy, client advocacy, and courtroom performance, ultimately
                improving case efficiency and results.
              </p>
            </div>

            {/* Transformation Cards */}
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
                        We streamline case preparation and document management, helping law firms reduce overhead and maximize billable time.
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
                      alt="Access Top Talent"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Access Top Talent</h5>
                      <p>
                       Our skilled legal support teams provide specialized expertise, giving firms high-quality assistance without expanding in-house staff.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12">
                  <div className="transform-card" style={{ minHeight: '400px' }}>
                    <img
                      src={cxxinc}
                      className="transform-card-img"
                      alt="Save Time"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Save Time</h5>
                      <p>
                        From case summaries to evidence organization, we handle back-office tasks so attorneys can focus on strategy and client advocacy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
   
      {/* Why Choose Section */}
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
                    Paralegals experienced in civil procedure, filings, and case
                    management.
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
                    clients, witnesses, and opposing counsel.
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
                  <h3 className="title"> Industry-Focused Expertise</h3>
                  <p>
                    Deep understanding of civil litigation timelines, discovery
                    processes, and courtroom requirements.
                  </p>
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
                    Secure handling of sensitive case materials and client
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
                    Access professional litigation support without the overhead
                    of in-house hires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
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
                      <h2 className="title">Precision Support for Every Case</h2>
                     
                      <p>
                        Boulou LPO helps your civil litigation practice operate
                        smoothly, reduce errors, and stay ahead of deadlines.
                        With our dedicated support, your attorneys can focus on
                        building stronger cases, serving more clients, and
                        achieving favorable outcomes.
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

export default Civil;
