import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Blog_detail = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`https://bouloulpo.com/bouloulpo_admin/api/get_blog_data/${id}`);

        setBlogData(response.data);
      } catch (error) {
        console.error("Failed to fetch blog details", error);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <>
      <section className="services__area section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__title text-center mb-40 sub-ban-title-card">
                <span className="sub-title">Blog Details</span>
                <h2 className="title">{blogData.title || "Blog Details"}</h2>
              </div>
            </div>
          </div>

          <div className="blog__details-area">
            <div className="container">
              <div className="row">
                <div className="col-100">
                  <div className="blog__details-wrap">
                    <div className="blog__post-thumb-five blog__details-thumb">
                      <img src={`https://bouloulpo.com/bouloulpo_admin/public/uploads/${blogData.img}`} alt="Blog post" />
                    </div>
                    <div className="blog__details-content">
                      <div className="blog__post-meta">
                        {/* <ul className="list-wrap">
                          <li>{blogData.date || "Date not available"}</li>
                          <li>
                            <a href="#">Comment: {blogData.comments?.length || 0}</a>
                          </li>
                        </ul> */}
                      </div>
                      <h2 className="title">{blogData.title}</h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: blogData.description }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Blog_detail;
