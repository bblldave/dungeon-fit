"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Steps, Button, Space, Card } from "antd";
import localForage from "localforage";

const { Step } = Steps;

const StepByStepTest = ({ testSteps, dataStorageKey }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [testResults, setTestResults] = useState({});

  const router = useRouter();

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleTestCompletion = (result, testKey) => {
    setTestResults({ ...testResults, [testKey]: result });
    if (currentStep < testSteps.length - 1) {
      next();
    }
  };

  const handleAllStepsCompleted = () => {
    // Mark initial fitness test as completed
    localForage
      .setItem("hasCompletedFitTest", true)
      .then((value) => {
        // Calculate ability scores based on test results
        router.push("/onboarding/class-selection");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!testSteps) {
    return <p>Steps Not defined</p>;
  }

  return (
    <Space direction="vertical" size="middle">
      <Steps current={currentStep}>
        {testSteps.map((test) => (
          <Step key={test.key} title={test.name} />
        ))}
      </Steps>

      <Card>
        {testSteps[currentStep].component &&
          React.createElement(testSteps[currentStep].component, {
            onComplete: (result) =>
              handleTestCompletion(result, testSteps[currentStep].key),
          })}
      </Card>

      <div className="flex justify-between">
        {currentStep > 0 ? <LeftOutlined onClick={prev} /> : <div></div>}
        {currentStep < testSteps.length - 1 && <RightOutlined onClick={next} />}
      </div>

      {currentStep === testSteps.length - 1 && (
        <Button type="primary" onClick={handleAllStepsCompleted}>
          Finish Test
        </Button>
      )}
    </Space>
  );
};

export default StepByStepTest;
