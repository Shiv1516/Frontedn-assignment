import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    locations: false,
    experiences: false,
    offers: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
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
      <div className={`bottom-header pa w100 zi99 ${isSticky ? "sticky" : ""}`}>
        <nav className="botto-head wrapper df jcsb aic ptb12 bg3 mt24 br8 plr12">
          <div className="logo-box">
            <img src="images/logo.png" alt="logo" className="logo" />
          </div>
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
          <div
            className={`nav-top-list ${
              menuOpen ? "open" : ""
            } df aic fc2 fw6 zi99`}
          >
            <ul className="nav-links v-center">
              <li
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 pr plr16 bg-h1 br8"
                onMouseEnter={() => toggleDropdown("locations")}
                onMouseLeave={() => toggleDropdown("locations")}
              >
                Locations
                {dropdownOpen.locations && (
                  <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      New York
                    </li>
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Paris
                    </li>
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Tokyo
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 pr plr16 bg-h1 br8"
                onMouseEnter={() => toggleDropdown("experiences")}
                onMouseLeave={() => toggleDropdown("experiences")}
              >
                Experiences
                {dropdownOpen.experiences && (
                  <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Adventure
                    </li>
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Luxury
                    </li>
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Relaxation
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 pr plr16 bg-h1 br8"
                onMouseEnter={() => toggleDropdown("offers")}
                onMouseLeave={() => toggleDropdown("offers")}
              >
                Offers
                {dropdownOpen.offers && (
                  <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Seasonal Discounts
                    </li>
                    <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
                      Flash Sales
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item cp ptb16 fc-h3 transit2 mlr12 pr plr16 bg-h1 br8">
                Blogs
              </li>
            </ul>
            <button className="cta-btn bg2 fc1 plr16 h48 cp br8 fw6">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
