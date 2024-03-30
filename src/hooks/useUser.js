import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

function useUser() {
  const [user, setUser] = useState();
  useEffect(() => {
    let unsubscribe;
    auth.onAuthStateChanged((user) => setUser(user));
    return unsubscribe;
  }, []);

  return user;
}

export { useUser };
