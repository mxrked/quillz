/**
 *
 *  This is the index types
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES, TYPE_CATEGORIES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTypes = () => {
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
      id="indexTypes"
      className={`${styles.index_types} overrides_IndexTypes`}
    >
      <motion.div
        className={`${styles.motion} fm-motion fade-right-fix fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Right
        variants={isMobile ? FADES[0] : FADES[2]}
      >
        <div className={`${styles.index_types_inner}`}>
          <div className={`${styles.index_types_inner_top}`}>
            <h1 className="half-second">Learn the different hedgehogs.</h1>

            <p>
              There are currently 17 different species of hedgehog, with each
              following under a specific family/type. Those types being:
              Atelerix, Erinaceus, Hemiechinus, Mesechinus, and Paraechinus
            </p>

            <a href="/types" className="types-link half-second">
              <span>View Types</span>
            </a>
          </div>

          <div className={`${styles.index_types_inner_main}`}>
            <div
              className={`${styles.index_types_inner_main_box} container-fluid`}
            >
              <div className={`${styles.index_types_inner_main_row} row`}>
                {TYPE_CATEGORIES.map((type) => (
                  <div
                    className={`${styles.index_type} col-lg-4 col-md-4 col-sm-6 col-xs-12 half-second`}
                  >
                    <BackgroundImage
                      src={type.bg}
                      className={`${styles.bg} half-second`}
                      width="100%"
                      height="100%"
                    />

                    <a href={type.link} className="half-second">
                      <span>{type.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
