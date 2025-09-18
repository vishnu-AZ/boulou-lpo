import React from "react";
import { Link } from "react-router-dom";
import right_arrow from "../../public/assets/img/icons/right_arrow.svg"

const Roles = () => {
  return (
    <>

    <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Roles</h2>
                  <p> Dedicated Legal Roles for Seamless Case Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      <section className="services__area section-py-130">
        <div className="container">
           

          <div className="row gutter-y-30 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-analytics"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Case-Coordinator">Case Co-Ordinator</Link>
                  </h4>
                  <p>
                    Coordinate client communications and manage case timelines
                    to ensure smooth legal operations.
                  </p>
                  <Link to="/Case-Coordinator" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                      src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-envelope-1"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Case-Manager">Case Manager</Link>
                  </h4> 
                  <p>
                    Oversee the full lifecycle of cases, ensuring timely
                    updates, quality control, and team coordination.
                  </p>
                  <Link to="/Case-Manager" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                      src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-report"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Paralegal-Role">Paralegal</Link>
                  </h4>
                  <p>
                    Assist attorneys with legal research, drafting documents,
                    and case preparation with precision.
                  </p>
                  <Link to="/Paralegal-Role" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                    src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-investment"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Secretary-Receptionist">Secretary / Receptionist</Link>
                  </h4>
                  <p>
                    Handle scheduling, document filing, and client communication
                    to support daily legal functions.
                  </p>
                  <Link to="/Secretary-Receptionist" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                      src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-target"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Legal-Admin">Legal Admin</Link>
                  </h4>
                  <p>
                    Provide back-office support including file organization,
                    data entry, and compliance tracking.
                  </p>
                  <Link to="/Legal-Admin" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                     src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <i className="flaticon-accountant"></i>
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Intake-Specialist">Intake Specialist</Link>
                  </h4>
                  <p>
                    Gather case details, verify client information, and ensure a
                    smooth onboarding experience.
                  </p>
                  <Link to="/Intake-Specialist" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img
                    src={right_arrow}
                      alt=""
                      className="injectable"
                    />
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roles;
