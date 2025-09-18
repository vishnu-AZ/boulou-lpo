import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const services = [
    "Web Development",
    "Graphic Design",
    "SEO Optimization",
    "Social Media Management",
    "Other"
  ];

  useEffect(() => {
    // Open popup after 500ms
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you shortly.");
    setOpen(false);
  };

  return (
    <div>
      <h1>Welcome to Our Service Landing Page</h1>

      <Popup open={open} modal closeOnDocumentClick={false}>
        {(close) => (
          <div className="modal" style={{ padding: "20px", maxWidth: "400px" }}>
            <h2>Request a Service</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />
              <br />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <br />
              <select
                name="service"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((srv, i) => (
                  <option key={i} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" style={{ marginTop: "10px" }}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default LandingPage;
