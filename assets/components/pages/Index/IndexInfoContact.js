/**
 *
 *  This is the index info and contact
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "@/assets/data/variables/ARRAYS";
import { SMALL_AND_LARGE } from "@/assets/cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexInfoContact = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, [router]);

  return (
    <section
      id="indexInfoContact"
      className={`${styles.index_info_contact} overrides_IndexInfoContact`}
    >
      <motion.div
        className={`${styles.motion} fm-motion fade-left-fix fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Right
        variants={isMobile ? FADES[0] : FADES[1]}
      >
        <div className={`${styles.index_info_contact_inner}`}>
          <div
            className={`${styles.index_info_contact_inner_box} container-fluid`}
          >
            <div className={`${styles.index_info_contact_inner_row} row`}>
              <div
                className={`${styles.index_info_contact_inner_side} ${styles.index_info_contact_L} col-lg-7 col-md-7 col-sm-12 col-xs-12 half-second`}
              >
                <div className={`${styles.index_info_contact_inner_side_cnt}`}>
                  <h1 className="half-second">Reach out and Read.</h1>

                  <p className="half-second">
                    Learn about our background and history of why we love
                    hedgehogs. Also have our 24/7 support team deal with any
                    issue you are facing.
                  </p>

                  <a href="/info_contact" className="half-second">
                    <span>View Info/Contact</span>
                  </a>
                </div>
              </div>
              <div
                className={`${styles.index_info_contact_inner_side} ${styles.index_info_contact_R} col-lg-5 col-md-5 col-sm-12 col-xs-12 half-second`}
              >
                <div className={`${styles.index_info_contact_inner_side_cnt}`}>
                  <img
                    data-src={SMALL_AND_LARGE}
                    className="lazyload"
                    alt="An image of a small and large Pygmy Hedgehog."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
