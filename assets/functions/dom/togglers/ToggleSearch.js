/**
 *
 *  This is used to toggle the search
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleSearch() {
  const SEARCH = document.getElementById("search");
  const SEARCH_INNER = document.getElementById("searchInner");

  DeclareStorageVariable("session", "Search Opened", true);

  document.body.style.pointerEvents = "none";
  document.body.style.overflowY = "hidden";

  SEARCH.style.display = "flex";

  setTimeout(() => {
    SEARCH.style.opacity = 1;
    SEARCH.style.visibility = "visible";
  }, 600);

  setTimeout(() => {
    SEARCH_INNER.style.opacity = 1;
    SEARCH_INNER.style.visibility = "visible";
  }, 900);

  setTimeout(() => {
    SEARCH.style.overflowY = "auto";
    SEARCH.style.pointerEvents = "auto";
  }, 1800);
}
