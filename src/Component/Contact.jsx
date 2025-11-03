// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { createLead } from "../api/LeadService";

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     comment: "",
//     saveInfo: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Prepare shared payload
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.number,
//         comment: formData.comment,
//         saveInfo: formData.saveInfo,
//       };

//       // ---------------------------
//       // Run both API calls in parallel (POST method)
//       // ---------------------------
//       const [laravelResponse, leadResponse] = await Promise.all([
//         // ✅ Call your Laravel API via POST
//         fetch("https://bouloulpo.com/bouloulpo_admin/api/save_contact_form", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         }),

//         // ✅ Call your internal createLead API (stores in leads table)
//         createLead("boulou_lpo", "application", {
//           name: payload.name,
//           email: payload.email,
//           phone: payload.phone,
//           service_needs: payload.comment,
//         }),
//       ]);

//       // ✅ Check Laravel response
//       if (!laravelResponse.ok) throw new Error("Laravel API failed");
//       const laravelResult = await laravelResponse.json();

//       console.log("Laravel API response:", laravelResult);
//       console.log("Lead API response:", leadResponse);

//       toast.success("Message sent successfully and stored in database!");

//       // ✅ Clear form
//       setFormData({
//         name: "",
//         email: "",
//         number: "",
//         comment: "",
//         saveInfo: false,
//       });
//     } catch (err) {
//       console.error("Submission error:", err);
//       toast.error("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


//   return (
//     <>
//       <ToastContainer autoClose={3000} />

//       <div className="container">
//         <div className="breadcum-sub">
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <div className="section__title text-center mb-40 sub-ban-title-card">
//                 <h2 className="title">Get in Touch</h2>
//                 <p>
//                   Partner with BoulouLPO for Trusted Legal Support Across Borders
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className="contact__area">
//         <div className="container">
//           <div className="row contact-row">
//             {/* Contact Info */}
//             <div className="col-lg-6">
//               <div className="contact__info-wrap">
//                 <div className="contact__info-item">
//                   <i className="flaticon-placeholder"></i>
//                   <div className="contact-form-icon">
//                     <h4 className="title">Jamaica</h4>
//                     <p>11-13 Westminster Road, Kingston 10, Jamaica.</p>
//                   </div>
//                 </div>

//                 <div className="contact__info-item">
//                   <i className="flaticon-placeholder"></i>
//                   <div className="contact-form-icon">
//                     <h4 className="title">USA</h4>
//                     <p>4400 N Federal Hwy Suite 8, Boca Raton, FL 33431, USA.</p>
//                   </div>
//                 </div>

//                 <div className="contact__info-item">
//                   <i className="flaticon-telephone"></i>
//                   <div className="contact-form-icon">
//                     <h4 className="title">Phone</h4>
//                     <ul className="list-wrap">
//                       <li>
//                         <a href="tel:1 (561) 409-5858">1 (561) 409-5858</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="contact__info-item">
//                   <i className="flaticon-envelope"></i>
//                   <div className="contact-form-icon">
//                     <h4 className="title">Email</h4>
//                     <ul className="list-wrap">
//                       <li>
//                         <a href="mailto:paralegalservices@bouloulpo.com">
//                           paralegalservices@bouloulpo.com
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="col-lg-6">
//               <div className="contact__form-wrap">
//                 <h2 className="title">Leave Us A Message</h2>
//                 <form className="contact__form" onSubmit={handleSubmit}>
//                   <div className="form-grp">
//                     <label htmlFor="name">Name *</label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-grp">
//                     <label htmlFor="email">Email *</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-grp">
//                     <label htmlFor="number">Number *</label>
//                     <input
//                       id="number"
//                       name="number"
//                       type="text"
//                       value={formData.number}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-grp">
//                     <label htmlFor="comment">Comment *</label>
//                     <textarea
//                       id="comment"
//                       name="comment"
//                       value={formData.comment}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-grp checkbox-grp">
//                     <input
//                       type="checkbox"
//                       id="saveInfo"
//                       name="saveInfo"
//                       checked={formData.saveInfo}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="saveInfo">
//                       Save my name, email, and website in this browser for the next time I comment.
//                     </label>
//                   </div>
//                   <button
//                     type="submit"
//                     className="tg-btn tg-btn-three"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit Message"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Google Map */}
//       <div className="container pb-5">
//         <div className="location-map">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1253.2069871003147!2d-76.8011586!3d18.0172651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3fb8a59c4b63%3A0xf6409d2c8d1de39d!2s11-13%20Westminster%20Rd%2C%20Kingston%2C%20Jamaica!5e0!3m2!1sen!2sjm!4v1690740800000!5m2!1sen!2sjm"
//             width="600"
//             height="450"
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             style={{ width: "100%", height: "400px", border: 0 }}
//           ></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createLead } from "../api/LeadService";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    comment: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare payload
      const payload = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        comment: formData.comment,
      };

      // ---------------------------
      // Call Node.js SMTP API (Boulou LPO)
      // ---------------------------
      const smtpResponse = await fetch(
        `http://smtp.aegiiz.us/api/v1/smtp/boulou-lpo/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!smtpResponse.ok) throw new Error("SMTP API failed");
      const smtpResult = await smtpResponse.json();
      console.log("SMTP API response:", smtpResult);

      // ---------------------------
      // (Optional) Store in your internal Leads DB
      // ---------------------------
      const leadResponse = await createLead("boulou_lpo", "application", {
        name: payload.name,
        email: payload.email,
        phone: payload.number,
        service_needs: payload.comment,
      });

      console.log("Lead API response:", leadResponse);

      toast.success("Message sent successfully!");

      // ✅ Clear form
      setFormData({
        name: "",
        email: "",
        number: "",
        comment: "",
        saveInfo: false,
      });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />

      <div className="container">
        <div className="breadcum-sub">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40 sub-ban-title-card">
                <h2 className="title">Get in Touch</h2>
                <p>
                  Partner with BoulouLPO for Trusted Legal Support Across
                  Borders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact__area">
        <div className="container">
          <div className="row contact-row">
            {/* Contact Info */}
            <div className="col-lg-6">
              <div className="contact__info-wrap">
                <div className="contact__info-item">
                  <i className="flaticon-placeholder"></i>
                  <div className="contact-form-icon">
                    <h4 className="title">Jamaica</h4>
                    <p>11-13 Westminster Road, Kingston 10, Jamaica.</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <i className="flaticon-placeholder"></i>
                  <div className="contact-form-icon">
                    <h4 className="title">USA</h4>
                    <p>4400 N Federal Hwy Suite 8, Boca Raton, FL 33431, USA.</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <i className="flaticon-telephone"></i>
                  <div className="contact-form-icon">
                    <h4 className="title">Phone</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="tel:1 (561) 409-5858">1 (561) 409-5858</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="contact__info-item">
                  <i className="flaticon-envelope"></i>
                  <div className="contact-form-icon">
                    <h4 className="title">Email</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="mailto:paralegalservices@bouloulpo.com">
                          paralegalservices@bouloulpo.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
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
                    <label htmlFor="number">Number *</label>
                    <input
                      id="number"
                      name="number"
                      type="text"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-grp">
                    <label htmlFor="comment">Comment *</label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                    />
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
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="tg-btn tg-btn-three"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="container pb-5">
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1253.2069871003147!2d-76.8011586!3d18.0172651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3fb8a59c4b63%3A0xf6409d2c8d1de39d!2s11-13%20Westminster%20Rd%2C%20Kingston%2C%20Jamaica!5e0!3m2!1sen!2sjm!4v1690740800000!5m2!1sen!2sjm"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "400px", border: 0 }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
