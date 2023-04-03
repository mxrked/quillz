/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import { ATI, FAVICON, F16, F32 } from "../../cdns/CDNIcons";

import {
  INDEX_KWS,
  TYPES_KWS,
  PRODUCTS_KWS,
  INFO_CONTACT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Adding Descriptions/Titles/Keywords/Robots and URLS
  const INDEX_DESC =
    "Quillz is your place to go when you are in need of all things hedgehog. We provide you with different products that you can use with your hedgehog. You can also learn the different types of hedgehog as well.";
  const TYPES_DESC =
    "Learn the many different types of hedgehogs and how they were discovered and what they look like. There is 18 different hedgehog types.";
  const PRODUCTS_DESC =
    "We provide you with all of the essentials for any hedgehog. We can provide food, toys and housing and we promise your hedgehog will be happy with them.";
  const INFO_CONTACT_DESC =
    "Interested in wanting to learn more about Quillz? Or are you in need of some help/support? You can visit the Info/Contact page to get best of both worlds.";

  const DESCS = [INDEX_DESC, TYPES_DESC, PRODUCTS_DESC, INFO_CONTACT_DESC];
  let desc; // This is used to pass the desc to the element
  let kws; // This is used to pass the keywords to the element
  let title; // This is used to pass the title to the element
  let robots; // This is used to pass the robots to the element
  let url; // This is used to pass the url to the element

  // Index Page
  if (router.pathname == "/") {
    title = "Quillz - Home";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }
  // Types Page
  if (router.pathname == "/types") {
    title = "Quillz - Types of Hedgehog";
    robots = "index, follow";
    url = router.pathname;

    if (TYPES_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    if (TYPES_KWS.length > 0) {
      kws = TYPES_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Products Page
  if (router.pathname == "/products") {
    title = "Quillz - Hedgehog Products";
    robots = "index, follow";
    url = router.pathname;

    if (PRODUCTS_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    if (PRODUCTS_KWS.length > 0) {
      kws = PRODUCTS_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Info/Contact Page
  if (router.pathname == "/info_contact") {
    title = "Quillz - Info/Contact";
    robots = "index, follow";
    url = router.pathname;

    if (INFO_CONTACT_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    if (INFO_CONTACT_KWS.length > 0) {
      kws = INFO_CONTACT_KWS;
    } else {
      kws = "No keywords";
    }
  }
  // Cart Page
  if (router.pathname == "/cart") {
    title = "Quillz - My Cart";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }
  // Login/Register Page
  if (router.pathname == "/login_register") {
    title = "Quillz - Login/Register";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />

      <link rel="shortcut icon" href={FAVICON} />
      <link rel="apple-touch-icon" sizes="180x180" href={ATI} />
      <link rel="icon" type="image/png" sizes="32x32" href={F32} />
      <link rel="icon" type="image/png" sizes="16x16" href={F16} />
    </Head>
  );
};
