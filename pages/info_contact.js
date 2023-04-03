// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Info_Contact/Info_Contact.module.css";

export default function Info_Contact() {
  const router = useRouter();

  return (
    <div id="page" className="page info_contact-page overrides_INFO_CONTACT">
      {/* Global Components */}
      <PageHead />

      <DesktopNav />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
