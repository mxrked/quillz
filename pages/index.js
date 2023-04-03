// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div id="page" className="page index-page overrides_INDEX">
      {/* Global Components */}
      <PageHead />

      <DesktopNav />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
