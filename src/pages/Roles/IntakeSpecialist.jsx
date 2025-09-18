import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import subAboutImg from "../../../public/assets/img/Intake.jpg";
import right from "../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../public/assets/img/images/h2_cta_shape.svg";

const IntakeSpecialist = () => {
  const role = {
    heading: "Intake Specialist",
    RoleDescription:
      "At Boulou LPO, our Intake Specialist services ensure every potential client receives prompt, professional, and compassionate attention—the crucial first step in building trust and securing new cases.",
  };

 
  // const whyChooseimg = "assets/img/images/h2_history_img.jpg";

  const AboutroleList = [
    "Handling initial client inquiries via phone and email",
    "Collecting and verifying client intake information",
    "Scheduling consultations and follow-up appointments",
    "Ensuring accurate data entry into case management systems",
    "Maintaining confidentiality and professionalism during onboarding",
    "Coordinating between clients and legal teams efficiently",
  ];

  return (
    <>
      <Helmet>
        <title>Legal Intake Specialist Services | Boulou LPO</title>
        <meta
          name="description"
          content="Streamline client onboarding with a trained legal intake specialist from Boulou LPO. We manage intake calls, client screening, and initial case documentation professionally.
"
        />
      </Helmet>
      {/* Role Overview */}
      <section className="history__area-five section-py-130">
        <div
          className="history__bg-two"
          data-background="assets/img/bg/h9_history_bg.jpg"
        ></div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="history__img-wrap-five">
                <img src={subAboutImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="history__content-five">
                <div className="section__title mb-25">
                  <h2 className="title">{role.heading}</h2>
                </div>
                <p>{role.RoleDescription}</p>
                <ul className="list-wrap about__list-item">
                  {AboutroleList.map((item, index) => (
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
      </section>

      <section class="pricing__area section-py-130 pt-0">
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <h2 className="title">
                  Intake Specialist Role Support & Pricing
                </h2>
                <p>
                  Discover focused intake support—handling client calls,
                  gathering details, and ensuring smooth onboarding with
                  reliable service and transparent pricing.
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
                    <h2 class="price monthly_price">$12</h2>
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
                        Flexible Intake Assistance When You Need It Most
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
                        Perfect for firms with moderate intake demands or
                        seasonal caseload fluctuations
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
                        Supports overflow calls, follow-up inquiries, and
                        preliminary client data collection
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
                        Scalable coverage designed to adapt as your firm grows
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Intake-Specialist$12" class="tg-btn">
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
                    <h2 class="price monthly_price">$12</h2>
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
                        Dedicated Client Intake Experts Who Understand Your
                        Firm’s Needs
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
                        Ideal for firms with high-volume case intakes requiring
                        consistent, focused support
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
                        Handles initial client screenings, information
                        gathering, and appointment scheduling efficiently
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
                        Provides empathetic communication that reflects your
                        firm’s commitment to client care
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Intake-Specialist$12" class="tg-btn">
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
                      <span>
                        Clear, Culturally Sensitive Communication From the Start
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
                        Ensures all clients feel understood and supported
                        regardless of language barriers
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
                        Skilled at managing sensitive intake calls in multiple
                        languages with professionalism
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
                        Helps broaden your client reach with seamless
                        multilingual service
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="pricing__button">
                  <Link to="/Booking/Intake-Specialist$15" class="tg-btn">
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
                    Intake professionals trained to represent your firm with
                    care and accuracy
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
                    Fluent communication in English/French and English/Spanish
                    to serve diverse clients
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
                    Experienced in client intake processes, confidentiality, and
                    legal protocols
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
                    Dedicated to protecting client information with strict
                    compliance
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
                    Affordable intake support designed to enhance your firm’s
                    efficiency
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

export default IntakeSpecialist;
