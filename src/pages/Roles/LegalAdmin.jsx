import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import h9_history_bg from "../../../public/assets/img/bg/h9_history_bg.jpg";
import admin from "../../../public/assets/img/admin.jpg";
import right from "../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../public/assets/img/images/h2_cta_shape.svg";


const LegalAdmin = () => {
  return (
    <>
      <Helmet>
        <title>
          Outsourced Paralegal Services | Multilingual Paralegal Support |
          Boulou LPO
        </title>
        <meta
          name="description"
          content="Boulou LPO offers expert legal administrative support services. From filings and scheduling to client correspondence—we handle your law firm’s admin tasks efficiently."
        />
      </Helmet>
      <section className="history__area-five section-py-130">
        <div className="history__bg-two" data-background={h9_history_bg}></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="history__img-wrap-five">
                <img src={admin} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history__content-five">
                <div className="section__title mb-25">
                  <h2 className="title">Legal Admin</h2>
                </div>
                <p>
                  At Boulou LPO, our Legal Secretary and Receptionist services
                  ensure your front office reflects the professionalism of your
                  entire practice—efficient, welcoming, and always on point.
                </p>
                <div className="about__inner-wrap-three">
                  <ul className="list-wrap about__list-item">
                    <li>
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
                      Efficient call handling and reception services
                    </li>
                    <li>
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
                      Calendar management and meeting coordination
                    </li>
                    <li>
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
                      Client onboarding and communication handling
                    </li>
                    <li>
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
                      Legal document filing and records organization
                    </li>
                    <li>
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
                      Preparing and managing office correspondence
                    </li>
                    <li>
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
                      Deadline tracking and task scheduling support
                    </li>
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
                <h2 className="title">Legal Admin Role Support & Pricing</h2>
                <p>
                  Get dependable Legal Admin support for streamlined
                  front-office operations—from call handling to document
                  filing—delivered with accuracy, professionalism, and clear
                  pricing.
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
                    <h2 class="price monthly_price">$15</h2>
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
                      <span>
                        Support When You Need a Reliable Extra Set of Hands
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
                        Great for firms with lighter volume or rotating
                        administrative needs
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
                        Handles overflow calls, follow-ups, and legal
                        correspondence
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
                        Flexible coverage that grows with your practice
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Legal-Admin$15" class="tg-btn">
                    Get Started <img src={right} alt="" class="injectable" />
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
                    <h2 class="price monthly_price">$15</h2>
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
                      <span>Professionalism That Starts at the Front Desk</span>
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
                        Ideal for busy firms needing consistent administrative
                        support
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
                        Manages call handling, scheduling, and document prep
                        seamlessly
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
                        Keeps your operations smooth and client interactions
                        polished
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Legal-Admin$15" class="tg-btn">
                    Get Started <img src={right} alt="" class="injectable" />
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
                    <h2 class="price monthly_price">$18</h2>
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
                      <span>
                        Warm, Multilingual Client Interactions That Build Trust
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
                        Makes every client feel heard and understood—no matter
                        the language
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
                        Handles sensitive calls and legal scheduling in both
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
                        Maintains a high standard of communication across
                        cultures
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Legal-Admin$18" class="tg-btn">
                    Get Started <img src={right} alt="" class="injectable" />
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
                    Reliable legal professionals that integrate into your firm
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
                    Communicate confidently with English/French and
                    English/Spanish-speaking clients
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
                    Experienced in law firm etiquette, legal protocols, and
                    client service
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
                  <p>Trusted to handle sensitive information with care</p>
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
                  <p>Affordable support that never compromises on quality</p>
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

export default LegalAdmin;
