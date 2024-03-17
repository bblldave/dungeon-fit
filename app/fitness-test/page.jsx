import React from "react";
import StepByStepTest from "../components/StepByStepTest/StepByStepTest";
import ContentContainer from "../components/shared/ContentContainer";
import PushUpTest from "../components/PushUpTest/PushUpTest";
import ShuttleRunTest from "../components/ShuttleRunTest/ShuttleRunTest";
import PlankHoldTest from "../components/PlankHoldTest/PlankHoldTest";
import FitnessQuizTest from "../components/FitnessQuizTest/FitnessQuizTest";
import FitnessTestIntroduction from "../components/FitnessTestIntro/FitnessTestIntro";

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
  return (
    <ContentContainer>
      <StepByStepTest testSteps={fitnessTests} />
    </ContentContainer>
  );
}
