/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import ToggleSearch from "@/assets/functions/dom/togglers/ToggleSearch";

import { FADE_IN } from "@/assets/anims/FADES";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.desktop_nav_inner}`}>
          <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
            <div className={`${styles.desktop_nav_inner_row} row`}>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul className={`${styles.main_links}`}>
                    <li>
                      <ul id="desktopNavProductsUL">
                        <li className="half-second">
                          <a href="/products#food" className="half-second">
                            <span>Food</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/products#toys" className="half-second">
                            <span>Toys</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/products#housing" className="half-second">
                            <span>Housing</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/products" className="half-second">
                            <span>View All</span>
                          </a>
                        </li>
                      </ul>

                      <input
                        type="checkbox"
                        id="desktopNavProductsCB"
                        onChange={(e) => {
                          const LINKS = document.getElementById(
                            "desktopNavProductsUL"
                          );

                          if (e.currentTarget.checked) {
                            LINKS.style.display = "block";

                            document.getElementById(
                              "desktopNavTypesCB"
                            ).checked = false;

                            document.getElementById(
                              "desktopNavTypesUL"
                            ).style.display = "none";
                          } else {
                            LINKS.style.display = "none";
                          }
                        }}
                        onBlur={() => {
                          setTimeout(() => {
                            document.getElementById(
                              "desktopNavProductsCB"
                            ).checked = false;

                            document.getElementById(
                              "desktopNavProductsUL"
                            ).style.display = "none";
                          }, 400);
                        }}
                      />

                      <span className="half-second">Products</span>
                      <FaCaretDown className={`${styles.icon}`} />
                    </li>
                    <li>
                      <ul id="desktopNavTypesUL">
                        <li className="half-second">
                          <a href="/types#atelerix" className="half-second">
                            <span>Atelerix</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/types#erinaceus" className="half-second">
                            <span>Erinaceus</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/types#hemiechinus" className="half-second">
                            <span>Hemiechinus</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/types#mesechinus" className="half-second">
                            <span>Mesechinus</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/types#paraechinus" className="half-second">
                            <span>Paraechinus</span>
                          </a>
                        </li>
                        <li className="half-second">
                          <a href="/types" className="half-second">
                            <span>View All</span>
                          </a>
                        </li>
                      </ul>

                      <input
                        type="checkbox"
                        id="desktopNavTypesCB"
                        onChange={(e) => {
                          const LINKS =
                            document.getElementById("desktopNavTypesUL");

                          if (e.currentTarget.checked) {
                            LINKS.style.display = "block";

                            document.getElementById(
                              "desktopNavProductsCB"
                            ).checked = false;

                            document.getElementById(
                              "desktopNavProductsUL"
                            ).style.display = "none";
                          } else {
                            LINKS.style.display = "none";
                          }
                        }}
                        onBlur={(e) => {
                          setTimeout(() => {
                            document.getElementById(
                              "desktopNavTypesCB"
                            ).checked = false;

                            document.getElementById(
                              "desktopNavTypesUL"
                            ).style.display = "none";
                          }, 400);
                        }}
                      />

                      <span className="half-second">Types</span>
                      <FaCaretDown className={`${styles.icon}`} />
                    </li>
                    <li>
                      <a href="/info_contact" className="half-second">
                        <span className="half-second">Info/Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_M} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <a href="/" className={`${styles.logo} half-second`}>
                    <div>
                      <span className={`${styles.top_text} half-second`}>
                        Quillz
                      </span>
                      <span className={`${styles.bottom_text} half-second`}>
                        All things hedgie.
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
              >
                <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                  <ul className={`${styles.side_links}`}>
                    <li className={`${styles.profile_link} profile-link`}>
                      <a href="/profile" className="half-second">
                        <span>My Profile</span>{" "}
                        <MdAccountCircle className={`${styles.icon}`} />
                      </a>
                    </li>
                    <li
                      className={`${styles.login_register_link} login-register-link`}
                    >
                      <a href="/login_register" className="half-second">
                        <span>Login/Register</span>{" "}
                      </a>
                    </li>
                    <li className={`${styles.cart_link}`}>
                      <a href="/cart" className="half-second">
                        <FaShoppingCart className={`${styles.icon}`} />

                        <div>
                          <span className="cart-counter">0</span>
                        </div>
                      </a>
                    </li>

                    <button
                      id="searchToggler"
                      className={`${styles.search_toggler} search-toggler half-second`}
                      onClick={() => {
                        ToggleSearch();
                      }}
                    >
                      <FaSearch className={`${styles.icon}`} />
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
