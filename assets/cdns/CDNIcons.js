/**
 *
 *  This holds the urls/srcs for the icons
 *
 */

import { CDNIconReturn } from "./CDNReturns";

const FAVICON = CDNIconReturn("tab-icons", "favicon", "ico");
const ATI = CDNIconReturn("tab-icons", "apple-touch-icon", "png");
const F16 = CDNIconReturn("tab-icons", "favicon-16x16", "png");
const F32 = CDNIconReturn("tab-icons", "favicon-32x32", "png");

const LOGO_LARGE_RED = CDNIconReturn("logo", "logo-large-red", "webp");
const LOGO_LARGE_ORANGE = CDNIconReturn("logo", "logo-large-orange", "webp");

const FACEBOOK_ICON = CDNIconReturn("socials", "facebook", "webp");
const INSTAGRAM_ICON = CDNIconReturn("socials", "instagram", "webp");
const TWITTER_ICON = CDNIconReturn("socials", "twitter", "webp");

export {
  ATI,
  FAVICON,
  F16,
  F32,
  LOGO_LARGE_ORANGE,
  LOGO_LARGE_RED,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
};
