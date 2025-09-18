import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { draftComplaintSlug } from "../../Component/slug.js";

const Paralegal = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_data1")
      .then((response) => {
        // console.log("url response", response.data);
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  // helper: find slug from draftComplaintSlug by matching name
  const getSlugForService = (serviceName) => {
    const match = draftComplaintSlug.find(
      (item) => item.name.toLowerCase() === serviceName.toLowerCase()
    );
    return match ? match.slug : "#";
  };

  return (
    <>
      <Helmet>
        <title>
          Outsourced Paralegal Services | Multilingual Paralegal Support |
          Boulou LPO
        </title>
        <meta
          name="description"
          content="Streamline your legal workload with Boulou LPO’s outsourced paralegal services. Our multilingual team delivers accurate legal research, drafting, and case management support."
        />
      </Helmet>

      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Paralegal Service</h2>
                  <p>
                    BoulouLPO delivers accurate, timely, and multilingual
                    paralegal services to help law firms and legal departments
                    operate more efficiently and cost-effectively.
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
            {services.map((service, index) => {
              const slug = getSlugForService(service.service_name);

              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="services__item-eight">
                    <div className="service-page-card">
                      <div className="services__item-top">
                        <h2 className="title">
                          <Link to={`/services/${slug}`}>
                            {service.service_name}
                          </Link>
                          {/* <p>{service.service_name}</p> */}
                        </h2>
                      </div>
                      <div className="services__content-eight">
                        <p className="card12">
                          {service.shart_description?.replace(/<[^>]*>?/gm, "")}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/services/${slug}`}
                      className="tg-btn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Paralegal;
