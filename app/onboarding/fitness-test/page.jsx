"use client";
import React from "react";
import { useRouter } from "next/navigation";
import StepByStepTest from "../../components/StepByStepTest/StepByStepTest";
import ContentContainer from "../../components/shared/ContentContainer";
import PushUpTest from "../../components/PushUpTest/PushUpTest";
import ShuttleRunTest from "../../components/ShuttleRunTest/ShuttleRunTest";
import PlankHoldTest from "../../components/PlankHoldTest/PlankHoldTest";
import FitnessQuizTest from "../../components/FitnessQuizTest/FitnessQuizTest";
import FitnessTestIntroduction from "../../components/FitnessTestIntro/FitnessTestIntro";
import localForage from "localforage";

const fitnessTests = [
  {
    name: "Introduction",
    component: FitnessTestIntroduction,
    key: "intro",
  },
  {
    name: "Strength",
    component: PushUpTest,
    key: "strength",
  },
  {
    name: "Dexterity",
    component: ShuttleRunTest,
    key: "dexterity",
  },
  {
    name: "Constitution",
    component: PlankHoldTest,
    key: "constitution",
  },
  {
    name: "Intelligence",
    component: FitnessQuizTest,
    key: "intelligence",
  },
];

export default function FitnessTest() {
  const router = useRouter();

  function calculateAbilityScores(testResults) {
    const averagePushups = 30;
    const averagePlankSeconds = 90;
    const averageShuttleRuns = 10;
    const averageQuizScore = 14; // out of 20

    const pushupScale = 4;
    const plankScale = 12; // seconds
    const shuttleRunScale = 1;

    const strength =
      10 + Math.round((testResults.strength - averagePushups) / pushupScale);
    const constitution =
      10 +
      Math.round((testResults.constitution - averagePlankSeconds) / plankScale);
    const dexterity =
      10 +
      Math.round(
        (testResults.dexterity - averageShuttleRuns) / shuttleRunScale
      );
    const intelligence =
      10 + Math.round((testResults.intelligence - averageQuizScore) / 2);

    const abilityScores = {
      strength: Math.max(1, Math.min(20, strength)),
      constitution: Math.max(1, Math.min(20, constitution)),
      dexterity: Math.max(1, Math.min(20, dexterity)),
      intelligence: Math.max(1, Math.min(20, intelligence)),
    };

    return abilityScores;
  }

  const handleAllStepsCompleted = (testResults) => {
    localForage
      .setItem("hasCompletedFitTest", true)
      .then((value) => {
        console.log(testResults);

        const abilityScores = calculateAbilityScores(testResults);
        localForage.setItem("abilityScores", abilityScores);

        router.push("/onboarding/class-selection");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ContentContainer>
      <StepByStepTest
        testSteps={fitnessTests}
        onTestCompletion={handleAllStepsCompleted}
      />
    </ContentContainer>
  );
}
