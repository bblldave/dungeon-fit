"use client";
import { useEffect, useState } from "react";
import Onboarding from "./components/Onboarding/Onboarding";
import localForage from "localforage";
import { Button } from "antd";

export default function Home() {
  const [hasCompletedFitTest, setHasCompletedFitTest] = useState(false);
  const [hasCompletedClassSelection, setHasCompletedClassSelection] =
    useState(false);

  useEffect(() => {
    localForage.getItem("hasCompletedFitTest").then((value) => {
      if (value) {
        debugger;
        setHasCompletedFitTest(true);
      }
    });
  }, [hasCompletedFitTest]);

  if (!hasCompletedFitTest) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <Onboarding />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary">Primary Button</Button>
    </main>
  );
}
