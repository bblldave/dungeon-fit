"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localForage from "localforage";
import { Button, Spin } from "antd";
import ContentContainer from "./components/shared/ContentContainer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedFitTest, setHasCompletedFitTest] = useState(false);
  const [hasCompletedClassSelection, setHasCompletedClassSelection] = useState(false);

  const router = useRouter();

  useEffect(() => {
    localForage.getItem("hasCompletedFitTest").then((value) => {
      if (value) {
        setHasCompletedFitTest(true);
      }
      setIsLoading(false);
    });
  }, []);

  if (!isLoading && !hasCompletedFitTest) {
    router.push("/onboarding");
  }

  return (
    <main>
      <ContentContainer>
        {isLoading ? (
          <Spin size="large" />
        ) : (

          <p>Fitness test completed. Still need to add a home page</p>

        )}
      </ContentContainer>
    </main>
  );
}