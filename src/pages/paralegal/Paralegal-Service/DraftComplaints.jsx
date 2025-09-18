import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  draftComplaintSlug,
  contractServiceSlug,
  documentReviewSlug,
  adminSupportsSlug,
} from "../../../Component/slug.js";
import h8_hero_bg from "../../../../public/assets/img/banner/h8_hero_bg.jpg";
import h8_hero_bg_shape from "../../../../public/assets/img/banner/h8_hero_bg_shape.svg";
import comment from "../../../../public/assets/img/icons/comment.svg";
import right from "../../../../public/assets/img/icons/right_arrow.svg";
import h2_cta_shape from "../../../../public/assets/img/images/h2_cta_shape.svg";

const DraftComplaints = () => {
  const { slug } = useParams();
  const [serviceId, setServiceId] = useState(null);

  const [typesOfComplaints, setTypesOfComplaints] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [whyChooseUsExtra, setWhyChooseUsExtra] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [headingOne, setHeadingOne] = useState("");
  const [bottomheadingOne, setBottomHeadingOne] = useState("");
  const [headingTwo, setHeadingTwo] = useState("");
  const [headingThree, setHeadingThree] = useState("");
  const [headingThreeAlt, setHeadingThreeAlt] = useState("");
  const [boloueContent, setBoloueContent] = useState([]);
  const [helmetContent, setHelmetContent] = useState("");

  const [headingThreeName, setHeadingThreeName] = useState("");
  const [descriptionThree, setDescriptionThree] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");

  useEffect(() => {
    if (!slug) return;

    // ✅ find id from slug (check both arrays)
    const service =
      draftComplaintSlug.find((item) => item.slug === slug) ||
      contractServiceSlug.find((item) => item.slug === slug) ||
      documentReviewSlug.find((item) => item.slug === slug) ||
      adminSupportsSlug.find((item) => item.slug === slug);

    if (!service) return;
    setServiceId(service.id);

    const id = service.id;

    // ✅ Run all API calls in parallel
    Promise.all([
      axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_data10/${id}`),
      axios.get(
        `https://bouloulpo.com/bouloulpo_admin/api/get_datathree/${id}`
      ),
      axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_data66/${id}`),
      axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_data5/${id}`),
      axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_data7/${id}`),
      axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_data6/${id}`),
    ])
      .then(([res10, resThree, res66, res5, res7, res6]) => {
        // get_data10
        setWhyChooseUsExtra(res10.data.details || []);

        // get_datathree
        const dataThree = resThree.data;
        const cleanHtml = (html) =>
          html
            ?.replace(/\\r\\n/g, "")
            ?.replace(/\\n/g, "")
            ?.replace(/\\\//g, "/")
            ?.replace(/&lt;/g, "<")
            ?.replace(/&gt;/g, ">")
            ?.replace(/&quot;/g, '"')
            ?.replace(/&nbsp;/g, " ")
            ?.replace(/&rsquo;/g, "’")
            ?.replace(/^"+|"+$/g, "")
            ?.replace(/^<p>["']?/, "<p>")
            ?.replace(/<\\\/p>/g, "")
            ?.replace(/["']?<\/p>$/, "</p>")
            ?.trim() || "";

        setHeadingThreeName(dataThree.heading_three || "");
        setDescriptionThree(cleanHtml(dataThree.description_three));
        setDescriptionTwo(cleanHtml(dataThree.description_two));
        setHeadingThreeAlt(dataThree.headingstwo || "");

        // get_data66
        setBoloueContent(res66.data.details || []);

        // get_data5
        setTypesOfComplaints(res5.data.details || []);

        // get_data7
        setCategoryName(res7.data.service_name || "");
        setHelmetContent(res7.data);
        setDescription(res7.data.description || "");
        setHeadingOne(res7.data.heading_name || "");
        setBottomHeadingOne(res7.data.bottomheading_name || "");
        setHeadingTwo(res7.data.headingstwo1 || "");
        setHeadingThree(res7.data.heading_three || "");

        // get_data6
        setWhyChooseUs(res6.data.details || []);
      })
      .catch((err) =>
        console.error("Error fetching draft complaint data:", err)
      );
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{helmetContent.meta_tag_title}</title>
        <meta name="description" content={helmetContent.meta_tag} />
      </Helmet>
      {/* Banner Section */}
      {(categoryName?.trim() || description?.trim()) && (
        <div className="sub-page-baner">
          <section className="banner__area-five">
            <div className="container custom-container-five">
              <div
                className="banner__bg-four"
                style={{
                  backgroundImage: { h8_hero_bg },
                }}
              >
                <div
                  className="banner__bg-shape"
                  style={{
                    backgroundImage: { h8_hero_bg_shape },
                  }}
                ></div>
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="banner__content-five">
                      <h2
                        className="title"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {categoryName}
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="600"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {typesOfComplaints?.length > 0 && (
        <section className="services__area-seven section-py-130 pb-0">
          <div className="container">
            {headingTwo?.trim() && (
              <div className="section__title text-center mb-40">
                <h2 className="title">{headingTwo}</h2>
              </div>
            )}
            <div className="row gutter-y-30 justify-content-center">
              {typesOfComplaints
                .filter(
                  (item) =>
                    (item.title &&
                      item.title.trim() &&
                      item.title !== "null") ||
                    (item.definition &&
                      item.definition.trim() &&
                      item.definition !== "null")
                )
                .map((item, index) => (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <div
                      className="services__item-two role-service-card px-3"
                      style={{
                        border: "1px solid #0047ff6e",
                        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.06)",
                        background: "#ffffff",
                      }}
                    >
                      <div className="services__icon-two">
                        <img
                          src={`https://bouloulpo.com/bouloulpo_admin/public/uploads/${item.icon}`}
                          style={{
                            width: 74,
                            height: 62,
                            objectFit: "contain",
                          }}
                          alt={`icon-${index}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = { comment };
                          }}
                        />
                      </div>
                      <div className="services__content-two">
                        <h4 className="title">
                          <span>{item.title}</span>
                        </h4>
                        <p>{item.definition}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra Content Section */}
      {boloueContent?.length > 0 &&
        (headingThreeName?.trim() || descriptionThree?.trim()) && (
          <section className="services__area-seven section-py-130 pb-0">
            <div className="container">
              <div className="section__title text-center mb-40">
                <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                  {headingThreeName}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  dangerouslySetInnerHTML={{ __html: descriptionThree }}
                ></p>
              </div>
              <div className="row gutter-y-30 justify-content-center">
                {boloueContent
                  .filter(
                    (item) => item.title?.trim() || item.definition?.trim()
                  )
                  .map((item, index) => (
                    <div className="col-lg-4 col-md-4" key={index}>
                      <div
                        className="services__item-two role-service-card px-3"
                        style={{
                          border: "1px solid #0047ff6e",
                          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.06)",
                          background: "#ffffff",
                        }}
                      >
                        <div className="services__icon-two">
                          <img
                            src={`https://bouloulpo.com/bouloulpo_admin/public/uploads/${item.icon}`}
                            style={{
                              width: 74,
                              height: 62,
                              objectFit: "contain",
                            }}
                            alt={`icon-${index}`}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = { comment };
                            }}
                          />
                        </div>
                        <div className="services__content-two">
                          <h4 className="title">
                            <span>{item.title}</span>
                          </h4>
                          <p>{item.definition}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

      {/* Why Choose Us */}
      {whyChooseUs?.length > 0 && headingOne?.trim() && (
        <section className="services__area-seven section-py-130 pb-0">
          <div className="container">
            <div className="section__title text-center mb-40">
              <h2 className="title">{headingOne}</h2>
            </div>
            <div className="row gutter-y-30 justify-content-center">
              {whyChooseUs
                .filter((item) => item.title?.trim() || item.definition?.trim())
                .map((item, index) => (
                  <div className="col-lg-4 col-md-4" key={index}>
                    <div
                      className="services__item-two role-service-card px-3"
                      style={{
                        border: "1px solid #0047ff6e",
                        boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.06)",
                        background: "#ffffff",
                      }}
                    >
                      <div className="services__icon-two">
                        <img
                          src={`https://bouloulpo.com/bouloulpo_admin/public/uploads/${item.icon}`}
                          style={{
                            width: 74,
                            height: 62,
                            objectFit: "contain",
                          }}
                          alt={`icon-${index}`}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = { comment };
                          }}
                        />
                      </div>
                      <div className="services__content-two">
                        <h4 className="title">
                          <span>{item.title}</span>
                        </h4>
                        <p>{item.definition}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {(bottomheadingOne?.trim() || descriptionTwo?.trim()) && (
              <div className="section__title text-center mb-40 pt-5">
                <h2 className="title text-center">{bottomheadingOne}</h2>
                {descriptionTwo?.trim() && (
                  <p
                    data-aos="fade-up"
                    data-aos-delay="600"
                    dangerouslySetInnerHTML={{ __html: descriptionTwo.trim() }}
                  ></p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section - Always visible */}
      <section className="cta__area-two section-py-130 pt-5">
        <div className="container">
          <div className="cta__inner-wrap-two">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta__content-three">
                  <h2 className="title">
                    Click to get a free Consultation Now
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="cta__content-right">
                  <div className="cta__contact">
                    <div className="icon">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <div className="content">
                      <a href="tel:1 (561) 409-5858">1 (561) 409-5858</a>
                    </div>
                  </div>
                  <a
                    href="tel:1 (561) 409-5858"
                    className="tg-btn tg-border-btn"
                  >
                    Call Now <img src={right} alt="" className="injectable" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cta__shape-three">
              <img src={h2_cta_shape} alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DraftComplaints;
