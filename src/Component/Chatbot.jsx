// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import styles from "/src/Chatbox.module.css";
// import {
//   FaMicrophone,
//   FaPaperPlane,
//   FaSmile,
//   FaPaperclip,
// } from "react-icons/fa";

// function Chatbox() {
//   const [open, setOpen] = useState(false);
//   const [showForm, setShowForm] = useState(true);
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone_number: "",
//     company_name: "",
//   });
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);
//   const recognitionRef = useRef(null);
//   const [isListening, setIsListening] = useState(false);

//   // Scroll to bottom on new message
//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   // Check if form was already submitted
//   useEffect(() => {
//     const isFormSubmitted = localStorage.getItem("isFormSubmitted");
//     if (isFormSubmitted === "true") {
//       setShowForm(false);

//       // Show welcome back message if chat is empty
//       if (messages.length === 0) {
//         setMessages([
//           {
//             from: "bot",
//             text: "Hi there, welcome back to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           },
//         ]);
//         showMenuOptions();
//       }
//     }
//   }, []);

//   // Helper to detect URLs in bot messages and render clickable links
//   function renderMessageText(text) {
//     const urlRegex = /(https?:\/\/[^\s]+)/g;
//     const parts = text.split(urlRegex);

//     return parts.map((part, idx) => {
//       if (urlRegex.test(part)) {
//         return (
//           <a
//             key={idx}
//             href={part}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "blue", textDecoration: "underline" }}
//           >
//             {part}
//           </a>
//         );
//       } else {
//         return part;
//       }
//     });
//   }

//   const handleInputChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api.bouloulpo.com/api/lead",
//         userData
//       );

//       setShowForm(false);
//       localStorage.setItem("isFormSubmitted", "true");
//       localStorage.setItem("userId", response.data.id);

//       setMessages([
//         {
//           from: "bot",
//           text: "Hi there, welcome to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);

//       showMenuOptions();
//     } catch (error) {
//       console.error("Error saving user data:", error);
//       alert(
//         "There was an error submitting your information. Please try again."
//       );
//     }
//   };

//   const showMenuOptions = () => {
//     const menuOptions = [
//       "* About us",
//       "* Practices we serve",
//       "* Our Services",
//       "* Tailored Roles",
//       "* Book a consultation",
//       "* FAQs",
//       "* Ask a question",
//     ];

//     setMessages((prev) => [
//       ...prev,
//       {
//         from: "bot",
//         text: menuOptions.join("\n"),
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         isMenu: true,
//       },
//     ]);
//   };

//   const handleContactMethodSelect = async (method) => {
//     try {
//       const lead_id = localStorage.getItem("userId");

//       await axios.patch(`https://api.bouloulpo.com/api/lead/${lead_id}/`, {
//         contact_method: method,
//       });

//       setMessages((prev) => [
//         ...prev,
//         {
//           from: "bot",
//           text: "Perfect! I've passed your details to our team.\nYou'll hear from us soon to finalize your consultation.",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           showMenuButton: true,
//         },
//       ]);
//     } catch (error) {
//       console.error("Error updating contact method:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           from: "bot",
//           text: "Perfect! I've passed your details to our team.\nYou'll hear from us soon to finalize your consultation.",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           showMenuButton: true,
//         },
//       ]);
//     }
//   };

//   const handleMenuSelect = (option) => {
//     let response = "";

//     switch (option) {
//       case "About us":
//         response =
//           "BoulouLPO is a trusted Legal Process Outsourcing partner for law firms and businesses worldwide. We specialize in delivering accurate, timely, and cost-effective legal support—from contract drafting and document review to complex legal research and litigation assistance. Our goal is to enhance efficiency so your team can focus on client strategy and growth.\n\nHow can I help you today?";
//         break;
//       case "Practices we serve":
//         response = `At BoulouLPO, we provide tailored support across a wide range of legal practices. 
// Here are some of the most common and in-demand areas we serve:

