import React from "react";
import insurance from "../../../../public/assets/lpo/insurance-law.png";
import insurance1 from "../../../../public/assets/lpo1/bvb.jpg";
import lpoinc from "../../../../public/assets/lpo1/InsuranceClaimAssistance.jpg";
import topinc from "../../../../public/assets/lpo1/FightingDeniedClaims.jpg";
import cxxinc from "../../../../public/assets/lpo1/GuidanceThroughComplexPolicies.jpg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";


const Insurance = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Expert Insurance Law Paralegal Support
              </div>
              <h1 className="hero-title">Insurance Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for
                insurance law attorneys, ensuring claims, policies, and
                litigation documents are handled accurately and efficiently.
                From client intake to claim review and dispute resolution, we
                help your firm manage the detailed work while allowing attorneys
                to focus on strategy and advocacy.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={insurance} alt="Lawyer" />
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
            <div class="col-lg-5 col-md-10 order-0 ">
              <div class="features__img">
                <img src={insurance1} alt="img" />
              </div>
            </div>
            <div class="col-lg-7 col-md-10  ">
              <div class="features__content-two">
                <div class="section__title mb-25">
               
                  <h2>Expert Insurance Law Paralegal Support </h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive
                    insurance law assistance, including:
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
                    Reviewing and organizing insurance policies, claims, and
                    coverage documents
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
                    Drafting correspondence, demand letters, and claim-related
                    filings
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
                    Coordinating with clients, insurance carriers, and opposing
                    counsel
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
                    Managing deadlines, filings, and litigation calendars
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
                    Conducting legal research on insurance law, regulations, and
                    case precedents
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
                    Assisting with claim evaluation, settlement analysis, and
                    document preparation
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
                How We Can Transform Your Insurance Law Practice{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Efficient Support for Claims and Litigation
              </h6>
              <p className="transform-description text-muted">
                Insurance law requires careful documentation, deadlines, and
                regulatory knowledge. Our team handles filings, correspondence,
                and case organization so attorneys can focus on dispute
                resolution, client strategy, and litigation management. This
                reduces errors, prevents delays, and ensures clients’ matters
                are handled professionally.
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
                      alt="Insurance Claim Assistance"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                        Insurance Claim Assistance
                      </h5>
                      <p>
                        We provide law firms with detailed case summaries, document review, and policy analysis, helping attorneys handle claims accurately and efficiently.
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
                      alt="Fighting Denied Claims"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Fighting Denied Claims</h5>
                      <p>
                       Our support teams organize evidence, prepare case reports, and track claim histories, enabling attorneys to strengthen appeals and challenge denials effectively.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (full width below) */}
                <div className="col-12">
                  <div className="transform-card" style={{ minHeight: '400px' }}>
                    <img
                      src={cxxinc}
                      className="transform-card-img"
                      alt="Guidance Through Complex Policies"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">
                       Guidance Through Complex Policies
                      </h5>
                      <p>
                        From policy interpretation to documentation management, we streamline back-office tasks so attorneys can navigate intricate insurance matters with confidence.
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
                    Paralegals experienced in insurance claims, litigation, and
                    regulatory compliance.
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
                    clients, insurers, and stakeholders
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
                    Knowledge of policy interpretation, claims handling, and
                    insurance regulations.
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
                    Secure handling of sensitive client and insurance
                    information.
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
                    Professional support without the expense of hiring
                    additional in-house staff.
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
                 Reliable Support for Every Insurance Matter
                      </h2>
                 
                      <p data-aos="fade-up" data-aos-delay="600">
                        Boulou LPO ensures your insurance law practice stays
                        organized, meets deadlines, and manages documentation
                        accurately. We provide the behind-the-scenes support
                        your attorneys need to serve clients efficiently, reduce
                        risk, and achieve successful outcomes.
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

export default Insurance;
