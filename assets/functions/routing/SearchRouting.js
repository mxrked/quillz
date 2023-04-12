/**
 *
 *  This is used to route when the user uses the search
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
} from "../../data/variables/ARRAYS";

import DeclareStorageVariable from "../data/storage/DeclareStorageVariable";
import CloseSearch from "../dom/closers/CloseSearch";
import { TriggerExitAnimations_NON_LINKS } from "../dom/triggers/TriggerExitAnimations";

function RouteBasedOnKWS(e, window, input, kws, linkIndex, type) {
  const SEARCH_LINKS = document.querySelectorAll(".search-link");

  for (let i = 0; i < kws.length; i++) {
    const UPPERCASED_LINK = kws[i].toUpperCase();
    const UPPERCASED_INPUT = input.value.toUpperCase();

    console.log(UPPERCASED_INPUT);

    setTimeout(() => {
      if (UPPERCASED_INPUT.indexOf(UPPERCASED_LINK) > -1) {
        if (SEARCH_LINKS[linkIndex].style.opacity != 0.5) {
          //! These 2 if statements are to prevent some strange cancel rendering route error

          // A basic link (NON HASH)
          if (type == "link") {
            e.preventDefault();

            CloseSearch();
            // This will trigger the exit animations
            setTimeout(() => {
              TriggerExitAnimations_NON_LINKS();
            }, 1500);

            DeclareStorageVariable(
              "session",
              "HREF",
              SEARCH_LINKS[linkIndex].href
            );

            // Route to href value
            setTimeout(() => {
              window.location.href = sessionStorage.getItem("HREF");
            }, 2000);
          }

          // A hash/slug
          if (type == "hash") {
            e.preventDefault();

            CloseSearch();
            // This will trigger the exit animations
            setTimeout(() => {
              TriggerExitAnimations_NON_LINKS();
            }, 1500);

            DeclareStorageVariable(
              "session",
              "HREF",
              SEARCH_LINKS[linkIndex].href
            );

            // Routing after search closes
            setTimeout(() => {
              window.location.href = sessionStorage.getItem("HREF");
            }, 2000);
          }
        } else {
          console.log("You are already on that page..");
        }
      }
    }, 1300);
  }
}

//! MAIN FUNCTION
export default function SearchRoute(e, window) {
  const INPUT = document.getElementById("searchIpt");

  RouteBasedOnKWS(e, window, INPUT, INDEX_KWS, 0, "link");
  RouteBasedOnKWS(e, window, INPUT, PRODUCTS_KWS, 1, "link");
  RouteBasedOnKWS(e, window, INPUT, FOOD_KWS, 2, "hash");
  RouteBasedOnKWS(e, window, INPUT, TOYS_KWS, 3, "hash");
  RouteBasedOnKWS(e, window, INPUT, HOUSING_KWS, 4, "hash");
  RouteBasedOnKWS(e, window, INPUT, TYPES_KWS, 5, "link");
  RouteBasedOnKWS(e, window, INPUT, ATELERIX_KWS, 6, "hash");
  RouteBasedOnKWS(e, window, INPUT, ERINACEUS_KWS, 7, "hash");
  RouteBasedOnKWS(e, window, INPUT, HEMIECHINUS_KWS, 8, "hash");
  RouteBasedOnKWS(e, window, INPUT, MESECHINUS_KWS, 9, "hash");
  RouteBasedOnKWS(e, window, INPUT, PARAECHINUS_KWS, 10, "hash");
  RouteBasedOnKWS(e, window, INPUT, INFO_CONTACT_KWS, 11, "link");
  RouteBasedOnKWS(e, window, INPUT, CART_KWS, 12, "link");
}
