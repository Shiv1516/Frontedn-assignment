import React from "react";
import Slider from "react-slick";
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const trendingData = [
  {
    id: 1,
    image: "images/trending.jpg",
    title: "Parc Buttes-Chaumount",
    location: "75016 Paris, France",
    rating: "4.9 (1,390 Reviews)",
    price: "$ 379 /Person",
  },
  {
    id: 2,
    image: "images/trending.jpg",
    title: "Eiffel Tower",
    location: "75007 Paris, France",
    rating: "4.8 (2,000 Reviews)",
    price: "$ 450 /Person",
  },
  {
    id: 3,
    image: "images/trending.jpg",
    title: "Louvre Museum",
    location: "75001 Paris, France",
    rating: "4.7 (3,500 Reviews)",
    price: "$ 350 /Person",
  },
  {
    id: 4,
    image: "images/trending.jpg",
    title: "Notre Dame Cathedral",
    location: "75004 Paris, France",
    rating: "4.9 (2,800 Reviews)",
    price: "$ 400 /Person",
  },
  {
    id: 5,
    image: "images/trending.jpg",
    title: "Champs-Élysées",
    location: "75008 Paris, France",
    rating: "4.8 (3,200 Reviews)",
    price: "$ 300 /Person",
  },
  {
    id: 6,
    image: "images/trending.jpg",
    title: "Sacre-Coeur",
    location: "75018 Paris, France",
    rating: "4.9 (1,500 Reviews)",
    price: "$ 320 /Person",
  },
];

function Trending() {
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
    <div className="trending-section wrapper ptb48">
      <h2 className="section-heading ptb24 fs36 fc2 fw7 tac df aic jcc">
        <span className="heading-deco mr8"></span>
        Trending This Season<span className="heading-deco ml8"></span>
      </h2>
      <Slider {...settings}>
        {trendingData.map((item) => (
          <div key={item.id} className="trending-card ptb32">
            <div className="trending-inner-card mlr24 cp">
              <img
                src={item.image}
                alt={item.title}
                className="trending-image mb16 w100 br12"
              />
              <div className="trending-detail ml8">
                <h3 className="trending-card-heading fs18 fw6 mb12">
                  {item.title}
                </h3>
                <ul className="trending-card-detail ml4 fs14 fw5 mb12 fc4">
                  <li className="tren-card-item df mb8">
                    <IoLocationOutline className="mr4" />
                    {item.location}
                  </li>
                  <li className="tren-card-item df mb8">
                    <CiStar className="mr4" />
                    {item.rating}
                  </li>
                </ul>
                <p className="trending-card-subheading fw6 fs18">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Trending;
