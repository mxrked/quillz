/**
 *
 *  This is used to close the mobile nav
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const MENU = document.getElementById("mobileNavMenu");
  const DARKEN = document.getElementById("mobileNavMenuDarken");
  const MAIN = document.getElementById("mobileNavMenuMain");
  const LINKS_1 = document.getElementById("mobileNavMenuProductsLinks");
  const LINKS_2 = document.getElementById("mobileNavMenuTypesLinks");

  RemoveStorageVariable("session", "Mobile Nav Opened");

  MENU.style.overflowY = "hidden";
  MENU.style.pointerEvents = "none";

  LINKS_1.style.height = 0;
  document.querySelectorAll(".sub-links-toggler-icon")[0].style.transform =
    "rotate(0deg)";
  LINKS_2.style.height = 0;
  document.querySelectorAll(".sub-links-toggler-icon")[1].style.transform =
    "rotate(0deg)";

  document.querySelectorAll(".mobile-nav-menu-cnt").forEach((cnt) => {
    cnt.style.opacity = 0;
    cnt.style.visibility = "hidden";
  });

  setTimeout(() => {
    MAIN.style.width = "0";
  }, 900);

  setTimeout(() => {
    DARKEN.style.opacity = 0;
    DARKEN.style.visibility = "hidden";
  }, 1200);

  setTimeout(() => {
    if (
      !sessionStorage.getItem("Search Opened") &&
      !sessionStorage.getItem("Modal Opened")
    ) {
      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }
  }, 2000);
}
