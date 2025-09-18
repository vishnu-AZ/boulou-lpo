import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState(() => {
    const [rolePart = "", pricePart = ""] = (id || "").split("$");
    return {
      name: "",
      email: "",
      phone: "",
      role: rolePart,
      price: "$" + pricePart,
      comment: "",
      saveInfo: false,
    };
  });

  useEffect(() => {
    console.log("Route Param - id:", id);
  }, [id]);

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
      const response = await fetch(
        "https://bouloulpo.com/bouloulpo_admin/api/save_booking_from_header/" + formData.name + "-" + formData.email + "-" + formData.phone + "-" + formData.role + "-" + formData.price + "-" + formData.comment + "-" + formData.saveInfo,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Name": formData.name,
            "X-Email": formData.email,
            "X-Phone": formData.phone,
            "X-Role": formData.role,
            "X-Price": formData.price,
            "X-Comment": formData.comment,
            "X-Save-Info": formData.saveInfo.toString(),
          },
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      const result = await response.json();
      console.log("API response:", result);

      toast.success("Booking saved successfully!");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.error("Error during submission:", err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        className="custom-toast-container"
        toastClassName="custom-toast"
      />
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Book Your Appointment</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services__area section-py-130">
        <div className="container">
          <section className="pt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8">
                  <div className="contact__form-wrap">
                    <h2 className="title">Book Your Appointment</h2>

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
                        <label htmlFor="role">Selected Role </label>
                        <input
                          className="disabled-input"
                          id="role"
                          name="role"
                          type="text"
                          value={formData.role}
                          disabled
                        />
                      </div>
                      <div className="form-grp">
                        <label htmlFor="price">Selected Price </label>
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
                        {isSubmitting ? (
                          <span>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting...
                          </span>
                        ) : (
                          "Submit Message"
                        )}
                      </button>
                    </form>
                    <p className="ajax-response mb-0"></p>
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
