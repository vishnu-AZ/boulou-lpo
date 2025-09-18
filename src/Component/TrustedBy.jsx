import React from "react";


const logos = [
  "/assets/img/brand/brand_img01.png",
  "/assets/img/brand/brand_img02.png",
  "/assets/img/brand/brand_img03.png",
  "/assets/img/brand/brand_img04.png",
  "/assets/img/brand/brand_img05.png",
  "/assets/img/brand/brand_img06.png",
];

const TrustedBy = () => {
  return (
    <section className="trustedby-section container">
      <h2 className="trustedby-title">Trusted By</h2>
      <div className="trustedby-marquee">
        <div className="trustedby-track">
          {/* duplicate list for seamless loop */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="trustedby-logo">
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
