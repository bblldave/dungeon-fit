import React from "react";
import { Button, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const Exercise = ({
  exercise: { name, description, reps, duration, xpOnCompletion },
}) => {
  return (
    <Card
      title={name}
      style={{ width: 300 }}
      actions={[
        <Button key="complete" type="primary" icon={<CheckOutlined />}>
          Complete
        </Button>,
      ]}
    >
      <p>{description}</p>
      <br />
      {reps && (
        <p>
          <strong>Reps:</strong> {reps}
        </p>
      )}
      {duration && (
        <p>
          <strong>Duration:</strong> {duration}
        </p>
      )}
      <p>
        <strong>XP on Completion:</strong> {xpOnCompletion}
      </p>
    </Card>
  );
};

export default Exercise;
