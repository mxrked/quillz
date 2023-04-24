/**
 *
 *  This is the index products
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHome } from "react-icons/fa";

import { TriggerExitAnimations } from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import { FADES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Login_Register/Login_Register.module.css";

const CheckEmptyInputs = (inputs) => {
  let validInputs = false;

  inputs.forEach((input) => {
    if (input.value == "" || input.value.length == 0) {
      input.style.border = "1px solid red";
      validInputs = false;
    } else {
      validInputs = true;
      input.style.border = "none";
    }
  });

  return validInputs;
};

const CheckEmailValue = (email) => {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(EMAIL_REGEX)) {
    console.log("Valid Email!");
    email.style.border = "none";
    return true;
  } else {
    console.log("Invalid Email.");
    email.style.border = "1px solid red";

    return false;
  }
};

const CheckSamePasswords = () => {
  const PASSWORD = document.getElementById("registerPassword");
  const CONFIRM_PASSWORD = document.getElementById("registerConfirmPassword");

  let validPasswords = false;

  // Making sure that the inputs arent empty
  if (PASSWORD.value.length !== 0 || CONFIRM_PASSWORD.value.length !== 0) {
    if (PASSWORD.value === CONFIRM_PASSWORD.value) {
      validPasswords = true;

      PASSWORD.style.border = "none";
      CONFIRM_PASSWORD.style.border = "none";
    }
  }

  if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
    PASSWORD.style.border = "1px solid red";
    validPasswords = false;
  }
  if (CONFIRM_PASSWORD.value !== PASSWORD.value) {
    CONFIRM_PASSWORD.style.border = "1px solid red";
    validPasswords = false;
  }

  return validPasswords;
};

// This checks the invalidUser state value to determine if the current register inputs dont match an existing user
const StyleInvalidUserRegister = (invalidUser_REGISTER) => {
  if (invalidUser_REGISTER) {
    const INPUTS = [
      document.getElementById("registerEmail"),
      document.getElementById("registerPassword"),
      document.getElementById("registerConfirmPassword"),
    ];

    INPUTS.forEach((input) => {
      input.style.border = "1px solid red";
    });
  }
};

// This checks the invalidUser state value to determine if the current login inputs dont match an existing user
const StyleInvalidUserLogin = (invalidUser_LOGIN) => {
  if (invalidUser_LOGIN) {
    const INPUTS = [
      document.getElementById("loginEmail"),
      document.getElementById("loginPassword"),
    ];

    INPUTS.forEach((input) => {
      input.style.border = "1px solid red";
    });
  }
};

export const Login_RegisterMain = () => {
  //! Firebase Register
  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

      setInvalidUser_REGISTER(false);
    } catch (error) {
      console.log(error.message);

      setInvalidUser_REGISTER(true); // This indicates that the user is invalid/doesnt exist
    }
  };

  //! Firebase Login
  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);

      setValidUser(true);
      setInvalidUser_LOGIN(false);
    } catch (error) {
      console.log(error.message);
      setValidUser(false);
      setInvalidUser_LOGIN(true); // This indicates that the user is invalid/doesnt exist
    }
  };

  //! Firebase Signout
  // const Signout = async () => {
  //   await signOut(auth);
  // };

  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [invalidUser_REGISTER, setInvalidUser_REGISTER] = useState(false);
  const [invalidUser_LOGIN, setInvalidUser_LOGIN] = useState(false);
  const [validUser, setValidUser] = useState(false);
  const [user, setUser] = useState({});

  // Changing to a different user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // Exit animations trigger
  useEffect(() => {
    TriggerExitAnimations();
  }, []);

  // Styling invalid user for login
  useEffect(() => {
    StyleInvalidUserLogin(invalidUser_LOGIN);
  }, [invalidUser_LOGIN]);

  // Styling invalid user for register
  useEffect(() => {
    StyleInvalidUserRegister(invalidUser_REGISTER);
  }, [invalidUser_REGISTER]);

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, [router]);

  //! This will route the user after they successfully login
  useEffect(() => {
    if (validUser) {
      DeclareStorageVariable("session", "Logged In User", user?.email);
      router.push("/");
    }
  }, [validUser]);

  return (
    <section
      id="loginRegisterMain"
      className={`${styles.login_register_main} overrides_Login_RegisterMain`}
    >
      <motion.div
        className={`${styles.motion} fm-motion fade-in full-second`}
        ref={REF}
        initial="hidden"
        animate={CONTROLS}
        // isMobile = true - Fade In
        variants={isMobile ? FADES[0] : FADES[0]}
      >
        <div className={`${styles.login_register_main_inner}`}>
          <div className={`${styles.login_register_main_inner_top}`}>
            <div className={`${styles.login_register_main_inner_top_cnt}`}>
              <div className={`${styles.logo}`}>
                <span className={`${styles.top_text}`}>Quillz</span>
                <span className={`${styles.bottom_text}`}>
                  All things hedgie.
                </span>
              </div>

              <h1 className="half-second">Login or Register an Account.</h1>

              <p className="half-second">
                You can login or register your very on Quillz account that will
                allow you to get great benefits when supporting us in the
                future.
              </p>

              <a href="/" className="index-link half-second">
                <span>Go To Home</span>
                <FaHome className={`${styles.icon}`} />
              </a>
            </div>
          </div>

          <div className={`${styles.login_register_main_inner_forms}`}>
            <div
              className={`${styles.login_register_main_inner_forms_box} container-fluid`}
            >
              <div
                className={`${styles.login_register_main_inner_forms_row} row`}
              >
                <div
                  className={`${styles.login_register_main_inner_forms_form} ${styles.register_form_holder} ${styles.form_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div
                    className={`${styles.login_register_main_inner_forms_form_cnt}`}
                  >
                    <span className={`${styles.form_name} half-second`}>
                      Register an Account.
                    </span>

                    <div className={`${styles.form_set}`}>
                      <label className="half-second" for="registerEmail">
                        Email Address:
                      </label>

                      <input
                        name="registerEmail"
                        type="email"
                        id="registerEmail"
                        className="half-second"
                        placeholder="Ex: test@gmail.com"
                        onChange={(e) => {
                          setRegisterEmail(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className={`${styles.form_set}`}>
                      <label className="half-second" for="registerPassword">
                        Password:
                      </label>

                      <input
                        name="registerPassword"
                        type="password"
                        id="registerPassword"
                        className="half-second"
                        placeholder="Must be 6 characters or more."
                        onChange={(e) => {
                          setRegisterPassword(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className={`${styles.form_set}`}>
                      <label
                        className="half-second"
                        for="registerConfirmPassword"
                      >
                        Confirm Password:
                      </label>

                      <input
                        name="registerConfirmPassword"
                        type="password"
                        id="registerConfirmPassword"
                        className="half-second"
                        placeholder="Must be same password."
                        onChange={(e) => {
                          setRegisterPassword(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <button
                      className="half-second"
                      onClick={() => {
                        const INPUTS = [
                          document.getElementById("registerEmail"),
                          document.getElementById("registerPassword"),
                          document.getElementById("registerConfirmPassword"),
                        ];

                        const checkInputs = CheckEmptyInputs(INPUTS);
                        const checkEmail = CheckEmailValue(INPUTS[0]);
                        const checkPasswords = CheckSamePasswords();

                        if (checkInputs && checkEmail && checkPasswords) {
                          Register();
                          StyleInvalidUserRegister(invalidUser_REGISTER);
                        }
                      }}
                    >
                      <span>Register</span>
                    </button>
                  </div>
                </div>
                <div
                  className={`${styles.login_register_main_inner_forms_form} ${styles.login_form_holder} ${styles.form_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
                >
                  <div
                    className={`${styles.login_register_main_inner_forms_form_cnt}`}
                  >
                    <span className={`${styles.form_name} half-second`}>
                      Login to an Account.
                    </span>

                    <div className={`${styles.form_set}`}>
                      <label className="half-second">Email Address:</label>

                      <input
                        type="email"
                        id="loginEmail"
                        className="half-second"
                        placeholder="Enter your email address"
                        onChange={(e) => {
                          setLoginEmail(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <div className={`${styles.form_set}`}>
                      <label className="half-second">Password:</label>

                      <input
                        type="password"
                        id="loginPassword"
                        className="half-second"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          setLoginPassword(e.currentTarget.value);
                        }}
                      />
                    </div>

                    <button
                      className="half-second"
                      onClick={() => {
                        const INPUTS = [
                          document.getElementById("loginEmail"),
                          document.getElementById("loginPassword"),
                        ];

                        const checkEmail = CheckEmailValue(INPUTS[0]);
                        const checkInputs = CheckEmptyInputs(INPUTS);

                        // Making sure that the password is 6 or more characters
                        if (INPUTS[1].value.length >= 6) {
                          if (checkEmail && checkInputs) {
                            Login();
                            StyleInvalidUserLogin(invalidUser_LOGIN);
                          }
                        }
                      }}
                    >
                      <span>Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
