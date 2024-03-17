import React from "react";
import { Flex } from "antd";

const ContentContainer = ({ children }) => {
  return (
    <Flex vertical   justify="center" gap="middle" className="min-h-screen p-12">
      <div className="">{children}</div>
    </Flex>
  );
};

export default ContentContainer;