// • Personal Injury Law - We assist personal injury firms with medical record reviews, discovery, demand letters, and trial prep, helping attorneys handle high caseloads efficiently.
// • Criminal Law - Our team supports defense and prosecution with case research, motion drafting, document management, and trial preparation.
// • Family Law - From divorce filings and custody agreements to adoption and domestic violence cases, we provide research and drafting support for family law attorneys.
// • Immigration Law - We prepare and review visa applications, green card filings, asylum petitions, and citizenship documentation to support immigration practices.
// • Employment & Labor Law - Our team helps with workplace-related matters such as wrongful termination, discrimination, wage disputes, and compliance research.

// For a more in depth look at the practices/specialties we serve, click here https://bouloulpo.com/Specialties`;
//         break;
//       case "Our Services":
//         response = `BoulouLPO delivers comprehensive legal support services tailored to law firms and attorneys. Our core services include but are not limited to:

// * Contract Drafting & Review – preparing, analyzing, and managing agreements to reduce risks and ensure compliance.

// * Legal Research & Case Summaries – accurate, multilingual research with concise summaries to support case strategy.

// * Litigation Support – assistance with discovery, document review, trial preparation, and case management.

// * Compliance & Regulatory Support – monitoring laws, preparing compliance reports, and assisting with audits.

// * Client Intake & Case Management – handling client onboarding, information gathering, and case tracking for efficiency.

// * Administrative Legal Support – scheduling, correspondence, file organization, and receptionist services to keep firms running smoothly.

// For a more in depth look at our services, click here https://bouloulpo.com/service"
// `;
//         break;
//       case "Tailored Roles":
//         response = `"BoulouLPO offers dedicated legal professionals who integrate seamlessly with your team.  
// Our goal is to reduce costs, improve efficiency, and give you reliable support across multiple roles.  
// Here are some of the key roles we provide:

// * Case Coordinators - Ensure smooth workflows by organizing case files, deadlines, and communications.
// * Case Managers - Oversee case progress, liaise with clients, and support attorneys in executing strategy.
// * Paralegals - Assist with research, drafting, contract management, discovery, and trial preparation.
// * Secretaries & Receptionists - Manage correspondence, scheduling, and serve as the first point of contact for clients.
// * Legal Administrators - Handle document management, compliance tracking, and office organization.
// * Intake Specialists - Manage new client onboarding, gather case information, and ensure a seamless intake process.

// Please click on the role/roles you are interested in."
// `;
//         break;
//       case "Book a consultation":
//         response = `Thank you, Our team will reach out within 24 business hours to confirm your consultation. Would you prefer to be contacted by:`;
//         break;
//       case "Ask a question":
//         response = `Sure! Please type your question below and I'll do my best to help.\n(If I can't answer, I'll connect you with our team.)`;
//         break;
//       default:
//         response = `You selected: ${option}. How can I assist you with this?`;
//     }

//     setMessages((prev) => [
//       ...prev,
//       {
//         from: "user",
//         text: option,
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//       {
//         from: "bot",
//         text: response,
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         showMenuButton: option !== "Book a consultation",
//         showContactOptions: option === "Book a consultation",
//       },
//     ]);
//   };

//   const handleSend = async () => {
//     const now = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });

//     if (!input.trim()) return;
//     const userMsg = {
//       from: "user",
//       text: input,
//       timestamp: now,
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setLoading(true);

//     try {
//       const sessionId = localStorage.getItem("session_id");

//       const response = await axios.post("https://api.bouloulpo.com/api/chat", {
//         message: input,
//         session_id: sessionId || null,
//       });

//       if (response.data.session_id && !sessionId) {
//         localStorage.setItem("session_id", response.data.session_id);
//       }

//       setTimeout(() => {
//         const botReply = {
//           from: "bot",
//           text: response.data.response || "No reply from Boulou LPO AI.",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           showMenuButton: true,
//         };
//         setMessages((prev) => [...prev, botReply]);
//         setLoading(false);
//       }, 3000);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           from: "bot",
//           text: "Oops! Something went wrong. Try again later.",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           showMenuButton: true,
//         },
//       ]);
//       setLoading(false);
//       console.error("Chat error:", error);
//     }
//   };

