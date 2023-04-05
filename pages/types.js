// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import TriggerExitAnimations from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";

// Style Imports
import "../assets/styles/modules/Types/Types.module.css";

export default function Types() {
  const router = useRouter();

  // Exit animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  return (
    <div id="page" className="page types-page overrides_types">
      {/* Global Components */}
      <PageHead />

      <DesktopNav />
      <MobileNav />
      <MobileNavMenu />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
