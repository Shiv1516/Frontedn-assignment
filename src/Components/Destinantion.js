import React from "react";
import Slider from "react-slick";
const destinations = [
  {
    id: 1,
    name: "Gurugram",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 2,
    name: "Mumbai",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 3,
    name: "Bengaluru",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 4,
    name: "Delhi",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 5,
    name: "Pune",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 6,
    name: "Kolkata",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 7,
    name: "Chennai",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
  {
    id: 8,
    name: "Hyderabad",
    description: "Lorem ipsum, dolor sit amet.",
    image: "images/destination.svg",
  },
];

function Destination() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="destination-section wrapper ptb48 tac">
      <h2 className="section-heading ptb24 fs36 fc2 fw7">
        Choose where you'd like to go!
      </h2>
      <Slider {...sliderSettings} className="destination-slider ptb32">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-cards">
            <div className="destination-inner-card mlr24 cp tac">
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image mb16 br50 p16 brd1"
              />
              <h3 className="destination-card-heading fs18 fw6 fc3 mb8">
                {destination.name}
              </h3>
              <p className="destination-card-subheading lh18 fs14 fw4">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Destination;
