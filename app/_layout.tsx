import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

const Root = () => {
  const { replace } = useRouter();
  const { user } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const isInAuthGroup = segments[0] === "register";

    if (!user && !isInAuthGroup) {
      replace("/register");
    } else if (user && isInAuthGroup) {
      replace("/");
    }
  }, [segments, user]);

  return <Slot />;
};

export default Root;
