import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { Helmet } from "react-helmet";
import { documentReviewSlug } from "../../Component/slug.js"; // import slug data

const Document = () => {
  const [documentServices, setDocumentServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_data3")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setDocumentServices(res.data);
        } else {
          console.warn("Unexpected response format:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch document services:", err);
        setLoading(false);
      });
  }, []);

  // helper: find slug for each service by matching name
  const getSlugForService = (serviceName) => {
    const match = documentReviewSlug.find(
      (item) => item.name.toLowerCase() === serviceName.toLowerCase()
    );
    return match ? match.slug : "#";
  };

  return (
    <>
      <Helmet>
        <title>
          Document Review Services | Outsource Document Review | Boulou LPO
        </title>
        <meta
          name="description"
          content="Outsource document review services with Boulou LPO. We deliver reliable, accurate document review solutions tailored to law firms and legal teams seeking efficiency."
        />
      </Helmet>

      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Document Review</h2>
                  <p>
                    BoulouLPO’s document review solutions ensure precise
                    analysis of legal documents for relevance, privilege, and
                    compliance—helping law firms and corporate legal teams
                    mitigate risk and improve decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services__area-seven section-py-130 service-page-card">
        <div className="container">
          <div className="row gutter-y-30 justify-content-center">
            {loading ? (
              <div className="col-12 text-center">
                <p>Loading services...</p>
              </div>
            ) : documentServices.length > 0 ? (
              documentServices.map((service, index) => {
                const slug = getSlugForService(service.service_name);

                return (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <div className="services__item-eight">
                      <div className="services__item-top">
                        <h2 className="title">
                          <Link to={`/services/${slug}`}>
                            {service.service_name}
                          </Link>
                        </h2>
                      </div>
                      <div className="services__content-eight">
                        <p className="card12">
                          {service.shart_description?.replace(/<[^>]*>?/gm, "")}
                        </p>
                        <Link
                          to={`/services/${slug}`}
                          className="tg-btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-12 text-center">
                <p>No services found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Document;