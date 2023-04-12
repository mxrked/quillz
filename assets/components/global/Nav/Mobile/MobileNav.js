/**
 *
 *  This is the mobile nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import ToggleSearch from "@/assets/functions/dom/togglers/ToggleSearch";

import { FADE_IN } from "@/assets/anims/FADES";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <div className={`${styles.mobile_nav_inner}`}>
          <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
            <div className={`${styles.mobile_nav_inner_row} row`}>
              <div
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <a
                    href="/"
                    className={`${styles.logo} index-link half-second`}
                  >
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
                className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                  <div className={`${styles.side_links}`}>
                    <div className={`${styles.top}`}>
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
                      </ul>
                    </div>

                    <div className={`${styles.bottom}`}>
                      <div className={`${styles.cart_link}`}>
                        <a href="/cart" className="cart-link half-second">
                          <FaShoppingCart className={`${styles.icon}`} />

                          <div>
                            <span className="cart-counter">0</span>
                          </div>
                        </a>
                      </div>
                      <button
                        id="searchToggler"
                        className={`${styles.search_toggler} search-toggler half-second`}
                        onClick={() => {
                          ToggleSearch();
                        }}
                      >
                        <FaSearch className={`${styles.icon}`} />
                      </button>
                    </div>
                  </div>

                  <button
                    id="mobileNavToggler"
                    className={`${styles.mobile_nav_toggler}`}
                    onClick={() => {
                      DeclareStorageVariable(
                        "session",
                        "Mobile Nav Opened",
                        true
                      );

                      document.body.style.overflowY = "hidden";
                      document.body.style.pointerEvents = "none";

                      const MENU = document.getElementById("mobileNavMenu");
                      const DARKEN = document.getElementById(
                        "mobileNavMenuDarken"
                      );
                      const MAIN = document.getElementById("mobileNavMenuMain");

                      MENU.style.display = "block";

                      setTimeout(() => {
                        DARKEN.style.opacity = 1;
                        DARKEN.style.visibility = "visible";
                      }, 500);

                      setTimeout(() => {
                        MAIN.style.width = "100%";
                      }, 900);

                      setTimeout(() => {
                        document
                          .querySelectorAll(".mobile-nav-menu-cnt")
                          .forEach((cnt) => {
                            cnt.style.opacity = 1;
                            cnt.style.visibility = "visible";
                          });
                      }, 1800);

                      setTimeout(() => {
                        MENU.style.overflowY = "auto";
                        MENU.style.pointerEvents = "auto";
                      }, 2400);
                    }}
                  >
                    <span className="half-second" />
                    <span className="half-second" />
                    <span className="half-second" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
