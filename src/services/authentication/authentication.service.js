import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { myFirebase } from "./firebase";
const auth = getAuth(myFirebase);
export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
