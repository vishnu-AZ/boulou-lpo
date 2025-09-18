import React from "react";

/**
 * Preloader.jsx — Simple Blue Loader/Spinner Component
 * ---------------------------------------------------
 * Props:
 *  - visible?: boolean (default: true)
 *  - fullscreen?: boolean (default: true)
 *  - size?: number (default: 56)
 *  - className?: string
 *
 * Usage:
 *  <Preloader />
 *  <Preloader size={40} />
 *  <Preloader visible={isLoading} fullscreen={false} />
 */

const Spinner = ({ size = 56, stroke = 4 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    role="img"
    aria-label="Loading"
    style={{ display: "block", color: "#1d4ed8" }} // Blue color
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth={stroke}
    />
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeDasharray="90 150"
      strokeDashoffset="0"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function Preloader({
  visible = true,
  fullscreen = true,
  size = 56,
  className = "",
}) {
  if (!visible) return null;

  const containerStyle = fullscreen
    ? {
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        background: "transparent", // No background color
      }
    : {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: size * 2,
        background: "transparent", // No background color
      };

  return (
    <div
      className={className}
      style={containerStyle}
      role="status"
      aria-live="polite"
    >
      <Spinner size={size} />
    </div>
  );
}
