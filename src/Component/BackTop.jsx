import { useEffect, useState } from "react";
import "./BackTop.css";

export default function BackToTopButton({
    threshold = 300,
    smooth = true,
    ariaLabel = "Back to top",
}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setVisible(window.scrollY > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: smooth ? "smooth" : "auto",
        });
    };

    return (
        <button
            type="button"
            className={`back-to-top ${visible ? "show" : ""}`}
            onClick={handleClick}
            aria-label={ariaLabel}
        >
            <span className="back-to-top-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 15l-6-6-6 6" />
                </svg>
            </span>
            <span className="back-to-top-circle"></span>
        </button>
    );
}
