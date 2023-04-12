/**
 *
 *  This is used to filter the search links
 *
 */

import {
  INDEX_KWS,
  INFO_CONTACT_KWS,
  TYPES_KWS,
  ATELERIX_KWS,
  ERINACEUS_KWS,
  MESECHINUS_KWS,
  HEMIECHINUS_KWS,
  PARAECHINUS_KWS,
  PRODUCTS_KWS,
  TOYS_KWS,
  FOOD_KWS,
  HOUSING_KWS,
  CART_KWS,
} from "../../../data/variables/ARRAYS";

// This is used to display a certain link if the input value matches a related keyword
function DisplaySearchLinkBasedOnKWS(kws, link) {
  for (let i = 0; i < kws.length; i++) {
    if (
      document.getElementById("searchIpt").value.toLowerCase().indexOf(kws[i]) >
      -1
    ) {
      link.style.display = "flex";
    }
  }
}

//! MAIN FUNCTION
export default function FilterSearchLinks() {
  const LINKS = document.getElementById("searchLinks");
  const SEARCH_LINK = LINKS.getElementsByTagName("li");
  const FILTER = document.getElementById("searchIpt").value.toUpperCase();

  for (let i = 0; i < SEARCH_LINK.length; i++) {
    const SPAN = SEARCH_LINK[i].getElementsByTagName("span")[0];
    const TXT_VAL = SPAN.textContent || SPAN.innerText;

    if (TXT_VAL.toUpperCase().indexOf(FILTER) > -1) {
      SEARCH_LINK[i].style.display = "";
    } else {
      SEARCH_LINK[i].style.display = "none";
    }
  }

  // Displays the different links if user inputs a certain word or pairing
  DisplaySearchLinkBasedOnKWS(INDEX_KWS, SEARCH_LINK[0]);
  DisplaySearchLinkBasedOnKWS(PRODUCTS_KWS, SEARCH_LINK[1]);
  DisplaySearchLinkBasedOnKWS(FOOD_KWS, SEARCH_LINK[2]);
  DisplaySearchLinkBasedOnKWS(TOYS_KWS, SEARCH_LINK[3]);
  DisplaySearchLinkBasedOnKWS(HOUSING_KWS, SEARCH_LINK[4]);
  DisplaySearchLinkBasedOnKWS(TYPES_KWS, SEARCH_LINK[5]);
  DisplaySearchLinkBasedOnKWS(ATELERIX_KWS, SEARCH_LINK[6]);
  DisplaySearchLinkBasedOnKWS(ERINACEUS_KWS, SEARCH_LINK[7]);
  DisplaySearchLinkBasedOnKWS(HEMIECHINUS_KWS, SEARCH_LINK[8]);
  DisplaySearchLinkBasedOnKWS(MESECHINUS_KWS, SEARCH_LINK[9]);
  DisplaySearchLinkBasedOnKWS(PARAECHINUS_KWS, SEARCH_LINK[10]);
  DisplaySearchLinkBasedOnKWS(INFO_CONTACT_KWS, SEARCH_LINK[11]);
  DisplaySearchLinkBasedOnKWS(CART_KWS, SEARCH_LINK[12]);
}
