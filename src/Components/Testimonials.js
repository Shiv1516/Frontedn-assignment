import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const PartesimonialData = [
    {
      name: "Hardik Savani",
      job: "Company Owner",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Sabhajeet Singh",
      job: "Government Employee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Sundar Pichai",
      job: "Private Job",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Anubhaw Srivastav",
      job: "Teacher",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
      image: "images/testimonials/client-02.webp",
    },
    {
      name: "Anurag Saxena",
      job: "Shop Keeper",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
      image: "images/testimonials/client-01.webp",
    },
    {
      name: "Satyendra Tyagi",
      job: "Builder",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea a? Nulla eligendi eius veritatis voluptate beatae esse nesciunt atque!",
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
