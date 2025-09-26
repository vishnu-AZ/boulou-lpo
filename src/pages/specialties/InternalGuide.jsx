import { Link } from "react-router-dom";
import "./Specialties.css";
import FAQSection from "../../Component/FAQSection";
import TrustedBy from "../../Component/TrustedBy";
import lpo1 from "../../../public/assets/lpo-icons/1.png";
import lpo2 from "../../../public/assets/lpo-icons/2.png";
import lpo3 from "../../../public/assets/lpo-icons/3.png";
import lpo4 from "../../../public/assets/lpo-icons/4.png";
import lpo5 from "../../../public/assets/lpo-icons/5.png";
import lpo6 from "../../../public/assets/lpo-icons/6.png";
import lpo7 from "../../../public/assets/lpo-icons/7.png";
import lpo8 from "../../../public/assets/lpo-icons/8.png";
import lpo9 from "../../../public/assets/lpo-icons/9.png";
import lpo10 from "../../../public/assets/lpo-icons/10.png";
import lpo11 from "../../../public/assets/lpo-icons/11.png";
import lpo12 from "../../../public/assets/lpo-icons/12.png";
import lpo13 from "../../../public/assets/lpo-icons/13.png";
import lpo14 from "../../../public/assets/lpo-icons/14.png";
import lpo15 from "../../../public/assets/lpo-icons/15.png";
import lpo16 from "../../../public/assets/lpo-icons/16.png";
import lpo17 from "../../../public/assets/lpo-icons/17.png";
import lpo18 from "../../../public/assets/lpo-icons/18.png";
import right from "../../../public/assets/img/icons/right_arrow.svg"
import h2_cta_shape from "../../../public/assets/img/images/h2_cta_shape.svg";
import lpo19 from "../../../public/assets/lpo1/icon1.png";
// import { Link } from "react-router-dom";



