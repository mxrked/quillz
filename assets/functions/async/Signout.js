/**
 *
 *  This is used to sign out the user
 *
 */

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

async function Signout() {
  await signOut(auth);
}

export default Signout;
