// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { Login_RegisterMain } from "@/assets/components/pages/Login_Register/Login_RegisterMain";

// Style Imports
import "../assets/styles/modules/Login_Register/Login_Register.module.css";
export default function Login_Register() {
  const router = useRouter();

  // Exit animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Checking if user is logged in, takes them back to home
  useEffect(() => {
    // Checking sessionStorage
    setTimeout(() => {
      if (sessionStorage.getItem("Logged In User")) {
        router.push("/");
      } else {
        return;
      }
    }, 1000);
  }, [router]);

  return (
    <div
      id="page"
      className="page login_register-page overrides_LOGIN_REGISTER"
    >
      {/* Global Components */}
      <PageHead />

      <main id="pageMain" className="page-main">
        <Login_RegisterMain />
      </main>
    </div>
  );
}
