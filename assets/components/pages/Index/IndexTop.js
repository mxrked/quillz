/**
 *
 *  This is the index top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADE_IN } from "@/assets/anims/FADES";
import { INDEX_TOP_SLIDES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 15000,
  };

  return (
    <section id="indexTop" className={`${styles.index_top} overrides_IndexTop`}>
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        variants={FADE_IN}
      >
        <Slider className={`${styles.index_top_slider}`} {...SLIDER_SETTINGS}>
          <div
            key={INDEX_TOP_SLIDES[0].id}
            id={INDEX_TOP_SLIDES[0].id}
            className={`${styles.index_top_slider_slide} ${styles.slide_1}`}
          >
            <BackgroundImage
              src={INDEX_TOP_SLIDES[0].bg}
              className={`${styles.bg} half-second`}
            />

            <div className={`${styles.index_top_slider_slide_cnt}`}>
              <div className={`${styles.index_top_slider_slide_cnt_inner}`}>
                <h1 className="half-second">{INDEX_TOP_SLIDES[0].heading}</h1>
                <p className="half-second">{INDEX_TOP_SLIDES[0].text}</p>

                <a href={INDEX_TOP_SLIDES[0].link} className="half-second">
                  <span className="half-second">View Now</span>
                </a>
              </div>
            </div>
          </div>
          <div
            key={INDEX_TOP_SLIDES[1].id}
            id={INDEX_TOP_SLIDES[1].id}
            className={`${styles.index_top_slider_slide} ${styles.slide_2}`}
          >
            <BackgroundImage
              src={INDEX_TOP_SLIDES[1].bg}
              className={`${styles.bg} half-second`}
            />

            <div className={`${styles.index_top_slider_slide_cnt}`}>
              <div className={`${styles.index_top_slider_slide_cnt_inner}`}>
                <h1 className="half-second">{INDEX_TOP_SLIDES[1].heading}</h1>
                <p className="half-second">{INDEX_TOP_SLIDES[1].text}</p>

                <a href={INDEX_TOP_SLIDES[1].link} className="half-second">
                  <span className="half-second">View Now</span>
                </a>
              </div>
            </div>
          </div>
          <div
            key={INDEX_TOP_SLIDES[2].id}
            id={INDEX_TOP_SLIDES[2].id}
            className={`${styles.index_top_slider_slide} ${styles.slide_3}`}
          >
            <BackgroundImage
              src={INDEX_TOP_SLIDES[2].bg}
              className={`${styles.bg} half-second`}
            />

            <div className={`${styles.index_top_slider_slide_cnt}`}>
              <div className={`${styles.index_top_slider_slide_cnt_inner}`}>
                <h1 className="half-second">{INDEX_TOP_SLIDES[2].heading}</h1>
                <p className="half-second">{INDEX_TOP_SLIDES[2].text}</p>

                <a href={INDEX_TOP_SLIDES[2].link} className="half-second">
                  <span className="half-second">View Now</span>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>
    </section>
  );
};
