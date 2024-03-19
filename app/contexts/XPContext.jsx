"use client";
import { createContext, useEffect, useState  } from "react";
import { xplevels } from "../data/xplevels";


let XP = {
  value : 0,
  threshold : 100,
  level : 1
};

export const XPContext = createContext(XP);
