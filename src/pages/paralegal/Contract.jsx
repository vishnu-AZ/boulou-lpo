import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import axios from "axios";
import { Link } from "react-router-dom";
import { contractServiceSlug } from "../../Component/slug.js";

const Contract = () => {
  const [contractServices, setContractServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_data2")
      .then((res) => {
        setContractServices(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching contract services:", err);
      });
  }, []);

  const getSlugForService = (serviceName) => {
    const match = contractServiceSlug.find(
      (item) => item.name.toLowerCase() === serviceName.toLowerCase()
    );
    return match ? match.slug : "#";
  };

  return (
    <>
      <Helmet>
        <title>Efficient Contract Life Cycle Management Services | Boulou LPO
        </title>
        <meta name="description" content="Trust Boulou LPO for contract life cycle management services tailored for legal professionals. Secure, streamlined contract handling from start to finish." />
      </Helmet>
      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Contract Life Cycle Management</h2>
                  <p>
                    BoulouLPO offers comprehensive contract life cycle
                    services—from drafting and redlining to compliance and
                    renewal—ensuring control, visibility, and reduced legal risk
                    at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services__area-seven section-py-130 pb-0">
        <div className="container">
          <div className="section__title text-center mb-40">
            <h2 className="title">Our Contract Services</h2>
          </div>
          <div className="row gutter-y-30 justify-content-center pb-5">
            {contractServices.length > 0 ? (
              contractServices.map((service, index) => {
                const slug = getSlugForService(service.service_name);

                return (
                  <div className="col-lg-4 col-md-6" key={index}>
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
                <p>Loading services or no data found...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contract;

