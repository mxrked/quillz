// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  return (
    <div id="page" className="page products-page overrides_PRODUCTS">
      {/* Global Components */}
      <PageHead />

      <DesktopNav />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
