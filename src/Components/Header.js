import React from "react";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

function Header() {
  return (
    <div className="header-section bg3">
      <div className="top-header-container wrapper ptb12 jce df fc2">
        <Link to="tel:/+91 9315878785" className="v-center fs15 mr24 fw5">
          <IoMdCall className="mr8 fs22" />
          +91 9315878785
        </Link>
        <Link to="mailto:dummymail.in" className="v-center fs15 mr24 fw5">
          <MdMail className="mr8 fs22" />
          dummymail.in
        </Link>
      </div>
    </div>
  );
}

export default Header;
