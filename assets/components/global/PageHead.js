/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";

import { ATI, FAVICON, F16, F32 } from "../../cdns/CDNIcons";

import {
  SITE_KWS,
  SERIES_KWS,
  CONTACT_KWS,
  NEWS_KWS,
  LOGIN_REGISTER_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = (props) => {
  const router = useRouter();

  //! Adding description content
  const INDEX_DESC =
    "Looking for an anime streaming website that has all your favorite shows in one place? Look no further than Animex Streaming! Our vast collection of anime includes classic favorites and new releases, all available to stream in high quality. With easy-to-use navigation and a user-friendly interface, Animex Streaming is the perfect destination for anime fans of all ages. Sign up now and start watching your favorite shows today!";
  const SERIES_DESC = "";
  const CONTACT_DESC = "";
  const NEWS_DESC = "";
  const LOGIN_REGISTER_DESC = "";
  const DESCS = [
    INDEX_DESC,
    SERIES_DESC,
    CONTACT_DESC,
    NEWS_DESC,
    LOGIN_REGISTER_DESC,
  ];
  let desc; // This is used to pass the desc to the element

  // Index Page
  if (router.pathname == "/") {
    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }
  }

  // Series Page
  if (router.pathname == "/series") {
    if (SERIES_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[0];
    }
  }

  // Contact Page
  if (router.pathname == "/contact") {
    if (CONTACT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[0];
    }
  }

  // News Page
  if (router.pathname == "/news") {
    if (NEWS_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[0];
    }
  }

  // Login/Register Page
  if (router.pathname == "/login_register") {
    if (LOGIN_REGISTER_DESC.length > 0) {
      desc = DESCS[4];
    } else {
      desc = DESCS[0];
    }
  }

  //! Adding keywords content

  let kws; // This is used to pass the keywords to the element

  // Index Page
  if (router.pathname == "/") {
    kws = SITE_KWS;
  }

  // Series Page
  if (router.pathname == "/series") {
    if (SERIES_KWS.length > 0) {
      kws = SERIES_KWS;
    } else {
      kws = SITE_KWS;
    }
  }

  // Contact Page
  if (router.pathname == "/contact") {
    if (CONTACT_KWS.length > 0) {
      kws = CONTACT_KWS;
    } else {
      kws = SITE_KWS;
    }
  }

  // News Page
  if (router.pathname == "/news") {
    if (NEWS_KWS.length > 0) {
      kws = NEWS_KWS;
    } else {
      kws = SITE_KWS;
    }
  }

  // Login/Register Page
  if (router.pathname == "/login_register") {
    if (LOGIN_REGISTER_KWS.length > 0) {
      kws = LOGIN_REGISTER_KWS;
    } else {
      kws = SITE_KWS;
    }
  }

  return (
    <Head id="pageHead">
      <title>{props.title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={props.robots} />

      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={props.url} />

      <link rel="canonical" href={props.url} />

      <link rel="shortcut icon" href={FAVICON} />
      <link rel="apple-touch-icon" sizes="180x180" href={ATI} />
      <link rel="icon" type="image/png" sizes="32x32" href={F32} />
      <link rel="icon" type="image/png" sizes="16x16" href={F16} />
    </Head>
  );
};