const InternalGuide = () => {
  return (
    <>
      {/* <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Specialties</h2>
                  <p> Dedicated Legal Specialties for Seamless Case Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="legal-hero-banner ">
        <div className="legal-hero-content">
          {/* <span className="legal-hero-badge">
          Highly Expert Lawyers in Diverse Practice Areas
        </span> */}
          <h1 className="legal-hero-title">
            Boulou LPO’ <br /> Legal Specialties
          </h1>
          <p className="legal-hero-subtitle">
            BoulouLPO provides specialized support across 26 practice areas—offering tailored
            assistance from case coordination to paralegal services that enhances your firm's
            efficiency and results.
          </p>
          <a href="https://outlook.office365.com/book/BoulouLPOClientBookings@bouloublue.com/?ismsaljsauthenabled=true" className="legal-hero-btn" target="_blank"
            rel="noopener noreferrer" >
            Book a Demo
          </a>
        </div>

        {/* Floating Images */}

      </section>

      {/* <TrustedBy /> */}
      <section className="services__area section-py-130">
        <div className="container">
          <div className="row gutter-y-30 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo19} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Personal">Personal Injury Law</Link>
                  </h4>
                  <p>
                    Focuses on cases where individuals Sustain injuries due to
                    someone else's negligence (e.g. car accidents, slip and
                    falls, medical malpractice, workers compensation).
                  </p>
                  <Link to="/Personal" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo2} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Criminal">Criminal Law</Link>
                  </h4>
                  <p>
                    Involves prosecution and defense of individuals or entities
                    charged with crimes (e.g. theft, assault, DUI, white-collar
                    crimes).
                  </p>
                  <Link to="/Criminal" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo3} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Family">Family Law</Link>
                  </h4>
                  <p>
                    Covers matters such as divorce, child custody, adoption,
                    alimony, and domestic violence.
                  </p>
                  <Link to="/Family" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo4} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Immigration">Immigration Law</Link>
                  </h4>
                  <p>
                    Deals with visas, green cards, asylum, deportation defense,
                    and citizenship applications.
                  </p>
                  <Link to="/Immigration" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo5} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/RealEstate">Real Estate Law</Link>
                  </h4>
                  <p>
                    Focuses on property transactions, landlord-tenant issues,
                    zoning, and real estate litigation.
                  </p>
                  <Link to="/RealEstate" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo6} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Employment">Employment & Labor Law</Link>
                  </h4>
                  <p>
                    Covers workplace issues like wrongful termination,
                    discrimination, harassment, wage disputes, and labor union
                    matters.
                  </p>
                  <Link to="/Employment" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo7} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Corporate">Corporate & Business Law</Link>
                  </h4>
                  <p>
                    Includes business formation, contracts, mergers &
                    acquisitions, and regulatory compliance.
                  </p>
                  <Link to="/Corporate" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo8} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/EstatePlanning">
                      Estate Planning & Probate Law
                    </Link>
                  </h4>
                  <p>
                    Involves wills, trusts, power of attorney, and
                    administration of estates after death.
                  </p>
                  <Link to="/EstatePlanning" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo9} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Bankruptcy">Bankruptcy Law</Link>
                  </h4>
                  <p>
                    Helps individuals or businesses navigate financial
                    insolvency and debt relief through bankruptcy filings.
                  </p>
                  <Link to="/Bankruptcy" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo10} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Intellectual">
                      Intellectual Property Law (IP Law)
                    </Link>
                  </h4>
                  <p>
                    Protects inventions, trademarks, copyrights, and trade
                    secrets.
                  </p>
                  <Link to="/Intellectual" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo11} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/ContractLaw">Contract Law</Link>
                  </h4>
                  <p>
                    Governs the creation, execution, and enforcement of
                    agreements between parties.
                  </p>
                  <Link to="/ContractLaw" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo12} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Civil">Civil Litigation</Link>
                  </h4>
                  <p>
                    Involves non-criminal disputes such as breach of contract,
                    personal disputes, or business lawsuits.
                  </p>
                  <Link to="/Civil" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo13} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Environmental">Environmental Law</Link>
                  </h4>
                  <p>
                    Focuses on laws that protect the environment, often
                    involving government regulations and compliance.
                  </p>
                  <Link to="/Environmental" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo14} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Taxlaw">Tax Law</Link>
                  </h4>
                  <p>
                    Deals with federal, state, and local taxation issues for
                    individuals and businesses.
                  </p>
                  <Link to="/Taxlaw" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo15} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Healthcare">Healthcare Law</Link>
                  </h4>
                  <p>
                    Covers legal issues in the healthcare industry including
                    patient rights, HIPAA compliance, and medical malpractice.
                  </p>
                  <Link to="/Healthcare" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo16} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Administrative">Administrative Law</Link>
                  </h4>
                  <p>
                    Concerns government agencies and regulations, including
                    appeals and compliance with administrative rulings.
                  </p>
                  <Link to="/Administrative" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo17} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Insurance">Insurance Law</Link>
                  </h4>
                  <p>Handling claims, disputes, and policy reviews.</p>
                  <Link to="/Insurance" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo18} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Construction">Construction Law</Link>
                  </h4>
                  <p>Contract disputes, lien claims, and compliance matters.</p>
                  <Link to="/Construction" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo1} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Maritime">Maritime / Admiralty Law</Link>
                  </h4>
                  <p>
                    Support for cases involving shipping, marine contracts, and
                    accidents.
                  </p>
                  <Link to="/Maritime" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo2} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Medialaw">Entertainment / Media Law</Link>
                  </h4>
                  <p>Contracts, licensing, and IP-related support.</p>
                  <Link to="/Medialaw" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo4} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Education">Education Law</Link>
                  </h4>
                  <p>
                    Student rights, special education, and school-related
                    disputes.
                  </p>
                  <Link to="/Education" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo8} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Municipal">
                      Municipal / Local Government Law
                    </Link>
                  </h4>
                  <p>Zoning, ordinances, and administrative support.</p>
                  <Link to="/Municipal" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo6} style={{ width: "65px" }} alt="" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Consumerprotection">
                      Consumer Protection / Class Actions
                    </Link>
                  </h4>
                  <p>Handling large-scale claims, disputes, and settlements.</p>
                  <Link to="/Consumerprotection" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img src={lpo5} style={{ width: "65px" }} alt="img" />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Transportation">
                      Transportation & Logistics Law
                    </Link>
                  </h4>
                  <p>
                    Compliance, claims, and contracts for the transport sector.
                  </p>
                  <Link to="/Transportation" className="tg-btn tg-btn-two">
                    Read More{" "}
                    <img src={right} alt="right arrow" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img
                    src={lpo6}
                    style={{ width: "65px" }}
                    alt="Lemon Law Icon"
                  />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Lemonlaw">Lemon Law</Link>
                  </h4>
                  <p>
                    Protects consumers stuck with defective vehicles by ensuring
                    their right to a fair remedy
                  </p>
                  <Link to="/Lemonlaw" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="services__item-two role-service-card">
                <div className="services__icon-two">
                  <img
                    src={lpo7}
                    style={{ width: "65px" }}
                    alt="Lemon Law Icon"
                  />
                </div>
                <div className="services__content-two">
                  <h4 className="title">
                    <Link to="/Habitabilitylaw">Habitability Law</Link>
                  </h4>
                  <p>
                    Safeguards tenants’ rights to safe, livable, and
                    well-maintained housing.
                  </p>
                  <Link to="/Habitabilitylaw" className="tg-btn tg-btn-two">
                    Read More <img src={right} alt="" className="injectable" />
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
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-partner"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Consistent Record of Excellence</h3>
                  <p>
                    We pride ourselves on a consistent record of excellence in
                    every project we deliver.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-health-insurance"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">Specialized Industry Insights</h3>
                  <p>
                    We provide specialized industry insights that drive smarter
                    strategies and better results.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="features__item-two">
                <div class="features__icon-two">
                  <i class="flaticon-tax"></i>
                </div>
                <div class="features__content-four">
                  <h3 class="title">International Reach</h3>
                  <p>
                    Our international reach enables us to serve clients
                    seamlessly across the globe.
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
                  <h3 class="title">Cost-Effective Excellence</h3>
                  <p>
                    We combine superior quality with cost-effective strategies
                    for maximum value.
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

      <section className="hero-remote-lawyers">
        <div className="hero-remote-lawyers-card">
          <h1 className="hero-remote-lawyers-title">
            Specialized Legal Support Tailored to Your Practice
          </h1>
          <p className="hero-remote-lawyers-desc">
            By partnering with Boulou LPO you can have access to top-tier legal
            talent across the world, ensuring your legal matters are handled
            with precision and expertise that matches your specific needs.
          </p>
          <a href="contact" className="hero-remote-lawyers-btn">
            Book a Demo
          </a>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default InternalGuide;
