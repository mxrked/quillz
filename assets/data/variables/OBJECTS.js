// This file is used to hold some objects

import Hedgehog from "../classes/Hedgehog";
import IndexTopSlide from "../classes/IndexTopSlide";

const INDEX_TOP_SLIDE_1 = new IndexTopSlide(
  "#SLIDE_1",
  "Provide for your hedgehog.",
  "There is so much to learn about hedgehogs and why they are so great.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/eating/eating-1.webp",
  "/products"
);
const INDEX_TOP_SLIDE_2 = new IndexTopSlide(
  "#SLIDE_2",
  "We have a love for all things hedgie.",
  "There is so much to learn about hedgehogs and why they are so great.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/hedgehog-in-grass/hedgehog-in-grass-1.webp",
  "/info"
);
const INDEX_TOP_SLIDE_3 = new IndexTopSlide(
  "#SLIDE_3",
  "Learn the legacy of hedgehogs.",
  "There are different types of hedgehog in the world, so why not learn them.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/pygmy/pygmy-2.webp",
  "/types"
);

export { INDEX_TOP_SLIDE_1, INDEX_TOP_SLIDE_2, INDEX_TOP_SLIDE_3 };
export {};
