import React from "react";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="top-footer ptb32 df fww wrapper">
        <div className="top-foter-text flx50 fs24 fw5 v-center fc5">
          <GoMail className="mr12" /> Sign Up To Shop Now
        </div>
        <div className="top-footer-input flx1 df aic pr">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-email df w100 h48 fs14 fc3 br8 pl16 brd2"
          />
          <button className="input-email-sub bg3 plr24 ptb8 cp bg-h1 fs15 pa r0 mr12 br8 fc5">
            Subscribe
          </button>
        </div>
      </div>
      <div className="bg2 ptb40">
        <div className="footer df fww wrapper ptb48">
          <div className="footer-box flx25">
            <div className="footer-inner-box mlr24">
              <img
                src="images/logo.png"
                alt="logo"
                className="footer-logo mb24"
              />
              <p className="footer-logo-des lh24 fw5 taj">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                voluptates quisquam rerum voluptatibus ducimus!
              </p>
            </div>
          </div>
          <div className="footer-box flx25 df jcc">
            <div className="footer-inner-box mlr24">
              <h2 className="footer-box-heading fs20 mb24 fw6">
                Important Links
              </h2>
              <ul className="footer-box-list ml4 fs16 mt8">
                <li className="footer-box-item df mb16">
                  <FaAngleRight className="mr8 fs16" />
                  Locations
                </li>
                <li className="footer-box-item df mb16">
                  <FaAngleRight className="mr8 fs16" />
                  Experiences
                </li>
                <li className="footer-box-item df mb16">
                  <FaAngleRight className="mr8 fs16" />
                  Offers
                </li>
                <li className="footer-box-item df mb16">
                  <FaAngleRight className="mr8 fs16" />
                  Blogs
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-box flx25 df">
            <div className="footer-inner-box mlr24 df fdc">
              <h2 className="footer-box-heading fs20 mb24 fw6 ofh">Location</h2>
              <div className="map-box df">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28071.391341140865!2d77.0574544!3d28.4215525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51a5f85fd55%3A0x553ee1a290ac09f9!2sSector%2056%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1732908760549!5m2!1sen!2sin"
                  width="auto"
                  height="auto"
                  className="footer-map mt8 brd1"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="footer-box flx25">
            <div className="footer-inner-box mlr24">
              <h2 className="footer-box-heading fs20 mb24 fw6">Contact</h2>
              <ul className="footer-box-list ml4 fs16 mt8">
                <li className="footer-box-item df mb16 lh24">
                  <IoLocationOutline className="mr12 fs28" />
                  D45, D-block Sector-56, Noida, Uttar Pradesh, 201301
                </li>
                <li className="footer-box-item df mb16">
                  <FaPhoneAlt className="mr12" />
                  <Link to="tel:9832326372" className="contact-link">
                    9832326372
                  </Link>
                </li>
                <li className="footer-box-item df mb24">
                  <GoMail className="mr12" />
                  <Link
                    to="mailto:dummymail@gmail.com"
                    className="contact-link"
                  >
                    dummymail@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-social df jcc wrapper ptb12 brd-b1">
          <Link
            to="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaWhatsapp className="social-icon cp transit2 p12 br50 brd1 bg1 mlr8" />
          </Link>
          <Link
            to="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <RiTwitterXLine className="social-icon cp transit2 p12 br50 brd1 bg1 mlr8" />
          </Link>
          <Link
            to="https://www.instagram.com/your-instagram-handle/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <FaInstagram className="social-icon cp transit2 p12 br50 brd1 bg1 mlr8" />
          </Link>
          <Link
            to="https://www.youtube.com/your-youtube-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <CiYoutube className="social-icon cp transit2 p12 br50 brd1 bg1 mlr8" />
          </Link>
        </div>
        <p className="lh18 tac pt12 fs14 ">
          Copyright © 2023, All Right Reserved, Designed & Developed by Ebslon
          Infotech
        </p>
      </div>
    </>
  );
}

export default Footer;
