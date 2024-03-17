import React from "react";

const ContentContainer = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12">
      <div className="">{children}</div>
    </div>
  );
};

export default ContentContainer;
