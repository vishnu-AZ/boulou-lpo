import React from "react";
import { Link } from "react-router-dom";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";
import h8_hero_bg from "../../../../public/assets/img/banner/h8_hero_bg.jpg";
import h8_hero_bg_shape from "../../../../public/assets/img/banner/h8_hero_bg_shape.svg";


const Banner = ({ data }) => {
  return (
    <div className="sub-page-baner">
      <div className="container">
        <section className="banner__area-five">
          <div className="container custom-container-five">
            <div
              className="banner__bg-four"
              style={{ backgroundImage: `url(${data.backgroundImage})` }}
            >
              <div
                className="banner__bg-shape"
                style={{ backgroundImage: `url(${data.shapeImage})` }}
              ></div>
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="banner__content-five">
                    <span
                      className="sub-title"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {data.subtitle}
                    </span>
                    <h2
                      className="title"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      {data.title}
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="600">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Deposition = () => {
  // Banner Content
  const bannerData = {
    backgroundImage: {h8_hero_bg},
    shapeImage: {h8_hero_bg_shape},
    subtitle: "Paralegal Service",
    title: "Deposition Summary Services",
    description:
      "Boulou LPO transforms lengthy deposition transcripts into clear, concise, and structured summaries that help legal teams quickly extract key facts, testimony, and contradictions. Our remote legal professionals distill complex testimony into actionable insights—perfect for case prep, trial strategy, or settlement review.",
  };

  const summaryServices = [
    {
      title: "Page-Line Summaries",
      description:
        "A line-by-line breakdown that links key testimony directly to page and line numbers—ideal for quick referencing in hearings or court filings.",
    },
    {
      title: "Chronological Summaries",
      description:
        "Reconstructs the testimony in the order events occurred to help build a clearer timeline of the case.",
    },
    {
      title: "Topic-Based Summaries",
      description:
        "Organizes testimony by issue (e.g., liability, damages, medical history), making it easier to review arguments or develop strategy.",
    },
    {
      title: "Witness-Specific Summaries",
      description:
        "Focuses on individual witness accounts, particularly helpful in multi-party litigation or expert testimony.",
    },
    {
      title: "Issue-Focused/Claim-Focused Summaries",
      description:
        "Concentrates on specific claims or legal elements, such as causation or breach of duty.",
    },
    {
      title: "Objective Summaries",
      description:
        "Neutral summaries presenting the facts of the deposition without interpretation—great for broad team distribution.",
    },
    {
      title: "Analytical/Annotated Summaries",
      description:
        "Includes commentary, legal analysis, and highlights of inconsistencies, admissions, or potential cross-examination points.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Paralegal Precision, Legal Insight",
      description:
        "Our trained paralegals specialize in transforming lengthy depositions into clear, organized summaries that highlight key facts, testimony, and case-critical issues.",
    },
    {
      title: "Faster Turnarounds, No Compromise on Quality",
      description:
        "We deliver accurate, concise summaries quickly—helping your legal team stay on track for discovery deadlines and trial prep.",
    },
    {
      title: "Tailored Summary Formats",
      description:
        "From page-line summaries to issue-based digests, we adapt to your preferred structure and style for seamless integration into your workflow.",
    },
    {
      title: "Cost-Efficient Support Without Sacrificing Depth",
      description:
        "Get high-quality support at a fraction of the cost of traditional legal staffing—without sacrificing accuracy, context, or strategic value.",
    },
  ];

  return (
    <>
      {/* Dynamic Banner */}
      <Banner data={bannerData} />

      {/* Summary Table Section */}
      <section className="services__area-seven section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__title text-center mb-5 mt-0  sub-ban-title-card">
                <h2 className="title">Our Services</h2>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30 justify-content-center">
            {summaryServices.map((item, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div
                  className="services__item-two role-service-card px-3"
                  style={{
                    border: "1px solid #0047ff6e",
                    boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.06)",
                    background: "#ffffff",
                  }}
                >
                  <div className="services__icon-two">
                    <i className="flaticon-analytics"></i>
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <a>{item.title}</a>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Table */}
      <section className="services__area-seven section-py-130 pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section__title text-center mb-40">
                <h2 className="title">
                  Why Choose Boulou LPO for Your Deposition Summary Services?
                </h2>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30 justify-content-center">
            {whyChooseUs.map((item, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div
                  className="services__item-two role-service-card px-3"
                  style={{
                    border: "1px solid #0047ff6e",
                    boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.06)",
                    background: "#ffffff",
                  }}
                >
                  <div className="services__icon-two">
                    <i className="flaticon-analytics"></i>
                  </div>
                  <div className="services__content-two">
                    <h4 className="title">
                      <a>{item.title}</a>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
              <img src={h2_cta_shape}  alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deposition;
