import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" size={60} />
              <p>Provide web and mobile solutions that are secure and adhere to acceptable quality</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" size={60} />
              <p>Solving complex product and design challenges in efficient and scalable ways by collaborating with all teams.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" size={60} />
              <p>Producing high quality code, following and improving best practices and identifying solutions through constructive feedback and review.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" size={60} />
              <p>Developing new user-facing features and determing the structure and design of web pages</p>
            </li>
          </ul>
        </article>

        {/* End of front end\ */}

        <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Participate in the entire application lifecycle, focusing on coding and debugging.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Write clean code to develop functional web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshoot and debug applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perform UI tests to optimize performance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborate with Front-end developers to integrate user-facing elements with server side logic.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build reusable code and libraries for future use.</p>
            </li>
          </ul>
        </article>

        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing ML systems.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Researching and implementing ML algorithms and tools.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Selecting appropriate data sets.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Picking appropriate data representation methods.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Identifying differences in data distribution that affects model performance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Verifying data quality.</p>
            </li>
          </ul>
        </article>

        {/* End of Machine Learning */}
      </div>
    </section>
  );
};

export default Services;
