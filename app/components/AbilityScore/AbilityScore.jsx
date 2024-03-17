import React from "react";
import { Space, Typography, Flex } from "antd";

const { Title, Paragraph, Text } = Typography;

const AbilityScore = ({ type, value }) => {
  return (
    <Space direction="vertical" className="border rounded  m-3">
      <Flex vertical align="center" justify="center" className="px-4">
        <Text strong>
          {type}
        </Text>
        <Paragraph>{value}</Paragraph>
      </Flex>
    </Space>
  );
};

export default AbilityScore;
