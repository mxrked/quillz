// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLinks";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";

// Style Imports
import "../assets/styles/modules/Products/Products.module.css";

export default function Products() {
  const router = useRouter();

  // Exit animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".products-link");
  }, []);

  return (
    <div id="page" className="page products-page overrides_PRODUCTS">
      {/* Global Components */}
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />
      <Search />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
