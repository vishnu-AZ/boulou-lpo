// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import careerbanimg from "../../src/assets/img/career.jpg"
// import { Helmet } from 'react-helmet';
// import { careerSupportSlug } from "../Component/slug.js";

// const Career = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://bouloulpo.com/bouloulpo_admin/api/get_career_data")
//       .then((res) => {
//         setJobs(res.data || []);
//       })
//       .catch((err) => {
//         console.error("Error fetching careers:", err);
//       });
//   }, []);

//   // Helper function to strip HTML and limit to 10 lines (~1000 chars)
//   const getTruncatedText = (html, maxChars = 1000) => {
//     const tempElement = document.createElement("div");
//     tempElement.innerHTML = html;
//     const text = tempElement.textContent || tempElement.innerText || "";
//     return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
//   };

//   return (
//     <>
//     <Helmet>
//             <title>
//              Join the Boulou LPO Team | Legal Support Career Opportunities

//             </title>
//             <meta
//               name="description"
//               content="Explore rewarding legal support careers at Boulou LPO. Join our U.S.-based team offering paralegal, admin, and intake roles for law professionals who value quality and growth.
// " />
//           </Helmet>
//       {/* Hero Section */}
//       <section className="breadcrumb__area-two">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="breadcrumb__content breadcrumb__content-two sub-ban-title-card section__title mb-0">
//                 <span className="sub-title">Careers</span>
//                 <h2 className="title">
//                   Join Our Team of Innovators <br /> and Problem Solvers
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Intro Section */}
//       <div className="career__area">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-xl-10">
//               <div className="career__img">
//                 <img src={careerbanimg} alt="Career Banner" />
//               </div>
//               <div className="career__content">
//                 <p>
//                   We believe that our people are our greatest asset. We are committed to fostering a collaborative, inclusive, and dynamic work environment where every team member can thrive. If you are passionate about technology and dedicated to delivering exceptional IT solutions, we want to hear from you!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Current Openings */}
//       <section className="career__area-two section-py-130 pt-5">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="section__title text-center mb-50">
//                 <h2 className="title">Current Openings</h2>
//               </div>
//             </div>
//           </div>

//           <div className="row gutter-y-30">
//             {jobs.length > 0 ? (
//               jobs.map((job) => (
//                 <div className="col-lg-6" key={job.id}>
//                   <div className="career__item">
//                     <div className="career__item-content">
//                       <h4 className="title">{job.job_name}</h4>

//                       <div className="career__details-content-two">
//                         {/* <h4 className="title">About</h4> */}
                       
//                         <p   dangerouslySetInnerHTML={{ __html: job.job_summary }}></p>

                  
//                       </div>
//                     </div>
//                      <ul class="list-wrap">
//                   <li>
//                     <a href="#!">{job.cat_one}</a>
//                   </li>
//                   <li>
//                     <a href="#!">{job.cat_two}</a>
//                   </li>
//                   <li>
//                     <a href="#!">{job.cat_three}</a>
//                   </li>
//                 </ul>

//                     <div className="career__item-bottom">
//                       <h4 className="salary">${job.price1} - ${job.price2} <span>USD/Month</span></h4>
//                       <Link to={`/CareerDetails/${job.id}`} className="tg-btn tg-btn-three">
//                         View Full Details
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="col-12 text-center">
//                 <p>No job openings available at the moment.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Career;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import careerbanimg from "../../src/assets/img/career.jpg";
import { Helmet } from "react-helmet";
import { careerSupportSlug } from "../Component/slug.js";

const Career = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_career_data")
      .then((res) => {
        setJobs(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching careers:", err);
      });
  }, []);

  // Helper: find slug by job name
 // Helper: find slug by job name
const getSlugForJob = (jobName) => {
  const match = careerSupportSlug.find(
    (item) => item.name.toLowerCase() === jobName.toLowerCase()
  );
  return match ? match.slug : "#";
};


  return (
    <>
      <Helmet>
        <title>
          Join the Boulou LPO Team | Legal Support Career Opportunities
        </title>
        <meta
          name="description"
          content="Explore rewarding legal support careers at Boulou LPO. Join our U.S.-based team offering paralegal, admin, and intake roles for law professionals who value quality and growth."
        />
      </Helmet>

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
                <img src={careerbanimg} alt="Career Banner" />
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

      {/* Current Openings */}
      <section className="career__area-two section-py-130 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section__title text-center mb-50">
                <h2 className="title">Current Openings</h2>
              </div>
            </div>
          </div>

          <div className="row gutter-y-30">
            {jobs.length > 0 ? (
              jobs.map((job) => {
                const slug = getSlugForJob(job.job_name);

                return (
                  <div className="col-lg-6" key={job.id}>
                    <div className="career__item">
                      <div className="career__item-content">
                        <h4 className="title">{job.job_name}</h4>
                        <div className="career__details-content-two">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: job.job_summary,
                            }}
                          ></p>
                        </div>
                      </div>

                      <ul className="list-wrap">
                        <li>
                          <a href="#!">{job.cat_one}</a>
                        </li>
                        <li>
                          <a href="#!">{job.cat_two}</a>
                        </li>
                        <li>
                          <a href="#!">{job.cat_three}</a>
                        </li>
                      </ul>

                      <div className="career__item-bottom">
                        <h4 className="salary">
                          ${job.price1} - ${job.price2}{" "}
                          <span>USD/Month</span>
                        </h4>
                        <Link
                          to={`/CareerDetails/${slug}`}
                          className="tg-btn tg-btn-three"
                        >
                          View Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p>No job openings available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
