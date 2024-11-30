import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const collectionData = [
  {
    id: 1,
    title: "COLDPLAY Concert Stays",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
  {
    id: 2,
    title: "Mountain Adventures",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
  {
    id: 3,
    title: "Beach Getaways",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
  {
    id: 4,
    title: "Urban Escapes",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
  {
    id: 5,
    title: "Urban Escapes",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
  {
    id: 6,
    title: "Urban Escapes",
    image1: "images/collection-01.jpg",
    image2: "images/collection-02.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure repellendus suscipit dolorem sequi quibusdam deleniti!",
  },
];

function Collection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg3">
      <div className="collection-section wrapper ptb48 ofh">
        <h2 className="section-heading ptb16 fs36 fc2 fw7 df aic jcc">
          <span className="heading-deco mr8"></span>
          Choose a Collection <span className="heading-deco ml8"></span>
        </h2>
        <div className="collection-cards ptb32">
          <Slider {...settings}>
            {collectionData.map((collection) => (
              <div key={collection.id} className="coll-card-box ptb32">
                <div className="collection-card mlr16 pr ofh transit2 br12">
                  <div className="coll-cards pr tac">
                    <img
                      src={collection.image1}
                      alt="collection"
                      className="collection-image w100 br12"
                    />
                    <h3 className="collection-card-heading fs24 fw6 fc1 pa t50 l0 r0">
                      {collection.title}
                    </h3>
                  </div>
                  <div className="coll-card pr tac dn pa t0 b0 w100">
                    <img
                      src={collection.image2}
                      alt="collection"
                      className="collection-image w100 br12 blur-effect"
                    />
                    <p className="collection-card-subheading lh24 pa t50 l0 r0 fc1 fw4">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Collection;
