import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import h9_history_bg from "../../../public/assets/img/bg/h9_history_bg.jpg"
import Casemanager from "../../../public/assets/img/Case-Manager.jpg"
import right from "../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../public/assets/img/images/h2_cta_shape.svg";

const CaseManager = () => {
  return (
    <>
      <Helmet>
        <title>Legal Case Manager Services | Boulou LPO</title>
        <meta
          name="description"
          content="Boulou LPO delivers professional case manager services for law firms. From tracking to reporting, we help manage legal cases with precision and ease."
        />
      </Helmet>
      <section className="history__area-five section-py-130">
        <div className="history__bg-two" data-background={h9_history_bg}></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="history__img-wrap-five">
                <img src={Casemanager} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history__content-five">
                <div className="section__title mb-25">
                  <h2 className="title">Case Manager</h2>
                </div>
                <p>
                  At Boulou LPO, our Case Managers keep your legal operations
                  running smoothly—ensuring no deadline is missed, no client is
                  left behind, and every case moves forward with clarity and
                  consistency.
                </p>
                <div className="about__inner-wrap-three">
                  <ul className="list-wrap about__list-item">
                    {[
                      "Proactive deadline tracking and escalation",
                      "Timely client communication and case updates",
                      "Smooth coordination with legal teams and departments",
                      "Document accuracy and version control",
                      "Administrative assistance for attorneys",
                      "Ensuring workflow clarity and operational consistency",
                    ].map((item, index) => (
                      <li key={index}>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M11.5252 3.5L5.30301 9.72222L2.47473 6.89394"
                              stroke="currentColor"
                              strokeWidth="1.6"
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
        </div>
      </section>

      <section class="pricing__area section-py-130 pt-0">
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <h2 className="title">Case Manager Role Support & Pricing</h2>
                <p>
                  Explore professional Case Manager support tailored to
                  different legal roles. Our transparent pricing and dedicated
                  expertise ensure efficient coordination, documentation, and
                  smooth case progression from start to finish.
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center gutter-y-30">
            <div class="col-lg-4 col-md-6">
              <div class="pricing__box">
                <div className="pricing-box-rolse">
                  <div class="pricing__top">
                    <div className="pricing-heading">
                      <h2>Contract Base </h2>
                    </div>
                    <p>80 hours/month | 20 hrs/week</p>
                  </div>
                  <div class="pricing__price">
                    <h2 class="price monthly_price">$14</h2>
                  </div>
                </div>

                <div class="pricing__list">
                  <ul class="list-wrap">
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      {/* <img src="assets/img/pricing.png" alt="" /> */}
                      <span>Targeted Coordination Without the Overhead</span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Great for small firms or teams needing additional
                        structure
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Provides consistent case updates, reminders, and
                        progress tracking
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Scales to match your team’s evolving demands</span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Case-Manager$14" class="tg-btn">
                    Get Started{" "}
                    <img
                      src={right}
                      alt=""
                      class="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricing__box">
                <div className="pricing-box-rolse">
                  <div class="pricing__top">
                    <div className="pricing-heading">
                      <h2>Full Time </h2>
                    </div>
                    <p>160 hours/month | 40 hrs/week</p>
                  </div>
                  <div class="pricing__price">
                    <h2 class="price monthly_price">$14</h2>
                  </div>
                </div>

                <div class="pricing__list">
                  <ul class="list-wrap">
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Reliable Oversight from Start to Settlement</span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Ideal for firms handling complex, high-volume caseloads
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Manages client communications, deadlines, and
                        documentation
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Ensures consistent follow-through and timely case
                        progression
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Case-Manager$14" class="tg-btn">
                    Get Started{" "}
                    <img
                      src={right}
                      alt=""
                      class="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="pricing__box">
                <div className="pricing-box-rolse">
                  <div class="pricing__top">
                    <div className="pricing-heading">
                      <h2>Multilingual</h2>
                    </div>
                    <p> English/French & English/Spanish</p>
                  </div>
                  <div class="pricing__price">
                    <h2 class="price monthly_price">$17</h2>
                  </div>
                </div>

                <div class="pricing__list">
                  <ul class="list-wrap">
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Client Clarity in Every Conversation</span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Supports firms with multilingual or international
                        clients
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Facilitates clear communication and documentation across
                        languages
                      </span>
                    </li>
                    <li>
                      <svg
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 10.1771V11.0051C19.9989 12.9459 19.3704 14.8344 18.2084 16.3888C17.0463 17.9432 15.413 19.0804 13.5518 19.6307C11.6907 20.1809 9.70153 20.1149 7.88102 19.4423C6.06051 18.7697 4.50619 17.5266 3.44986 15.8985C2.39354 14.2704 1.89181 12.3444 2.01951 10.4078C2.14721 8.47126 2.89749 6.62784 4.15845 5.15252C5.41942 3.67719 7.1235 2.649 9.01657 2.22128C10.9096 1.79357 12.8902 1.98925 14.663 2.77915M20 3.80515L11 12.8141L8.3 10.1141"
                          stroke="currentColor"
                          stroke-width="2.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>
                        Enhances client satisfaction, trust, and retention
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Case-Manager$17" class="tg-btn">
                    Get Started{" "}
                    <img
                      src={right}
                      alt=""
                      class="injectable"
                    />
                  </Link>
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
                    Our Case Managers are detail-driven, organized, and
                    experienced in keeping legal workflows running smoothly.
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
                    Communicate with confidence in English, French, or
                    Spanish—our bilingual professionals eliminate language gaps.
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
                    We understand case timelines, client sensitivities, and the
                    fast pace of legal operations.
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
                    We maintain strict data handling, communication, and ethical
                    standards.
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
                    Get reliable, professional case coordination without
                    expanding your in-house team.
                  </p>
                </div>
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

      <section class="pricing__area section-py-130 pt-0">
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <h2 className="title">Disclaimer</h2>
                <p>
                 A remote legal professional is not U.S. based or licensed, but is trained to work with U.S. 
law firms and has experience supporting their legal processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const RoleCard = ({ title, hours, Price, link, contentTitle, features }) => (
  <section className="services__area section-py-130 pt-0">
    <div className="container">
      <div className="row gutter-y-30 justify-content-center role-details-page">
        <div className="col-lg-12 col-md-12">
          <div className="services__item-two">
            <div className="row">
              <div className="col-lg-5">
                <div className="pricing-box">
                  <div className="pricing-heading">
                    <h2>{title}</h2>
                  </div>
                  <h4 className="title">
                    <Link to="services-details.html">{hours}</Link>
                  </h4>
                  <p
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    Price:{Price}
                  </p>

                  <Link to={link} className="tg-btn tg-btn-two">
                    Book Now
                    <img
                      src={right}
                      alt="arrow"
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="services-details.html">{contentTitle}</Link>
                  </h4>
                  <ul className="list-wrap about__list-item-two">
                    {features.map((feature, idx) => (
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseManager;
