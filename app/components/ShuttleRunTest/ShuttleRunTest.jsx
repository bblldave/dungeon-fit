"use client";
import { useState } from "react";
import { Button, Typography, Space, InputNumber } from "antd";

const { Title, Paragraph, Text } = Typography;

const ShuttleRunTest = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  const onFinishTest = () => {
    onComplete(count);
  };

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Shuttle Run Test</Title>
      <Paragraph>
        <Text strong>Purpose:</Text> Assess your agility and speed by measuring
        how quickly you can change direction.
      </Paragraph>
      <Paragraph>
        <Text strong>Task:</Text> Set up two markers 20 feet apart. Run back and
        forth as many times as possible in one minute.
      </Paragraph>
      <Paragraph>
        <Text strong>Scoring:</Text> Each complete back-and-forth run increases
        your Dexterity score.
      </Paragraph>
      <Space direction="vertical" size="middle">
        <Text strong>How many runs did you complete?</Text>
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

export default ShuttleRunTest;
