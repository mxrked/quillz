// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Cart/Cart.module.css";

export default function Cart() {
  const router = useRouter();

  return (
    <div id="page" className="page cart-page overrides_CART">
      {/* Global Components */}
      <PageHead />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
