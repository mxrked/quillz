// This file is used to hold some objects

import Hedgehog from "../classes/Hedgehog";
import IndexTopSlide from "../classes/IndexTopSlide";
import TypeCategory from "../classes/TypeCategory";

import {
  ATELERIX,
  ERINACEUS,
  HEMIECHINUS,
  MESECHINUS,
  PARAECHINUS,
} from "../../cdns/CDNBgs";

const INDEX_TOP_SLIDE_1 = new IndexTopSlide(
  "SLIDE_1",
  "Provide for your hedgehog.",
  "Browse our great products that are sure to make your hedgehog happy.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/eating/eating-1.webp",
  "/products"
);
const INDEX_TOP_SLIDE_2 = new IndexTopSlide(
  "SLIDE_2",
  "We love all things hedgie.",
  "There is so much to learn about hedgehogs and why they are so great.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/hedgehog-in-grass/hedgehog-in-grass-1.webp",
  "/info_contact"
);
const INDEX_TOP_SLIDE_3 = new IndexTopSlide(
  "SLIDE_3",
  "A legacy of hedgehogs.",
  "There are different types of hedgehog in the world, so why not learn them.",
  "https://raw.githubusercontent.com/mxrked/quillz_CDN/master/bgs/pygmy/pygmy-2.webp",
  "/types"
);

const TYPE_ATELERIX = new TypeCategory(
  "CAT_ATELERIX",
  "Atelerix",
  ATELERIX,
  "/types#atelerix"
);
const TYPE_ERINACEUS = new TypeCategory(
  "CAT_ERINACEUS",
  "Erinaceus",
  ERINACEUS,
  "/types#erinaceus"
);
const TYPE_HEMIECHINUS = new TypeCategory(
  "CAT_HEMIECHINUS",
  "Hemiechinus",
  HEMIECHINUS,
  "/types#hemiechinus"
);
const TYPE_MESECHINUS = new TypeCategory(
  "CAT_MESECHINUS",
  "Mesechinus",
  MESECHINUS,
  "/types#mesechinus"
);
const TYPE_PARAECHINUS = new TypeCategory(
  "CAT_PARAECHINUS",
  "Paraechinus",
  PARAECHINUS,
  "/types#paraechinus"
);

export { INDEX_TOP_SLIDE_1, INDEX_TOP_SLIDE_2, INDEX_TOP_SLIDE_3 };
export {
  TYPE_ATELERIX,
  TYPE_ERINACEUS,
  TYPE_HEMIECHINUS,
  TYPE_MESECHINUS,
  TYPE_PARAECHINUS,
};
