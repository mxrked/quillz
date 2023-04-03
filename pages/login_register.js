// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Login_Register/Login_Register.module.css";

export default function Login_Register() {
  const router = useRouter();

  // Checking if user is logged in, takes them back to home
  useEffect(() => {
    // Checking sessionStorage
    if (sessionStorage.getItem("Logged In")) {
      if (
        sessionStorage.getItem("Username") &&
        sessionStorage.getItem("Encrypted Password")
      ) {
        router.push("/");
      } else {
        return;
      }
    } else {
      return;
    }
  }, [router]);

  return (
    <div
      id="page"
      className="page login_register-page overrides_LOGIN_REGISTER"
    >
      {/* Global Components */}
      <PageHead />

      <main id="pageMain" className="page-main"></main>
    </div>
  );
}
