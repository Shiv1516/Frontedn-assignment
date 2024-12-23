import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiDiscount1 } from "react-icons/ci";
const offersData = [
  {
    id: 1,
    title: "Apply Coupons",
    code: "NEWLYLAUNCHED",
    discount: "15%",
    maxDiscount: "Rs. 3,000",
    expiry: "December 20, 2024",
    buttonCode: "VSW52V23V",
  },
  {
    id: 2,
    title: "Special Launch Offer",
    code: "LAUNCH2024",
    discount: "20%",
    maxDiscount: "Rs. 5,000",
    expiry: "December 31, 2024",
    buttonCode: "XYZ123456",
  },
  {
    id: 3,
    title: "Special Launch Offer",
    code: "LAUNCH2024",
    discount: "20%",
    maxDiscount: "Rs. 5,000",
    expiry: "December 31, 2024",
    buttonCode: "XYZ123456",
  },
  {
    id: 4,
    title: "Special Launch Offer",
    code: "LAUNCH2024",
    discount: "20%",
    maxDiscount: "Rs. 5,000",
    expiry: "December 31, 2024",
    buttonCode: "XYZ123456",
  },
  {
    id: 5,
    title: "Special Launch Offer",
    code: "LAUNCH2024",
    discount: "20%",
    maxDiscount: "Rs. 5,000",
    expiry: "December 31, 2024",
    buttonCode: "XYZ123456",
  },
];

function Offers() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="offers-section wrapper ptb48">
      <h2 className="section-heading ptb16 fs36 fc2 fw7 df aic jcc">
        {" "}
        <span className="heading-deco mr8"></span>Offers for You
        <span className="heading-deco ml8"></span>
      </h2>
      <Slider {...sliderSettings}>
        {offersData.map((offer) => (
          <div key={offer.id} className="offers-card ptb40">
            <div className="offers-inner-card mlr16 brd2 br12 pr pt40 pb32 plr24 mtb32">
              <CiDiscount1 className="offer-image p16 br12 bg2 pa r0 mr32 fs28 fc1 fw7" />
              <h3 className="offers-card-head fs20 fw5 mb24">
                <span className="brd3 mr12"></span> {offer.title}
              </h3>
              <h4 className="offers-card-heading fs15 lh24 mb24">
                Use the code <span className="fs16 fc2 fw6">{offer.code}</span>{" "}
                to get a <span>{offer.discount}</span> discount, up to{" "}
                <span>{offer.maxDiscount}</span>.
              </h4>
              <p className="offers-card-subheading lh18 fs14 fw4 mb24">
                Expires {offer.expiry}
              </p>
              <div className="coupan-buttons df fw5">
                <button className="coupan-code h48 plr24 br8 brd4 cp mlr16">
                  {offer.buttonCode}
                </button>
                <button className="coupan-code h48 plr24 br8 brd4 cp bg2 fc1 mlr16 wsnw">
                  Copy Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Offers;
