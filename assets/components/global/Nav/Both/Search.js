/**
 *
 *  This is the search
 *
 */

import { useEffect } from "react";

import { FaSearch, FaTimes } from "react-icons/fa";

import CloseSearch from "@/assets/functions/dom/closers/CloseSearch";
import FilterSearchLinks from "@/assets/functions/dom/filters/FilterSearchLinks";
import SearchRoute from "@/assets/functions/routing/SearchRouting";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const Search = () => {
  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div className={`${styles.search_inner} half-second`} id="searchInner">
        <div className={`${styles.search_inner_top}`}>
          <h1 className="half-second">Search</h1>
          <button
            id="searchCloser"
            className="half-second"
            onClick={() => {
              CloseSearch();
            }}
          >
            <FaTimes className={`${styles.icon}`} />
          </button>
        </div>

        <div className={`${styles.search_inner_input_holder}`}>
          <input
            type="text"
            id="searchIpt"
            className="half-second"
            placeholder="Search..."
            onKeyUp={() => {
              FilterSearchLinks();
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                SearchRoute(e, window);
              }
            }}
          />

          <button id="searchGo" className="half-second">
            <FaSearch className={`${styles.icon}`} />
          </button>
        </div>

        <ul id="searchLinks" className={`${styles.search_links}`}>
          <li className="search-link-li">
            <a href="/" className={`half-second search-link`}>
              <span>Home/Index</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/products" className={`half-second search-link`}>
              <span>All Products</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/products#food" className={`half-second search-link`}>
              <span>Food</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/products#toys" className={`half-second search-link`}>
              <span>Toys</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/products#housing" className={`half-second search-link`}>
              <span>Housing</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types" className={`half-second search-link`}>
              <span>All Types</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types#atelerix" className={`half-second search-link`}>
              <span>Atelerix</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types#erinaceus" className={`half-second search-link`}>
              <span>Erinaceus</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types#hemiechinus" className={`half-second search-link`}>
              <span>Hemiechinus</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types#mesechinus" className={`half-second search-link`}>
              <span>Mesechinus</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/types#paraechinus" className={`half-second search-link`}>
              <span>Paraechinus</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/info_contact" className={`half-second search-link`}>
              <span>Info/Contact</span>
            </a>
          </li>
          <li className="search-link-li">
            <a href="/cart" className={`half-second search-link`}>
              <span>My Cart</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
