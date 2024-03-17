"use client";
import { useState } from "react";
import { Button, Space, Typography, InputNumber } from "antd";

const { Title, Paragraph, Text } = Typography;

const PlankHoldTest = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  const onFinishTest = () => {
    onComplete(count);
  };

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Plank Hold Test</Title>
      <Paragraph>
        <Text strong>Purpose:</Text> Measure your core strength and endurance.
      </Paragraph>
      <Paragraph>
        <strong>Task:</strong> Hold a plank for as long as possible.
      </Paragraph>
      <Paragraph>
        <Text strong>Scoring:</Text> Every 10 seconds holding the plank
        increases your Constitution score.
      </Paragraph>
      <Space direction="vertical" size="middle">
        <Text strong>How many seconds could you hold your plank?</Text>
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

export default PlankHoldTest;
