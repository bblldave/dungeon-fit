"use client";
import {XPContext} from "../../contexts/XPContext";
import { React, useContext, useState } from "react";
import { Space, Flex, Progress, Button } from "antd";
import localForage from "localforage";

/*
FOR USE LATER
localForage.getItem("XPValue")
  .then((value) => {
    console.log(value);
  });
*/

const XPProgressBar = () => {
  const { xpValue, setXPValue,
          xpThreshold, setXPThreshold,
          xpLevel, setXPLevel         } = useContext(XPContext);

  const xpPercent = () => {
    var percent = xpValue / xpThreshold * 100;
    return(
      percent
    );
  };
  
  return (
    <Flex vertical align="center" justify="center" className="px-4" gap="small" >
      <div></div>
      <Progress percent={xpPercent()} size="small" showInfo={false} />
      <div>{xpValue}/{xpThreshold} XP -- Level {xpLevel}</div>
      <div></div>
    </Flex>
  );
};

export default XPProgressBar;
