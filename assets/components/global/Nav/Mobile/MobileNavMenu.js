/**
 *
 *  This is the mobile nav menu
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaCaretDown, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div
        className={`${styles.darken} full-second`}
        id="mobileNavMenuDarken"
        onClick={() => {
          CloseMobileNav();
        }}
      />

      <div
        className={`${styles.mobile_nav_menu_main} full-second`}
        id="mobileNavMenuMain"
      >
        <div className={`${styles.main_top} mobile-nav-menu-cnt half-second`}>
          <button
            id="mobileNavCloser"
            className={`${styles.mobile_nav_closer} half-second`}
            onClick={() => {
              CloseMobileNav();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>
        </div>

        <div className={`${styles.main_links} mobile-nav-menu-cnt half-second`}>
          <a href="/" className={`${styles.link} nav-link half-second`}>
            <span className="half-second">Home</span>
          </a>

          <div className={`${styles.sub_links_toggler} half-second`}>
            <input
              type="checkbox"
              id="mobileNavMenuProductsCB"
              onChange={(e) => {
                const LINKS = document.getElementById(
                  "mobileNavMenuProductsLinks"
                );

                if (e.currentTarget.checked) {
                  LINKS.style.height = "180px";
                  document.querySelectorAll(
                    ".sub-links-toggler-icon"
                  )[0].style.transform = "rotate(180deg)";
                } else {
                  LINKS.style.height = 0;
                  document.querySelectorAll(
                    ".sub-links-toggler-icon"
                  )[0].style.transform = "rotate(0deg)";
                }
              }}
            />

            <FaCaretDown
              className={`${styles.icon} sub-links-toggler-icon half-second`}
            />

            <span>Products</span>
          </div>

          <ul id="mobileNavMenuProductsLinks" className="half-second">
            <li className="half-second">
              <a href="/products#food" className="nav-link half-second">
                <span>Food</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/products#toys" className="nav-link half-second">
                <span>Toys</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/products#housing" className="nav-link half-second">
                <span>Housing</span>
              </a>
            </li>
            <li className="half-second">
              <a
                href="/products"
                className={`${styles.view_all} nav-link half-second`}
              >
                <span>View All</span>
              </a>
            </li>
          </ul>

          <div className={`${styles.sub_links_toggler} half-second`}>
            <input
              type="checkbox"
              id="mobileNavMenuTypesCB"
              onChange={(e) => {
                const LINKS = document.getElementById(
                  "mobileNavMenuTypesLinks"
                );

                if (e.currentTarget.checked) {
                  LINKS.style.height = "270px";
                  document.querySelectorAll(
                    ".sub-links-toggler-icon"
                  )[1].style.transform = "rotate(180deg)";
                } else {
                  LINKS.style.height = 0;
                  document.querySelectorAll(
                    ".sub-links-toggler-icon"
                  )[1].style.transform = "rotate(0deg)";
                }
              }}
            />

            <FaCaretDown
              className={`${styles.icon} sub-links-toggler-icon half-second`}
            />

            <span>Types</span>
          </div>

          <ul id="mobileNavMenuTypesLinks" className="half-second">
            <li className="half-second">
              <a href="/types#atelerix" className="nav-link half-second">
                <span>Atelerix</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/types#erinaceus" className="nav-link half-second">
                <span>Erinaceus</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/types#hemiechinus" className="nav-link half-second">
                <span>Hemiechinus</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/types#mesechinus" className="nav-link half-second">
                <span>Mesechinus</span>
              </a>
            </li>
            <li className="half-second">
              <a href="/types#paraechinus" className="nav-link half-second">
                <span>Paraechinus</span>
              </a>
            </li>
            <li className="half-second">
              <a
                href="/types"
                className={`${styles.view_all} nav-link half-second`}
              >
                <span>View All</span>
              </a>
            </li>
          </ul>

          <a
            href="/info_contact"
            className={`${styles.link} nav-link half-second`}
          >
            <span className="half-second">Info/Contact</span>
          </a>
          <a
            href="/login_register"
            className={`${styles.link} login-register-link nav-link half-second`}
          >
            <span className="half-second">Login/Register</span>
          </a>
          <a
            href="/profile"
            className={`${styles.link} profile-link nav-link half-second`}
          >
            <span className="half-second">My Profile</span>
          </a>
          <a href="/cart" className={`${styles.link} nav-link half-second`}>
            <span className="half-second">My Cart</span>

            <div>
              <span className="cart-counter">0</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
