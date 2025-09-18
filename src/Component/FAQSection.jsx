// src/components/FAQSection.jsx
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    question: "1. What types of legal support does BoulouLPO provide?", 
    answer: "We offer skilled legal professionals—including paralegals, case coordinators, case managers, intake specialists, legal administrators, and receptionists—across 26 practice areas." 
  },
  { 
    question: "2. Do you provide licensed attorneys or legal advice?", 
    answer: "No. BoulouLPO does not provide attorneys or legal representation. Our team delivers specialized support services that enhance efficiency and free up your attorneys to focus on practicing law." 
  },
  { 
    question: "3. Can I get support in more than one practice area at the same time?", 
    answer: "Yes. Many of our clients require assistance across multiple practice areas, and our team can scale to support your firm’s specific needs." 
  },
  { 
    question: "4. How does BoulouLPO ensure quality and confidentiality?", 
    answer: "All professionals undergo rigorous training, follow strict compliance protocols, and operate from secure, compliant facilities, ensuring accuracy, efficiency, and complete confidentiality." 
  },
  { 
    question: "5. How quickly can I onboard a legal professional for my team?", 
    answer: "Onboarding can begin immediately. We match you with qualified professionals based on your practice area needs, allowing you to scale support quickly and seamlessly." 
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section-container">
      <h2 className="faq-title">FAQs About Boulou LPO Legal Services</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              onClick={() => toggleFAQ(index)}
              className="faq-question"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="faq-icon" />
              ) : (
                <Plus className="faq-icon" />
              )}
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
