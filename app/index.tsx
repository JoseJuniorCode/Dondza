import { Redirect } from "expo-router";
import Loader from "@/components/loader/loader";
import { useState, useEffect } from "react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return <Redirect href="/(root)/home" />;
}
