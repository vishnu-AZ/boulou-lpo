
import career from "../../public/assets/img/career.jpg"

const CareerNew = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="breadcrumb__area-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="breadcrumb__content breadcrumb__content-two sub-ban-title-card section__title mb-0">
                <span className="sub-title">Careers</span>
                <h2 className="title">
                  Join Our Team of Innovators <br /> and Problem Solvers
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="career__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="career__img">
                <img src={career} alt="Career Banner" />
              </div>
              <div className="career__content">
                <p>
                  We believe that our people are our greatest asset. We are
                  committed to fostering a collaborative, inclusive, and dynamic
                  work environment where every team member can thrive. If you
                  are passionate about technology and dedicated to delivering
                  exceptional IT solutions, we want to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="career__area-two section-py-130 pt-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section__title text-center mb-50">
               
                <h2 class="title">Current Openings</h2>
              </div>
            </div>
          </div>
          <div class="row gutter-y-30">
            <div class="col-lg-6">
              <div class="career__item">
                <div class="career__item-content">
                  <h4 class="title">Business Analyst</h4>
                  <p>
                    <span>Job Summary:</span> A Business Analyst bridges the gap
                    between business needs and technology solutions. They
                    analyse data, identify business challenges, and propose
                    strategic solutions.
                  </p>
                  <p>
                    <span>Requirements:</span> Bachelor’s degree in Business,
                    Finance, IT, or a related field. 1-3 years of experience in
                    business analysis, consulting, or a related role.
                    Certifications like CBAP (Certified Business Analysis
                    Professional) or PMI-PBA are a plus.
                  </p>
                </div>
                <ul class="list-wrap">
                  <li>
                    <a href="#!">Business</a>
                  </li>
                  <li>
                    <a href="#!">Digital Agency</a>
                  </li>
                  <li>
                    <a href="#!">Consulting Services</a>
                  </li>
                </ul>
                <div class="career__item-bottom">
                  <h4 class="salary">
                    $1000 - $12000 <span>USD/month</span>
                  </h4>
                  <a href="career-details.html" class="tg-btn tg-btn-three">
                    View Full Details
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="career__item">
                <div class="career__item-content">
                  <h4 class="title">Junior Project Manager</h4>
                  <p>
                    <span>Job Summary:</span> A Junior Project Manager assists
                    in planning, executing, and completing projects under the
                    supervision of a senior project manager.{" "}
                  </p>
                  <p>
                    <span>Requirements:</span> Requirements: Bachelor’s degree
                    in Business, Management, IT, or a related field. 1-3 years
                    of experience in project coordination or a related role.
                    Certification (e.g., PMP, PRINCE2) is a bonus but not
                    mandatory.
                  </p>
                </div>
                <ul class="list-wrap">
                  <li>
                    <a href="#!">Business Analyst</a>
                  </li>
                  <li>
                    <a href="#!">Business</a>
                  </li>
                  <li>
                    <a href="#!">Project</a>
                  </li>
                </ul>
                <div class="career__item-bottom">
                  <h4 class="salary">
                    $1000 - $12000 <span>USD/month</span>
                  </h4>
                  <a href="career-details.html" class="tg-btn tg-btn-three">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerNew;