//   const handleNewChat = () => {
//     localStorage.removeItem("session_id");
//     setMessages([
//       {
//         from: "bot",
//         text: "Hi there, welcome to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       },
//     ]);
//     setInput("");
//   };

//   const handleVoiceInput = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Speech recognition is not supported in this browser.");
//       return;
//     }

//     if (!recognitionRef.current) {
//       const SpeechRecognition = window.webkitSpeechRecognition;
//       const recognition = new SpeechRecognition();
//       recognition.lang = "en-US";
//       recognition.interimResults = false;
//       recognition.maxAlternatives = 1;

//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setInput(transcript);
//         setIsListening(false);
//       };

//       recognition.onerror = (event) => {
//         console.error("Speech recognition error:", event.error);
//         setIsListening(false);
//       };

//       recognition.onend = () => {
//         setIsListening(false);
//       };

//       recognitionRef.current = recognition;
//     }

//     if (isListening) {
//       recognitionRef.current.stop();
//       setIsListening(false);
//     } else {
//       recognitionRef.current.start();
//       setIsListening(true);
//     }
//   };

//   return (
//     <>
//       <button className={styles.fab} onClick={() => setOpen(!open)}>
//         <span className={`${styles.icon} ${open ? styles.open : styles.close}`}>
//           {open ? "✕" : "💬"}
//         </span>
//       </button>

//       {open && (
//         <div className={styles.chatbox}>
//           <div className={styles.header}>
//             <div className={styles.headerContent}>
//               <span>BoulouLPO AI Assistant</span>
//               <button className={styles.newChatBtn} onClick={handleNewChat}>
//                 🆕 New Chat
//               </button>
//             </div>
//           </div>

//           {showForm ? (
//             <div className={styles.formContainer}>
//               <h3>Welcome to BoulouLPO!</h3>
//               <p>Please provide your details to get started</p>
//               <form onSubmit={handleFormSubmit} className={styles.userForm}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={userData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={userData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone_number"
//                   placeholder="Phone number"
//                   value={userData.phone_number}
//                   onChange={handleInputChange}
//                 />
//                 <input
//                   type="text"
//                   name="company_name"
//                   placeholder="Name of your company"
//                   value={userData.company_name}
//                   onChange={handleInputChange}
//                 />
//                 <button type="submit" className={styles.submitBtn}>
//                   Start Chat
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <>
//               <div className={styles.messages}>
//                 {messages.map((msg, idx) => (
//                   <div
//                     key={idx}
//                     className={`${styles.message} ${msg.from === "user" ? styles.user : styles.bot
//                       }`}
//                   >
//                     <div>
//                       {msg.from === "bot" ? renderMessageText(msg.text) : msg.text}
//                     </div>
//                     <div className={styles.timestamp}>{msg.timestamp}</div>

//                     {msg.isMenu && (
//                       <div className={styles.menuOptions}>
//                         {msg.text.split("\n").map(
//                           (option, i) =>
//                             option.trim() && (
//                               <button
//                                 key={i}
//                                 className={styles.menuOption}
//                                 onClick={() =>
//                                   handleMenuSelect(option.replace("* ", ""))
//                                 }
//                               >
//                                 {option.replace("* ", "")}
//                               </button>
//                             )
//                         )}
//                       </div>
//                     )}

//                     {msg.showContactOptions && (
//                       <div className={styles.contactOptions}>
//                         <button
//                           className={styles.contactOption}
//                           onClick={() => handleContactMethodSelect("Phone")}
//                         >
//                           Phone
//                         </button>
//                         <button
//                           className={styles.contactOption}
//                           onClick={() => handleContactMethodSelect("Email")}
//                         >
//                           Email
//                         </button>
//                       </div>
//                     )}

