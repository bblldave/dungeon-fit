"use client";
import { createContext, useEffect, useState  } from "react";
import { xplevels } from "../data/xplevels";

// export const XPValue = createContext(0);
// export const XPLevel = createContext(1);


let XP = {
  value : 0,
  threshold : 100,
  level : 1
};

export const XPContext = createContext(XP);

 
// ,
//   incrementValue(xpToAdd) {
//     value += xpToAdd;

//     // while (value >= threshold) {
//     //   level++;
//     //   updateThreshold();
//     // }
//   },
//   updateThreshold() {
//     threshold = xplevels.map((nextLevel) => {
//       return nextLevel.threshold;
//     })
//   }

// export const getValue = async() => {
//   return (
//     localForage
//       .getItem("xpValue")
//       .then((value) => {
//         return ( value );
//       })
//   );
// };

// export const getXPLevel = () => {
//   return (
//     localForage.getItem("xpLevel")
//   );
// };

// export const incrementXP = async(xpToAdd) => {
//   let currXP = await getValue();
//   let totalXP = currXP + xpToAdd;
  
//   while (totalXP >= XPThreshold) {
//     incrementLevel(1);
//     updateXPThreshold();
//   }
//   localForage
//     .setItem("xpValue", totalXP);
// };

// export default XPContext;