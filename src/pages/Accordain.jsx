import { useState } from "react";

const Faq = () => {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  const faqData = [
    {
      question: "What services does BoulouLPO provide?",
      answer:
        "We offer bilingual legal process outsourcing services including legal research, drafting, document review, paralegal assistance, and administrative legal support for law firms and corporate legal departments.",
    },
    {
      question: "What languages do you support?",
      answer:
        "Our team provides services in English, French, and Spanish, allowing law firms to operate smoothly in multiple jurisdictions and across bilingual markets.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "You can begin with a free consultation through our website or contact page. Once we understand your needs, we'll prepare a proposal and begin onboarding your team.",
    },
    {
      question: "Is your team qualified in legal processes?",
      answer:
        "Yes. Our legal professionals are trained in global legal systems and have prior experience working with international law firms, ensuring quality and accuracy in every task.",
    },
    {
      question: "Can BoulouLPO handle confidential data securely?",
      answer:
        "Absolutely. We follow strict data privacy protocols and confidentiality agreements to ensure your sensitive legal information is always protected.",
    },
    {
      question: "Do you offer full-time and contract-based support?",
      answer:
        "Yes. We provide flexible engagement models, including full-time dedicated legal assistants or contract-based teams based on your firm's needs.",
    },
  ];

  return (
    <>
      <style>{`
        .faq-section {
          padding: 0px 0;
          background-color: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .sub-title {
          color: #0047ff;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          display: block;
        }

        .main-title {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
        }

        .accordion-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .accordion-item {
          background: white;
          border-radius: 10px;
          margin-bottom: 15px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .accordion-item:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .accordion-button {
          width: 100%;
          background: none;
          border: none;
          padding: 25px 30px;
          text-align: left;
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .accordion-button:hover {
          background-color: #f8f9fa;
        }

        .accordion-button.active {
          background-color: #e3f2fd;
          color: #0047ff;
        }

        .accordion-question {
          flex: 1; /* Pushes the icon to the far right */
        }

        .accordion-icon {
          font-size: 24px;
          font-weight: bold;
          color: #0047ff;
          transition: transform 0.3s ease;
          min-width: 30px;
          text-align: center;
        }

        .accordion-icon.rotated {
          transform: rotate(45deg);
        }

        .accordion-content {
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-content.open {
          max-height: 200px;
        }

        .accordion-content.closed {
          max-height: 0;
        }

        .accordion-body {
          padding: 0 30px 25px 30px;
        }

        .accordion-body p {
          margin: 0;
          color: #666;
          line-height: 1.6;
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 28px;
          }

          .accordion-button {
            padding: 20px;
            font-size: 16px;
          }

          .accordion-body {
            padding: 0 20px 20px 20px;
          }

          .accordion-body p {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="main-title">Got any questions?</h2>
          </div>

          <div className="accordion-container">
            {faqData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-button ${
                    openItem === index ? "active" : ""
                  }`}
                  onClick={() => toggleItem(index)}
                  type="button"
                >
                  <span className="accordion-question">{item.question}</span>
                  <span
                    className={`accordion-icon ${
                      openItem === index ? "rotated" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`accordion-content ${
                    openItem === index ? "open" : "closed"
                  }`}
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