//                     {msg.showMenuButton && (
//                       <button
//                         className={styles.menuButton}
//                         onClick={showMenuOptions}
//                       >
//                         Main Menu
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 {loading && (
//                   <div className={`${styles.message} ${styles.bot}`}>
//                     <div className={styles.typing}>
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </div>
//                   </div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>
//               <div className={styles.inputArea}>
//                 <div className={styles.inputIcons}>
//                   {/* <FaPaperclip className={styles.inputIcon} />
//                   <FaSmile className={styles.inputIcon} /> */}
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Type your message or use mic..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                   className={styles.inputBox}
//                 />
//                 <span onClick={handleVoiceInput} className={styles.iconMic}>
//                   <FaMicrophone
//                     size={16}
//                     className={isListening ? styles.listening : ""}
//                   />
//                 </span>
//                 <button className={styles.sendButton} onClick={handleSend}>
//                   <FaPaperPlane size={14} />
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// export default Chatbox;


//----------------------//--------------------//




import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "/src/Chatbox.module.css";
import {
  FaMicrophone,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
} from "react-icons/fa";

function Chatbox() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone_number: "",
    company_name: "",
  });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);

  // WebSocket ref
  const wsRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("isFormSubmitted");
    if (isFormSubmitted === "true") {
      setShowForm(false);

      // Show welcome back message if chat is empty
      if (messages.length === 0) {
        setMessages([
          {
            from: "bot",
            text: "Hi there, welcome back to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        showMenuOptions();
      }
    }
  }, []);

  // Open WebSocket connection after form submit
  useEffect(() => {
    if (!showForm) {
      wsRef.current = new WebSocket("wss://api.bouloulpo.com/ws/chat");

      wsRef.current.onopen = () => {
        console.log("✅ WebSocket connected");
      };

      wsRef.current.onmessage = (event) => {
        const token = event.data;

        if (token === "[END]") {
          // Mark last bot msg complete
          setMessages((prev) => {
            const updated = [...prev];
            if (updated.length) {
              updated[updated.length - 1].isComplete = true;
              updated[updated.length - 1].showMenuButton = true; // Add menu button
            }
            return updated;
          });
          setLoading(false);
          return;
        }

        // Append streaming tokens
        setMessages((prev) => {
          const lastMsg = prev[prev.length - 1];
          if (lastMsg?.from === "bot" && !lastMsg.isComplete) {
            const updated = [...prev];
            updated[updated.length - 1].text += token;
            return updated;
          } else {
            return [
              ...prev,
              {
                from: "bot",
                text: token,
                timestamp: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                isComplete: false,
                showMenuButton: false, // Initially hide menu button
              },
            ];
          }
        });
      };

      wsRef.current.onclose = () => {
        console.log("❌ WebSocket closed");
      };

      wsRef.current.onerror = (err) => {
        console.error("⚠️ WebSocket error:", err);
      };

      return () => {
        wsRef.current?.close();
      };
    }
  }, [showForm]);

  // Helper to detect URLs in bot messages and render clickable links
  function renderMessageText(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, idx) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={idx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {part}
          </a>
        );
      } else {
        return part;
      }
    });
  }

  // Helper to format text with line breaks
  function formatTextWithLineBreaks(text) {
    // Check if text contains HTML tags
    if (/<[a-z][\s\S]*>/i.test(text)) {
      // Extract URLs that aren't already in anchor tags
      const urlRegex = /(https?:\/\/[^\s<>]+)(?![^<>]*>)/g;
      let processedText = text;

      // Replace standalone URLs with anchor tags
      processedText = processedText.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">${url}</a>`;
      });

      // Replace newlines with <br> tags
      processedText = processedText.replace(/\n/g, "<br />");

      return <span dangerouslySetInnerHTML={{ __html: processedText }} />;
    }

    // Original logic for text without HTML
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, idx) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={idx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {part}
          </a>
        );
      } else {
        return part.split("\n").map((line, i) => (
          <span key={`${idx}-${i}`}>
            {line}
            <br />
          </span>
        ));
      }
    });
  }

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store user data via API
      const response = await axios.post(
        "https://api.bouloulpo.com/api/lead",
        userData
      );

      // Hide form and show chat
      setShowForm(false);

      localStorage.setItem("isFormSubmitted", "true");
      localStorage.setItem("userId", response.data.id);

      // Add welcome message
      setMessages([
        {
          from: "bot",
          text: "Hi there, welcome to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          showMenuButton: true,
        },
      ]);

      // Show menu options
      showMenuOptions();
    } catch (error) {
      console.error("Error saving user data:", error);
      alert(
        "There was an error submitting your information. Please try again."
      );
    }
  };

  const showMenuOptions = () => {
    const menuOptions = [
      "About us",
      "Practices we serve",
      "Our Services",
      "Tailored Roles",
      "Book a consultation",
      "FAQs",
      "Ask a question",
    ];

    setMessages((prev) => [
      ...prev,
      {
        from: "bot",
        text: "Main Menu",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMenu: true,
        menuOptions: menuOptions,
        showMenuButton: false,
      },
    ]);
  };

  const handleContactMethodSelect = async (method) => {
    try {
      const lead_id = localStorage.getItem("userId");

      // Update user's contact preference via API
      await axios.patch(`https://api.bouloulpo.com/api/lead/${lead_id}/`, {
        contact_method: method,
      });

      // Show confirmation message
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Perfect! I've passed your details to our team.\nYou'll hear from us soon to finalize your consultation.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          showMenuButton: true,
        },
      ]);
    } catch (error) {
      console.error("Error updating contact method:", error);

      // Fallback message if API fails
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Perfect! I've passed your details to our team.\nYou'll hear from us soon to finalize your consultation.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          showMenuButton: true,
        },
      ]);
    }
  };

  const handleMenuSelect = (option) => {
    let response = "";
    switch (option) {
      case "About us":
        response =
          "BoulouLPO is a trusted Legal Process Outsourcing partner for law firms and businesses worldwide. We specialize in delivering accurate, timely, and cost-effective legal support—from contract drafting and document review to complex legal research and litigation assistance. Our goal is to enhance efficiency so your team can focus on client strategy and growth.\n\nHow can I help you today?";
        break;
      case "Practices we serve":
        response =
          "At BoulouLPO, we provide tailored support across a wide range of legal practices.\nHere are some of the most common and in-demand areas we serve:\n\n" +
          "• <a href='https://bouloulpo.com/Personal' target='_blank' style='color: blue; text-decoration: underline;'>Personal Injury Law</a> - We assist personal injury firms with medical record reviews, discovery, demand letters, and trial prep, helping attorneys handle high caseloads efficiently.\n" +
          "• <a href='https://bouloulpo.com/Criminal' target='_blank' style='color: blue; text-decoration: underline;'>Criminal Law</a> - Our team supports defense and prosecution with case research, motion drafting, document management, and trial preparation.\n" +
          "• <a href='https://bouloulpo.com/Family' target='_blank' style='color: blue; text-decoration: underline;'>Family Law</a> - From divorce filings and custody agreements to adoption and domestic violence cases, we provide research and drafting support for family law attorneys.\n" +
          "• <a href='https://bouloulpo.com/Immigration' target='_blank' style='color: blue; text-decoration: underline;'>Immigration Law</a> - We prepare and review visa applications, green card filings, asylum petitions, and citizenship documentation to support immigration practices.\n" +
          "• <a href='https://bouloulpo.com/Employment' target='_blank' style='color: blue; text-decoration: underline;'>Employment & Labor Law</a> - Our team helps with workplace-related matters such as wrongful termination, discrimination, wage disputes, and compliance research.\n\n" +
          "For a more in depth look at the practices/specialties we serve, click here https://bouloulpo.com/internalguide";
        break;
      case "Our Services":
        response =
          "BoulouLPO delivers comprehensive legal support services tailored to law firms and attorneys. Our core services include but are not limited to:\n\n" +
          "* <a href='https://bouloulpo.com/services/contract-drafting-review' target='_blank' style='color: blue; text-decoration: underline;'>Contract Drafting & Review</a> – preparing, analyzing, and managing agreements to reduce risks and ensure compliance.\n\n" +
          "* <a href='https://bouloulpo.com/services/legal-research-case-law-summaries' target='_blank' style='color: blue; text-decoration: underline;'>Legal Research & Case Summaries</a> – accurate, multilingual research with concise summaries to support case strategy.\n\n" +
          "* <a href='https://bouloulpo.com/services/preparing-repositories' target='_blank' style='color: blue; text-decoration: underline;'>Litigation Support</a> – assistance with discovery, document review, trial preparation, and case management.\n\n" +
          "* <a href='https://bouloulpo.com/services/preparing-repositories' target='_blank' style='color: blue; text-decoration: underline;'>Compliance & Regulatory Support</a> – monitoring laws, preparing compliance reports, and assisting with audits.\n\n" +
          "* <a href='https://bouloulpo.com/services/client-intake-management' target='_blank' style='color: blue; text-decoration: underline;'>Client Intake & Case Management</a> – handling client onboarding, information gathering, and case tracking for efficiency.\n\n" +
          "* <a href='https://bouloulpo.com/services/legal-administrative-assistant' target='_blank' style='color: blue; text-decoration: underline;'>Administrative Legal Support</a> – scheduling, correspondence, file organization, and receptionist services to keep firms running smoothly.\n\n" +
          "For a more in depth look at our services, click here https://bouloulpo.com/service";
        break;
      case "Tailored Roles":
        response =
          "BoulouLPO offers dedicated legal professionals who integrate seamlessly with your team.\nOur goal is to reduce costs, improve efficiency, and give you reliable support across multiple roles.\nHere are some of the key roles we provide:\n\n" +
          "* <a href='https://bouloulpo.com/Case-Coordinator' target='_blank' style='color: blue; text-decoration: underline;'>Case Coordinators</a> - Ensure smooth workflows by organizing case files, deadlines, and communications.\n" +
          "* <a href='https://bouloulpo.com/Case-Manager' target='_blank' style='color: blue; text-decoration: underline;'>Case Managers</a> - Oversee case progress, liaise with clients, and support attorneys in executing strategy.\n" +
          "* <a href='https://bouloulpo.com/Paralegal-Role' target='_blank' style='color: blue; text-decoration: underline;'>Paralegals</a> - Assist with research, drafting, contract management, discovery, and trial preparation.\n" +
          "* <a href='https://bouloulpo.com/Secretary-Receptionist' target='_blank' style='color: blue; text-decoration: underline;'>Secretaries & Receptionists</a> - Manage correspondence, scheduling, and serve as the first point of contact for clients.\n" +
          "* <a href='https://bouloulpo.com/Legal-Admin' target='_blank' style='color: blue; text-decoration: underline;'>Legal Administrators</a> - Handle document management, compliance tracking, and office organization.\n" +
          "* <a href='https://bouloulpo.com/Intake-Specialist' target='_blank' style='color: blue; text-decoration: underline;'>Intake Specialists</a> - Manage new client onboarding, gather case information, and ensure a seamless intake process.\n\n" +
          "Please click on the role/roles you are interested in.";
        break;
      case "Book a consultation":
        response =
          "Thank you, Our team will reach out within 24 business hours to confirm your consultation. Would you prefer to be contacted by:";
        break;
      case "FAQs":
        response =
          "Here are some frequently asked questions:\n\n1. How quickly can you start working on our projects?\n2. What are your pricing models?\n3. How do you ensure data security and confidentiality?\n4. Can you provide references from current clients?\n5. What industries do you specialize in?\n\nFor more detailed answers, visit our FAQ page at https://bouloulpo.com/faqs or ask me a specific question.";
        break;
      case "Ask a question":
        response =
          "Sure! Please type your question below and I'll do my best to help.\n(If I can't answer, I'll connect you with our team.)";
        setIsQuestion(true);
        break;
      default:
        response = `You selected: ${option}. How can I assist you with this?`;
    }

    setMessages((prev) => [
      ...prev,
      {
        from: "user",
        text: option,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      {
        from: "bot",
        text: response,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        showMenuButton: true,
        showContactOptions: option === "Book a consultation",
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg = { from: "user", text: input, timestamp: now };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Reset question state if it was set
    if (isQuestion) setIsQuestion(false);

    // Send via WebSocket if connected
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(input);
    } else {
      console.error("⚠️ WebSocket not connected");
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    localStorage.removeItem("session_id");
    setMessages([
      {
        from: "bot",
        text: "Hi there, welcome to BoulouLPO! I'm Lexi, your virtual assistant. How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        showMenuButton: true,
      },
    ]);
    showMenuOptions();
    setInput("");
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (!recognitionRef.current) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <>
      <button className={styles.fab} onClick={() => setOpen(!open)}>
        <span className={`${styles.icon} ${open ? styles.open : styles.close}`}>
          {open ? "✕" : "💬"}
        </span>
      </button>

      {open && (
        <div className={styles.chatbox}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <span>BoulouLPO AI Assistant</span>
              <button className={styles.newChatBtn} onClick={handleNewChat}>
                🆕 New Chat
              </button>
            </div>
          </div>

          {showForm ? (
            <div className={styles.formContainer}>
              <h3>Welcome to BoulouLPO!</h3>
              <p>Please provide your details to get started</p>
              <form onSubmit={handleFormSubmit} className={styles.userForm}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone number"
                  value={userData.phone_number}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="company_name"
                  placeholder="Name of your company"
                  value={userData.company_name}
                  onChange={handleInputChange}
                />
                <button type="submit" className={styles.submitBtn}>
                  Start Chat
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className={styles.messages}>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`${styles.message} ${msg.from === "user" ? styles.user : styles.bot
                      }`}
                  >
                    <div className={styles.messageContent}>
                      {msg.from === "bot"
                        ? formatTextWithLineBreaks(msg.text)
                        : msg.text}
                    </div>
                    <div className={styles.timestamp}>{msg.timestamp}</div>

                    {msg.isMenu && msg.menuOptions && (
                      <div
                        className={`${styles.menuOptions} ${styles.menuOptionsWide}`}
                      >
                        {msg.menuOptions.map((option, i) => (
                          <button
                            key={i}
                            className={styles.menuOption}
                            onClick={() => handleMenuSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {msg.showContactOptions && (
                      <div className={styles.contactOptions}>
                        <button
                          className={styles.contactOption}
                          onClick={() => handleContactMethodSelect("Phone")}
                        >
                          Phone
                        </button>
                        <button
                          className={styles.contactOption}
                          onClick={() => handleContactMethodSelect("Email")}
                        >
                          Email
                        </button>
                      </div>
                    )}

                    {msg.showMenuButton && (
                      <button
                        className={styles.menuButton}
                        onClick={showMenuOptions}
                      >
                        Main Menu
                      </button>
                    )}
                  </div>
                ))}
                {loading && (
                  <div className={`${styles.message} ${styles.bot}`}>
                    <div className={styles.typing}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className={styles.inputArea}>
                <div className={styles.inputIcons}>
                  <FaPaperclip className={styles.inputIcon} />
                  <FaSmile className={styles.inputIcon} />
                </div>
                <input
                  type="text"
                  placeholder="Type your message or use mic..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className={styles.inputBox}
                />
                <span onClick={handleVoiceInput} className={styles.iconMic}>
                  <FaMicrophone
                    size={16}
                    className={isListening ? styles.listening : ""}
                  />
                </span>
                <button className={styles.sendButton} onClick={handleSend}>
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Chatbox;
