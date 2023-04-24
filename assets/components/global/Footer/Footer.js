/**
 *
 *  This is the footer
 *
 */

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import TriggerInViewMotion from "../../../functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "../../../data/variables/ARRAYS";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  return (
    <footer id="footer" className={`${styles.footer} overrides_Footer`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADES[0]}
      >
        <div className={`${styles.footer_inner}`}>
          <div className={`${styles.footer_inner_box} container-fluid`}>
            <div className={`${styles.footer_inner_row} row`}>
              <div
                className={`${styles.footer_inner_side} ${styles.footer_L} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_inner_side_cnt}`}>
                  <div className={`${styles.logo}`}>
                    <a href="/" className="half-second index-link">
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

                  <ul className={`${styles.contact_info}`}>
                    <li>
                      <span className="half-second">contact@quillz.com</span>
                    </li>
                    <li>
                      <span className="half-second">+1 (202) 555-0186</span>
                    </li>
                  </ul>

                  <ul className={`${styles.socials}`}>
                    <li>
                      <FaTwitter className={`${styles.icon} half-second`} />
                    </li>
                    <li>
                      <FaFacebook className={`${styles.icon} half-second`} />
                    </li>
                    <li>
                      <FaInstagram className={`${styles.icon} half-second`} />
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.footer_inner_side} ${styles.footer_M} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_inner_side_cnt}`}>
                  <span className={`${styles.footer_sect_name} half-second`}>
                    Pages
                  </span>

                  <div className={`${styles.footer_links_box} container-fluid`}>
                    <div className={`${styles.footer_links_row} row`}>
                      <div
                        className={`${styles.footer_links_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                      >
                        <ul>
                          <li>
                            <a href="/" className="index-link half-second">
                              <span>Home</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/products"
                              className="products-link half-second"
                            >
                              <span>Products</span>
                            </a>
                          </li>
                          <li>
                            <a href="/types" className="types-link half-second">
                              <span>Types</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/info_contact"
                              className="info-contact-link half-second"
                            >
                              <span>Info/Contact</span>
                            </a>
                          </li>
                          <li>
                            <a href="/cart" className="cart-link half-second">
                              <span>My Cart</span>
                            </a>
                          </li>
                          <li
                            className={`${styles.login_register_link} login-register-link-footer`}
                          >
                            <a
                              href="/login_register"
                              className={`login-register-link half-second`}
                            >
                              <span>Login/Register</span>
                            </a>
                          </li>
                          <li className={`${styles.profile_link}`}>
                            <a
                              href="/profile"
                              className={`profile-link half-second`}
                            >
                              <span>My Profile</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`${styles.footer_links_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                      >
                        <ul>
                          <li>
                            <a
                              href="/types#atelerix"
                              className="types-link half-second"
                            >
                              <span>Atelerix</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/types#erinaceus"
                              className="types-link half-second"
                            >
                              <span>Erinaceus</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/types#hemiechinus"
                              className="types-link half-second"
                            >
                              <span>Hemiechinus</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/types#mesechinus"
                              className="types-link half-second"
                            >
                              <span>Mesechinus</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/types#paraechinus"
                              className="types-link half-second"
                            >
                              <span>Paraechinus</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className={`${styles.footer_links_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
                      >
                        <ul>
                          <li>
                            <a
                              href="/products#food"
                              className="products-link half-second"
                            >
                              <span>Food</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/products#toys"
                              className="products-link half-second"
                            >
                              <span>Toys</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/products#housing"
                              className="products-link half-second"
                            >
                              <span>Housing</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_inner_side} ${styles.footer_R} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.footer_inner_side_cnt}`}>
                  <span className={`${styles.footer_sect_name} half-second`}>
                    Our Newsletter
                  </span>

                  <p className="half-second">
                    You will gain benefits such as receiving notifications on
                    new products and updates.
                  </p>

                  <input
                    type="email"
                    className="half-second"
                    placeholder="Enter your email address"
                  />

                  <button className="half-second">
                    <span>Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
