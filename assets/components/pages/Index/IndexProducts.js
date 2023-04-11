/**
 *
 *  This is the index products
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "@/assets/data/variables/ARRAYS";
import { EATING_2 } from "@/assets/cdns/CDNBgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexProducts = () => {
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
      id="indexProducts"
      className={`${styles.index_products} overrides_IndexProducts`}
    >
      <motion.div
        className={`${styles.motion} fm-motion fade-left-fix fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        // isMobile = false - Fade Left
        variants={isMobile ? FADES[0] : FADES[1]}
      >
        <div className={`${styles.index_products_inner}`}>
          <div
            className={`${styles.index_products_inner_bg_holder} half-second`}
          >
            <BackgroundImage
              src={EATING_2}
              className={`${styles.bg} half-second`}
              width="100%"
              height="100%"
            />
          </div>

          <div className={`${styles.index_products_inner_main}`}>
            <div className={`${styles.index_products_inner_main_cnt}`}>
              <h1 className="half-second">
                We have the goods for your hedgehog.
              </h1>

              <p className="half-second">
                We provide your hedgie with the best products. All ranging from
                toys, food and housing. All of which your hedgie will love!
              </p>

              <a href="/products" className="half-second">
                <span>View Products</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
