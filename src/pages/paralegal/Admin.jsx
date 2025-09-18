import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";  
import { adminSupportsSlug } from "../../Component/slug";  

const Admin = () => {
  const [adminServices, setAdminServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bouloulpo.com/bouloulpo_admin/api/get_data4") 
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAdminServices(res.data);
        } else {
          console.warn("Unexpected API response:", res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching admin services:", err);
        setLoading(false);
      });
  }, []);

  const getSlugForService = (serviceName) => {
    const match = adminSupportsSlug.find(
      (item) => item.name.toLowerCase() === serviceName.toLowerCase()
    );
    return match ? match.slug : "#"; 
  };

  return (
    <>
      <Helmet>
        <title>
          Legal Administrative Assistant Services | Boulou LPO
        </title>
        <meta
          name="description"
          content="Enhance your firm’s efficiency with Boulou LPO’s skilled administrative support services. Trusted legal administrative assistants delivering accuracy and reliability."
        />
      </Helmet>

      <div className="container">
        <div className="breadcum-sub">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40 sub-ban-title-card">
                  <h2 className="title">Admin Support</h2>
                  <p>
                    BoulouLPO provides skilled administrative support services
                    tailored for law firms and legal departments—enhancing daily
                    operations, improving accuracy, and freeing up attorneys to
                    focus on core legal work.
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
            ) : adminServices.length > 0 ? (
              adminServices.map((service, index) => {
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

export default Admin;