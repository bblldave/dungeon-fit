"use client";
import { useState } from "react";
import { InputNumber, Button, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const PushUpTest = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  const onFinishTest = () => {
    onComplete(count);
  };

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Push-Up Test</Title>
      <Paragraph>
        <Text strong>Purpose:</Text> Measure your upper body strength, focusing
        on the chest, shoulders, and triceps.
      </Paragraph>
      <Paragraph>
        <Text strong>Task:</Text> Perform as many push-ups as you can in one
        minute. Keep your back flat and lower your body until your chest nearly
        touches the ground, then push back up to the starting position.
      </Paragraph>
      <Paragraph>
        <Text strong>Scoring:</Text> Record the total number of push-ups
        completed. This will determine your Strength score.
      </Paragraph>
      <Space direction="vertical" size="middle">
      <Text strong>How many push-ups did you do?</Text>
        <InputNumber
          min={0}
          value={count}
          onChange={setCount}
          className="text-black" // Assuming InputNumber doesn't fully override styles
        />
      </Space>
      <Button type="primary" onClick={onFinishTest}>
        Complete Test
      </Button>
    </Space>
  );
};

export default PushUpTest;
