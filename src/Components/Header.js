// import { Link } from "react-router-dom";
// import { IoMdCall } from "react-icons/io";
// import { MdMail } from "react-icons/md";
// import React, { useState } from "react";

// const Header = () => {
//   const [dropdownOpen, setDropdownOpen] = useState({
//     locations: false,
//     experiences: false,
//     offers: false,
//   });

//   const toggleDropdown = (menu) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };
//   return (
//     <>
//       <div className="header-section bg3">
//         <div className="top-header-container wrapper ptb12 jce df fc2">
//           <Link to="tel:/+91 9315878785" className="v-center fs15 mr24 fw5">
//             <IoMdCall className="mr8 fs22" />
//             +91 9315878785
//           </Link>
//           <Link to="mailto:dummymail.in" className="v-center fs15 mr24 fw5">
//             <MdMail className="mr8 fs22" />
//             dummymail.in
//           </Link>
//         </div>
//       </div>
//       <div className="">
//         <nav className="navbar df v-center jcsb ptb12 wrapper">
//           <div className="logo">
//             <img src="images/logo.png" alt="logo" className="logo" />
//           </div>
//           <div className="nav-top-list df aic">
//             <ul className="nav-links v-center">
//               <li
//                 className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
//                 onMouseEnter={() => toggleDropdown("locations")}
//                 onMouseLeave={() => toggleDropdown("locations")}
//               >
//                 Locations
//                 {dropdownOpen.locations && (
//                   <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       New York
//                     </li>
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Paris
//                     </li>
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Tokyo
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <li
//                 className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
//                 onMouseEnter={() => toggleDropdown("experiences")}
//                 onMouseLeave={() => toggleDropdown("experiences")}
//               >
//                 Experiences
//                 {dropdownOpen.experiences && (
//                   <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Adventure
//                     </li>
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Luxury
//                     </li>
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Relaxation
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <li
//                 className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
//                 onMouseEnter={() => toggleDropdown("offers")}
//                 onMouseLeave={() => toggleDropdown("offers")}
//               >
//                 Offers
//                 {dropdownOpen.offers && (
//                   <ul className="dropdown bg1 pa br8 shadow-lg fc2 brd2 ofh">
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Seasonal Discounts
//                     </li>
//                     <li className="dropdown-item ptb16 plr24 cp wsnw fc-h2 bg-h2">
//                       Flash Sales
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//             <button className="cta-btn bg2 fc1 plr16 h48 cp br8 fw6">
//               Sign In
//             </button>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";

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

  return (
    <>
      <div className="header-section bg3">
        <nav className="wrapper df jcsb aic ptb12">
          <div className="logo-box">
            <img src="images/logo.png" alt="logo" className="logo" />
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Menu */}
          <div className={`nav-top-list ${menuOpen ? "open" : ""} df aic zi99`}>
            <ul className="nav-links v-center">
              <li
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
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
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
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
                className="nav-item cp ptb16 fc-h3 transit2 mlr12 plr16 bg-h1 br8"
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
