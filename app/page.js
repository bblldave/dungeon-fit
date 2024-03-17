"use client";
import { useEffect, useState } from "react";
import localForage from "localforage";
import ContentContainer from "./components/shared/ContentContainer";
import Exercise from "./components/Exercise/Exercise";
import exercises from "./data/exercises";
import Onboarding from "./components/Onboarding/Onboarding";
import { Flex } from "antd";
import { Typography } from 'antd';

const { Title } = Typography;

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
        <Title>Choose your exercises!</Title>
        <Flex justify="center" wrap="wrap" style={{ height: "100%", gap: "20px" }}>
          {exercises.map((exercise) => (
            <Exercise className="mx-4" key={exercise.id} exercise={exercise} />
          ))}
        </Flex>
      </ContentContainer>
    </main>
  );
}
