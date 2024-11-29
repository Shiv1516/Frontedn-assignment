import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const PartesimonialData = [
    {
      name: "Hardik Savani",
      job: "Company Owner",
      description:
        "We're thankful for Ameesh Sir's invaluable guidance and engaging teaching style, which helped our children grasp complex concepts effectively. Their grades improved remarkably, and they gained a deep understanding of commerce principles, shaping their future. Highly recommend Ameesh Sir for exceptional education in commerce.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Sabhajeet Singh",
      job: "Government Employee",
      description:
        "Ameesh Sir's invaluable guidance and engaging teaching style have been instrumental in helping our children grasp complex concepts effectively. Thanks to his classes, their grades improved remarkably, and they gained a deep understanding of commerce principles, shaping their future. Highly recommend Ameesh Sir for exceptional education in commerce.",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Sundar Pichai",
      job: "Private Job",
      description:
        "Our gratitude to Ameesh Sir for his invaluable guidance and engaging teaching style, which helped our children grasp complex concepts effectively. Thanks to his classes, their grades improved remarkably, and they gained a deep understanding of commerce principles, shaping their future. Highly recommend Ameesh Sir for exceptional education in commerce.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Anubhaw Srivastav",
      job: "Teacher",
      description:
        "We're grateful to Ameesh Sir for his invaluable guidance and engaging teaching style, which helped our children grasp complex concepts effectively. Their grades improved remarkably, and they gained a deep understanding of commerce principles, shaping their future. Highly recommend Ameesh Sir for exceptional education in commerce.",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Anurag Saxena",
      job: "Shop Keeper",
      description:
        "Our sincere appreciation to Ameesh Sir for his invaluable guidance and engaging teaching style that helped our children grasp complex concepts effectively. Their remarkable improvement in grades and deep understanding of commerce principles are testaments to his exceptional teaching. Highly recommend Ameesh Sir for top-notch commerce education.",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Satyendra Tyagi",
      job: "Builder",
      description:
        "Ameesh Sir's invaluable guidance and engaging teaching style have significantly benefited our children in grasping complex concepts effectively. Their remarkable improvement in grades and deep understanding of commerce principles reflect his exceptional teaching. We highly recommend Ameesh Sir for outstanding commerce education.",
      image: "images/testimonials/client-02.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section wrapper ptb48">
      <h2 className="section-heading ptb16 fs36 fc2 fw7 tac">Testimonials</h2>
      <Slider {...settings} className="testimonial-cards df ptb32">
        {PartesimonialData.map((paretestimonial, index) => (
          <div className="testimonial-card ptb40" key={"index"}>
            <div className="container bs1 mlr12 p24 br8 bs1">
              <div className="profile v-center jcsb mb24">
                <div className="quot-icon">
                  <RiDoubleQuotesL className="fs45 fc2 mb8" />
                  <h3 className="testimonial-name fs18 fw6 mb8">
                    {paretestimonial.name}
                  </h3>
                  <p className="testimonial-job fc4">{paretestimonial.job}</p>
                </div>
                <div className="testimonial-img ofh mb16">
                  <img
                    className="br50"
                    src={paretestimonial.image}
                    alt="testimonial-img"
                  />
                </div>
              </div>
              <div className="testimonial-desc">
                <p className="desc fc4 lh22 mb16">
                  {paretestimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
