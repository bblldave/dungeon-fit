"use client";
import { useEffect, useState } from "react";
import Onboarding from "./components/Onboarding/Onboarding";
import localForage from "localforage";
import { Button } from "antd";
import ContentContainer from "./components/shared/contentContainer";

export default function Home() {
  const [hasCompletedFitTest, setHasCompletedFitTest] = useState(false);
  const [hasCompletedClassSelection, setHasCompletedClassSelection] =
    useState(false);

  useEffect(() => {
    localForage.getItem("hasCompletedFitTest").then((value) => {
      if (value) {
        setHasCompletedFitTest(true);
      }
    });
  }, [hasCompletedFitTest]);

  if (!hasCompletedFitTest) {
    return (
      <main>
        <ContentContainer>
          <Onboarding />
        </ContentContainer>
      </main>
    );
  }

  return (
    <main>
      <ContentContainer>
        <p>Fitness test completed. Still need to add a home page</p>
      </ContentContainer>
    </main>
  );
}
