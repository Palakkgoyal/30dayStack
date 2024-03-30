import { useEffect, useState } from "react";
import { auth2 } from "../firebase/config";

function useAuthStateReady() {
  const [isAuthStateReady, setIsAuthStateReady] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await auth2.authStateReady();
        setIsAuthStateReady(true);
      } catch (error) {
        console.log("Unable to call authStateReady", error);
      } finally {
      }
    })();
  }, []);

  return isAuthStateReady;
}

export { useAuthStateReady };
