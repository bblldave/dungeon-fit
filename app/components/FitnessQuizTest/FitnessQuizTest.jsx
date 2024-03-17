"use client";
import { useState } from "react";
import { Button, Typography, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

const FitnessQuizTest = ({ onComplete }) => {
  const [score, setScore] = useState(0); // Score based on correct answers

  const onFinishTest = () => {
    onComplete(score);
  };

  // Implement the quiz logic here

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Fitness Knowledge Quiz</Title>
      <Paragraph>
        <Text strong>Purpose:</Text> Test your knowledge on fitness-related
        topics like nutrition, exercise mechanics, and recovery.
      </Paragraph>
      <Paragraph>
        <Text strong>Task:</Text> Answer a series of questions related to
        fitness.
      </Paragraph>
      <Paragraph>
        <Text strong>Scoring:</Text> Each correct answer increases your
        Intelligence score.
      </Paragraph>
      <Space direction="vertical" size="middle">
        {/* Quiz interactions go here */}
      </Space>
      <Button type="primary" onClick={onFinishTest}>
        Complete Test
      </Button>
    </Space>
  );
};

export default FitnessQuizTest;
