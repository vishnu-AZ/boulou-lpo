import lpoinc from "../../../../public/assets/lpo/inc.png";
import topinc from "../../../../public/assets/lpo1/AccesstheTop1.jpg";
import cxxinc from "../../../../public/assets/lpo1/SaveTime2.jpg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import Environmentalimg from "../../../../public/assets/img/special/Environmental.jpg";
import enviro from "../../../../public/assets/lpo/environmental.png";

const Environmental = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section-container">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-7 col-md-12 hero-text-content">
              <div className="legal-hero-badge">
                Personalized and Affordable Solutions
              </div>
              <h1 className="hero-title">Environmental Law</h1>
              <p className="hero-description">
                Boulou LPO provides specialized paralegal assistance for
                environmental law firms, helping manage regulatory compliance,
                litigation, and policy matters with accuracy and efficiency.
                From permit applications to case documentation, we support
                attorneys in navigating complex environmental regulations while
                keeping cases organized and on track.
              </p>
            
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 hero-image-content">
              <div className="hero-main-image">
                <img
                  src={enviro}
                  alt="Environmental Law"
                />
                
              </div>
             
            </div>
          </div>
        </div>
      </section>
  <section className="features__area-two section-py-130 pt-0">
        <div className="container">
            <h2 className="text-center pb-5" style={{ fontSize: "40px", color: "#002688" }} > Types of Services We Offer</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10 order-0 order-lg-2">
              <div className="features__img">
                <img src={Environmentalimg} alt="img" />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="features__content-two">
                <div className="section__title mb-25">
                 
                  <h2>Expert Environmental Law Paralegal Support</h2>
                  <p>
                    At Boulou LPO, our paralegals provide comprehensive
                    environmental law assistance, including:
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
                    Preparing and filing permits, compliance reports, and
                    regulatory filings
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
                    Drafting legal correspondence, notices, and contracts
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
                    Organizing case files and evidence for environmental
                    litigation
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
                    Conducting research on statutes, regulations, and case law
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
                    Coordinating communications with clients, government
                    agencies, and experts
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
                    Managing deadlines and ensuring regulatory compliance
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
                How We Can Transform <br /> Your Environmental Law Practice
              </h2>
            </div>
            <div className="col-lg-6">
              <h6 style={{ color: "#002688" }}>
                Streamlined Compliance and Case Management
              </h6>
              <p className="transform-description text-muted">
                Environmental law requires careful attention to regulations,
                documentation, and deadlines. Our team handles filing, tracking,
                and organization tasks, freeing attorneys to focus on client
                strategy, litigation, and regulatory guidance. This improves
                efficiency, reduces risk, and ensures compliance is consistently
                maintained.
              </p>
            </div>

            {/* Image Cards */}
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
                        We provide precise document review and case support, helping law firms manage environmental cases efficiently and cost-effectively.
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
                      alt="Access the Top 1%"
                    />
                    <div className="transform-card-overlay"></div>
                    <div className="transform-card-content">
                      <h5 className="fw-semibold">Access the Top 1%</h5>
                      <p>
                        Our experienced support teams deliver specialized expertise, giving firms high-quality assistance without the need for in-house expansion.
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
                        By handling research, compliance checks, and document organization, we free attorneys to focus on strategy and client consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATEMENT BANNER */}
   

      {/* WHY CHOOSE SECTION */}
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
                    Paralegals trained in environmental regulations, compliance,
                    and litigation support.
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
                    Clear communication with English and Spanish-speaking
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
                  <p>
                    Knowledge of federal, state, and local environmental laws
                    and procedures.
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
                    Secure handling of sensitive client and regulatory
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
                    Professional support without the expense of additional
                    in-house staff.
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
                  backgroundImage: "url(assets/lpo/h8_hero_bg.jpg) ",
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
                      <h2 className="title">Reliable Support for Complex Environmental Matters</h2>
                      
                      <p>
                        Boulou LPO ensures your environmental law cases are
                        managed accurately, efficiently, and in full compliance
                        with regulations. We help your firm stay organized, meet
                        deadlines, and deliver professional service that
                        strengthens client trust and outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* SERVICES SECTION */}
    

      {/* CTA SECTION */}
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

export default Environmental;
