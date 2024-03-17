"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localForage from "localforage";
import { Button, Spin } from "antd";
import ContentContainer from "./components/shared/ContentContainer";
import Exercise from "./components/Exercise/Exercise";
import exercises from "./data/exercises";
import Onboarding from "./components/Onboarding/Onboarding";
import { Flex } from "antd";
import { Typography } from 'antd';

const { Title } = Typography;

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
          <Title>Choose your exercises!</Title>
          <Flex justify="center" wrap="wrap" style={{ height: "100%", gap: "20px" }}>
            {exercises.map((exercise) => (
              <Exercise className="mx-4" key={exercise.id} exercise={exercise} />
            ))}
          </Flex>
        )}
      </ContentContainer>
    </main>
  );
}