import React from "react";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <div className="bg3">
      <div className="top-footer ptb32 df fww wrapper">
        <div className="top-foter-text flx50 fs24 fw5 v-center fc5">
          <GoMail className="mr12" /> Sign Up To Shop Now
        </div>
        <div className="top-footer-input flx1 df aic pr">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-email df w100 h48 fc3 br8 pl16 brd2"
          />
          <button className="input-email-sub bg2 plr24 ptb8 pa r0 mr12 br8 fc5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
