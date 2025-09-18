import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import right from "../../public/assets/img/icons/right_arrow.svg";
import privacypolicy from "../assets/privacy-policy-service-documents-terms-use-concept.jpg";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Boulou LPO</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Boulou LPO to understand how we collect, use, and protect your personal information, including SMS communication practices."
        />
      </Helmet>

      {/* Banner with background image */}
      <section
        className="banner__area-two fix d-flex align-items-center"
        style={{
          backgroundImage: `url(${privacypolicy})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "350px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)", // Light overlay to ensure text visibility
          }}
        ></div>
        <div className="container position-relative">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-10 text-center">
              <h2
                className="title mb-4"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#ffffffff", // Blue text for contrast with white image background
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  animation: "fadeInDown 1s ease-out",
                }}
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Privacy Policy
              </h2>
              <p
                className="mb-0"
                style={{
                  fontSize: "1.25rem",
                  color: "#ffffffff", // Blue text for contrast
                }}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Effective Date: August 20, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="about__area-two section-py-130 pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about__content-two">
                <div className="section__title mb-4">
                  <span
                    className="sub-title d-block mb-2"
                    style={{
                      color: "#003087",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginTop: "20px",
                    }}
                  >
                    Privacy Policy 
                  </span>
                </div>
                <div className="privacy-content">
                  <div
                    className="card shadow-sm border-0"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                    }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <div
                        className="text-muted"
                        style={{ lineHeight: "1.75", fontSize: "1rem" }}
                      >
                        <p className="mb-4">
                          Boulou LPO (“we,” “us,” or “our”) is committed to protecting your
                          privacy. This Privacy Policy explains how we collect, use, share, and
                          protect your personal information when you interact with our website
                          and services, including SMS communication. By using our website and
                          services, you consent to the data practices described in this policy.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          1. Information We Collect
                        </h4>
                        <p className="mb-3">We collect the following types of personal information:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <strong className="text-dark">Contact Information:</strong> Name, email address, phone number, and
                            other details provided when using our services, filling out forms, or
                            contacting us.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">SMS Information:</strong> If you opt in to receive SMS communications,
                            we collect your phone number and any information you provide via
                            text.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Payment and Transaction Information:</strong> Billing details and
                            transaction data for any paid services.
                          </li>
                          <li className="mb-0">
                            <strong className="text-dark">Technical Data:</strong> IP addresses, browser type, device information,
                            and website usage details collected via cookies and similar tracking
                            tools.
                          </li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          2. How We Use Your Information
                        </h4>
                        <p className="mb-3">We use the information collected for the following purposes:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <strong className="text-dark">Providing Services:</strong> Delivering legal process outsourcing
                            services, responding to inquiries, and managing client requests.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">SMS Communication:</strong> Sending service updates, appointment
                            reminders, or important notifications via SMS with your consent.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Marketing Communications:</strong> Sending promotional emails or SMS
                            messages with your explicit consent (you can opt out anytime).
                          </li>
                          <li className="mb-0">
                            <strong className="text-dark">Service Improvements:</strong> Analyzing technical data to enhance our
                            website, services, and user experience.
                          </li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          3. SMS Messaging Policy
                        </h4>
                        <p className="mb-3">
                          We use RingCentral to send SMS messages. By opting in, you agree to
                          the following:
                        </p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <strong className="text-dark">Purpose of SMS:</strong> Messages may include service updates,
                            appointment reminders, or promotions.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Frequency:</strong> You may receive up to two SMS messages per week.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Opting Out:</strong> You may opt out at any time by replying “STOP” or
                            contacting us directly.
                          </li>
                          <li className="mb-0">
                            <strong className="text-dark">Data Security:</strong> Your phone number and SMS content are processed
                            according to RingCentral’s Privacy Policy.
                          </li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          4. Potential Fees for SMS Messaging
                        </h4>
                        <p className="mb-4">
                          Standard message and data rates may apply, depending on your carrier’s
                          pricing plan. Fees may vary for domestic and international messages.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          5. Types of SMS Communications
                        </h4>
                        <p className="mb-3">
                          If you consent to receive messages from Boulou LPO, you may receive
                          texts such as:
                        </p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            “Hi, this is Boulou LPO. We offer document review and contract
                            management services to support your legal operations. Call us at
                            1-561-409-5858 or visit www.bouloulpo.com. To opt out, reply STOP.”
                          </li>
                          <li className="mb-0">
                            “Hi [Customer Name], this is [Your Name] from Boulou LPO. We’d love
                            to discuss how our LPO solutions can streamline your business. Reply
                            to schedule a call.”
                          </li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          6. Opt-In Methods
                        </h4>
                        <p className="mb-3">You may opt in to receive SMS messages by:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">Verbally agreeing during a conversation</li>
                          <li className="mb-2">Submitting an online form</li>
                          <li className="mb-0">Filling out a paper form</li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          7. Opt-Out Methods
                        </h4>
                        <p className="mb-3">To stop receiving SMS messages, you can:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">Reply “STOP” to any SMS</li>
                          <li className="mb-0">Contact us directly to request removal from our messaging list</li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          8. How We Share Your Information
                        </h4>
                        <p className="mb-3">We do not sell or rent your personal information. We may share data in the following cases:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <strong className="text-dark">Service Providers:</strong> Trusted partners such as RingCentral (for
                            SMS communications), payment processors, and web analytics tools.
                          </li>
                          <li className="mb-0">
                            <strong className="text-dark">Legal Compliance:</strong> If required by law or necessary to protect
                            our rights and interests.
                          </li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          9. Data Security
                        </h4>
                        <p className="mb-4">
                          We implement appropriate technical and organizational measures to
                          protect your personal information from unauthorized access,
                          disclosure, alteration, or destruction. However, no method of
                          transmission or storage is completely secure.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          10. Your Rights
                        </h4>
                        <p className="mb-3">
                          Depending on your location, you may have rights under laws such as
                          GDPR or CCPA, including:
                        </p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">
                            <strong className="text-dark">Right to Access:</strong> Request details about the personal information
                            we hold about you.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Right to Correct:</strong> Request corrections to inaccurate or
                            incomplete information.
                          </li>
                          <li className="mb-2">
                            <strong className="text-dark">Right to Delete:</strong> Request deletion of your information, subject
                            to legal obligations.
                          </li>
                          <li className="mb-0">
                            <strong className="text-dark">Right to Opt-Out:</strong> Limit marketing communications or certain
                            processing activities.
                          </li>
                        </ul>
                        <p className="mb-4">To exercise these rights, contact us at 1-561-409-5858.</p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          11. Cookies and Tracking Technologies
                        </h4>
                        <p className="mb-3">We use cookies and similar tracking technologies to:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">Remember user preferences</li>
                          <li className="mb-2">Analyze website traffic</li>
                          <li className="mb-0">Offer personalized content</li>
                        </ul>
                        <p className="mb-4">
                          You can control or disable cookies through your browser settings, but
                          this may affect site functionality.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          12. Data Retention
                        </h4>
                        <p className="mb-4">
                          We retain personal information as long as necessary for business
                          purposes or legal compliance. When no longer needed, we securely delete
                          or anonymize the data.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          13. Children’s Privacy
                        </h4>
                        <p className="mb-4">
                          Our services are not intended for individuals under 18 years old. We do
                          not knowingly collect personal information from children. If
                          discovered, such data will be deleted promptly.
                        </p>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          14. Changes to This Privacy Policy
                        </h4>
                        <p className="mb-3">
                          We may update this Privacy Policy from time to time. If significant
                          changes occur, we will:
                        </p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">Update the “Effective Date” at the top of this page</li>
                          <li className="mb-0">Provide notice via our website or email, if appropriate</li>
                        </ul>

                        <h4
                          className="fw-bold text-dark mb-3 mt-5"
                          style={{ fontSize: "1.75rem" }}
                        >
                          15. Contact Us
                        </h4>
                        <p className="mb-3">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                        <ul className="list-unstyled mb-4">
                          <li className="mb-2">Email: paralegalservices@bouloulpo.com</li>
                          <li className="mb-2">Phone: 1-561-409-5858</li>
                          <li className="mb-0">Address: 4400 N Federal Hwy, Suite 8, Boca Raton, FL 33431</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-center">
                    <Link
                      to="/"
                      className="tg-btn d-inline-flex align-items-center"
                      style={{
                        backgroundColor: "#003087",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = "#003087")}
                    >
                      Back to Home
                      <img src={right} alt="arrow" className="ms-2 injectable" style={{ width: "20px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;