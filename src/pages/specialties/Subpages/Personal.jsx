import React from "react";
import peronsals from "../../../../public/assets/lpo/personal-injury.png";
import jd from "../../../../public/assets/lpo/jd.jpg";
import cs from "../../../../public/assets/lpo1/Justice-You-Deserve.png";
import peronsals1 from "../../../../public/assets/lpo/p.jpg";
import lpoinc from "../../../../public/assets/lpo/inc.png";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";

const Personal = () => {
  return (
    <>
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content - col-8 */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Driving Case Success Through Precision and Speed
              </div>
              <h1 className="hero-title">Personal Injury Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal support tailored to
                the unique demands of personal injury law firms. From client
                intake to case preparation, our team ensures accuracy, speed,
                and professionalism at every stage, helping attorneys focus on
                building strong cases while we manage the critical details
                behind the scenes.
              </p>
            </div>

            {/* Right Image Section - col-4 */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img src={peronsals} alt="Lawyer" />
                {/* Floating Images */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features__area-two section-py-130 pt-0">
        <div class="container">
          <h2
            className="text-center pb-5"
            style={{ fontSize: "40px", color: "#002688" }}
          >
            Types of Services We Offer
          </h2>
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5 col-md-10 order-0 ">
              <div class="features__img">
                <img src={peronsals1} alt="img" />
              </div>
            </div>
            <div class="col-lg-7 col-md-10  ">
              <div class="features__content-two">
                <div class="section__title mb-25">
                  <h2>Expert Personal Injury Paralegal Support </h2>
                  <p>
                    At Boulou LPO, our paralegals assist your firm with a
                    comprehensive range of personal injury legal support needs,
                    including:{" "}
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
                    Conducting and managing client intake interviews
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
                    Collecting, organizing, and summarizing medical records
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
                    Preparing demand letters and settlement documentation
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
                    Drafting pleadings and discovery responses
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
                    Managing case calendars and deadlines
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
                    Coordinating with medical providers and insurance companies
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
                How We Can Transform Your PI Practice{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                From Overloaded to Organized – Fast{" "}
              </h6>
              <p className="transform-description text-muted">
                Personal injury cases can move quickly — and so can we. Our team
                integrates into your existing workflows, taking over
                time-consuming administrative and paralegal tasks so your
                attorneys can focus on strategy, negotiation, and courtroom
                advocacy. By ensuring that documentation is complete, deadlines
                are met, and communications are timely, we help your firm
                increase case throughput, reduce bottlenecks, and improve client
                satisfaction.
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
                      alt="Maximize Compensation"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Maximize Compensation</h5>
                      <p>
                        Our precise document review and case analysis equip law
                        firms with the insights they need to secure stronger
                        compensation outcomes for their clients.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6">
                  <div className="transform-card">
                    <img
                      src={cs}
                      className="transform-card-img"
                      alt="Justice You Deserve"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Justice You Deserve</h5>
                      <p>
                        Our experienced personal injury support teams help law
                        firms strengthen their cases with thorough research,
                        document review, and analysis—empowering attorneys to
                        hold negligent parties accountable
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (full width below) */}
                <div className="col-12">
                  <div className="transform-card" style={{ minHeight: '400px' }}>
                    <img
                      src={jd}
                      className="transform-card-img"
                      alt="Compassionate Support"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Compassionate Support</h5>
                      <p>
                        We provide law firms with skilled staff and detailed
                        case support, helping them manage clients’ needs
                        efficiently and empathetically.
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
                    Access paralegals experienced in personal injury processes,
                    ready to scale with your caseload.
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
                    Seamless communication with English and Spanish-speaking
                    clients.
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
                    We understand the timelines, documentation, and urgency
                    unique to PI matters.
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
                    Secure handling of sensitive client information with strict
                    adherence to legal regulations.
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
                    A budget-friendly way to expand your team without additional
                    overhead.
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
                        Driving Case Success Through Precision and Speed
                      </h2>

                      <p data-aos="fade-up" data-aos-delay="600">
                        With Boulou LPO as your dedicated personal injury
                        support partner, you gain a team that works as
                        efficiently and passionately as your in-house staff —
                        without the hiring and training burden. We help you
                        close cases faster, serve more clients, and maximize
                        settlements while maintaining the highest professional
                        standards.
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

export default Personal;
