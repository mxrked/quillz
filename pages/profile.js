// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Profile/Profile.module.css";

export default function Profile() {
  const router = useRouter();

  // Checking if user is not logged in, takes them back to home
  useEffect(() => {
    // Checking sessionStorage
    if (sessionStorage.getItem("Logged In")) {
      if (
        sessionStorage.getItem("Username") &&
        sessionStorage.getItem("Encrypted Password")
      ) {
        return;
      } else {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <div id="page" className="page profile-page overrides_PROFILE">
      {/* Global Components */}
      <PageHead />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
