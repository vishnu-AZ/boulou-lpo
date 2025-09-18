// export default Booking;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { careerSupportSlug } from "../Component/slug.js";

const Booking = () => {
  const { slug } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    saveInfo: false,
    job_name: "N/A",
    price: "$0 - $0",
    price1: "0",
    price2: "0",
    validity: "N/A",
    location: "N/A",
    employment_type: "N/A",
    position: "N/A",
  });

  useEffect(() => {

    const match = careerSupportSlug.find((item) => item.slug === slug);
    if (!match) {
      console.error("No job found for slug:", slug);
      return;
    }
    // Fetch job data by slug from API
    axios
      .get(`https://bouloulpo.com/bouloulpo_admin/api/get_career_data1/${match.id}`)
      .then((res) => {
        const job = res.data;
        if (!job) {
          console.error("No job found for slug:", slug);
          return;
        }

        setFormData((prev) => ({
          ...prev,
          job_name: job.job_name || "N/A",
          price: `$${job.price1} - $${job.price2}` || "$0 - $0",
          price1: job.price1 || "0",
          price2: job.price2 || "0",
          validity: job.validity || "N/A",
          location: job.location || "N/A",
          employment_type: job.employment_type || "N/A",
          position: job.position || "N/A",
        }));
      })
      .catch((err) => {
        console.error("Error fetching job data:", err);
      });
  }, [slug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch(
  //       "https://bouloulpo.com/bouloulpo_admin/api/save_applay_from_header",
  //       {
  //         method: ".+",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-Name": formData.name,
  //           "X-Email": formData.email,
  //           "X-Phone": formData.phone,
  //           "X-JobName": formData.job_name,
  //           "X-Price1": formData.price1,
  //           "X-Price2": formData.price2,
  //           "X-EmploymentType": formData.employment_type,
  //           "X-Validity": formData.validity,
  //           "X-Location": formData.location,
  //           "X-Position": formData.position,
  //           "X-Comment": formData.comment,
  //           "X-Save-Info": formData.saveInfo.toString(),
  //         },
  //       }
  //     );

  //     const result = await response.json();
  //     if (result.success) {
  //       toast.success("Application submitted successfully!");
  //       setTimeout(() => {
  //         window.location.href = "/";
  //       }, 2000);
  //     } else {
  //       throw new Error("Submission failed");
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     toast.error("Something went wrong. Please try again later.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("job_name", formData.job_name);
    data.append("employment_type", formData.employment_type);
    data.append("experience", formData.exp || "N/A");
    data.append("validity", formData.validity);
    data.append("location", formData.location);
    data.append("position", formData.position);
    data.append("price1", formData.price1);
    data.append("price2", formData.price2);
    data.append("comment", formData.comment);
    data.append("saveInfo", formData.saveInfo);

    // Check file size limit (5 MB)
    const resumeFile = formData.resume;
    if (resumeFile) {
      if (resumeFile.size > 5 * 1024 * 1024) { // 5 MB in bytes
        toast.error("Resume file size cannot exceed 5 MB.");
        setIsSubmitting(false);
        return; // Stop submission
      }
      data.append("resume", resumeFile);
    }

    const response = await axios.post(
      "https://bouloulpo.com/bouloulpo_admin/api/save_application",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success) {
      toast.success("Application submitted successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      toast.error(response.data.message || "Submission failed");
    }
  } catch (err) {
    console.error("Error:", err);
    toast.error("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Career Application</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services__area section-py-130">
        <div className="container">
          <section className="p-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="contact__form-wrap">
                    <h2 className="title">Leave Us A Message</h2>

                    <form className="contact__form" onSubmit={handleSubmit}>
                      <div className="form-grp">
                        <label htmlFor="name">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="email">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="phone">Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="price">Salary</label>
                        <input
                          className="disabled-input"
                          id="price"
                          name="price"
                          type="text"
                          value={formData.price}
                          disabled
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="validity">Validity</label>
                        <input
                          className="disabled-input"
                          id="validity"
                          name="validity"
                          type="text"
                          value={formData.validity}
                          disabled
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="location">Location</label>
                        <input
                          className="disabled-input"
                          id="location"
                          name="location"
                          type="text"
                          value={formData.location}
                          disabled
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="employment_type">Employment Type</label>
                        <input
                          className="disabled-input"
                          id="employment_type"
                          name="employment_type"
                          type="text"
                          value={formData.employment_type}
                          disabled
                        />
                      </div>

                      <div className="form-grp">
                        <label htmlFor="job_name">Job Name</label>
                        <input
                          className="disabled-input"
                          id="job_name"
                          name="job_name"
                          type="text"
                          value={formData.job_name}
                          disabled
                        />
                      </div>


                      <div className="form-grp">
                        <label htmlFor="experence">No of Experience</label>
                        <input
                          // className="disabled-input"
                          id="exp"
                          name="exp"
                          type="text"
                        // value={formData.price}
                        // disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="resume">Upload Resume</label>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="comment">Comment *</label>
                        <textarea
                          name="comment"
                          id="comment"
                          value={formData.comment}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <div className="form-grp checkbox-grp">
                        <input
                          type="checkbox"
                          id="saveInfo"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleChange}
                        />
                        <label htmlFor="saveInfo">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="tg-btn tg-btn-three"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Booking;
