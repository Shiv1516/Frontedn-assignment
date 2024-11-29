import React from "react";

function Offers() {
  return (
    <div className="destination-section wrapper ptb48">
      <h2 className="section-heading ptb16 fs36 fc2 fw7 tac">Offers for You</h2>
      <div className="destination-cards df fww ptb24">
        <div className="destination-card flx33">
          <div className="destination-inner-card mlr12 cp tac">
            <img
              src="images\destination.svg"
              alt="destination"
              className="destination-image mb16 br50 p16 brd1"
            />
            <h3 className="destination-card-heading fs18 fw6 fc3 mb8">
              Gurugram
            </h3>
            <p className="destination-card-subheading lh18 fs14 fw4">
              Lorem ipsum, dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
