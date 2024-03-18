export const barbarianWorkoutProgram = {
  name: "Barbarian Strength Program",
  duration: "12 weeks",
  weeks: Array.from({ length: 12 }, (_, i) => ({
    week: i + 1,
    focus: i < 4 ? "Foundation Building" : i < 8 ? "Strength Building" : "Peak Strength",
    days: [
      {
        day: "Monday",
        workouts: ["standard"],
      },
      {
        day: "Wednesday",
        workouts: i < 8 ? ["just-legs"] : ["heavy-legs"],
      },
      {
        day: "Friday",
        workouts: ["upper-body-strength"],
      }
    ],
  })),
};

export const rangerWorkoutProgram = {
  name: "Ranger Agility & Endurance Program",
  duration: "8 weeks",
  weeks: Array.from({ length: 8 }, (_, i) => ({
    week: i + 1,
    focus: i < 4 ? "Agility and Speed Development" : "Endurance and Advanced Agility",
    days: [
      {
        day: "Monday",
        workouts: ["agility-drills"],
      },
      {
        day: "Wednesday",
        workouts: ["endurance-run"],
      },
      {
        day: "Friday",
        workouts: i < 4 ? ["light-cross-training"] : ["intensive-cross-training"],
      }
    ],
  })),
};

export const monkWorkoutProgram = {
  name: "Monk Flexibility & Core Strength Program",
  duration: "8 weeks",
  weeks: Array.from({ length: 8 }, (_, i) => ({
    week: i + 1,
    focus: i < 4 ? "Flexibility and Core Building" : "Advanced Balance and Core Strength",
    days: [
      {
        day: "Monday",
        workouts: ["yoga-flow"],
      },
      {
        day: "Wednesday",
        workouts: ["core-strength"],
      },
      {
        day: "Friday",
        workouts: i < 4 ? ["balance-training"] : ["advanced-balance"],
      }
    ],
  })),
};

export const rogueWorkoutProgram = {
  name: "Rogue Speed & Stealth Program",
  duration: "8 weeks",
  weeks: Array.from({ length: 8 }, (_, i) => ({
    week: i + 1,
    focus: i < 4 ? "Speed and Agility" : "Stealth and Evasion",
    days: [
      {
        day: "Monday",
        workouts: ["speed-drills"],
      },
      {
        day: "Wednesday",
        workouts: ["stealth-tactics"],
      },
      {
        day: "Friday",
        workouts: i < 4 ? ["agility-circuit"] : ["advanced-stealth-agility"],
      }
    ],
  })),
};

const mageWorkoutProgram = {
  name: "Mage Mental and Physical Training Program",
  duration: "8 weeks",
  weeks: Array.from({ length: 8 }, (_, i) => ({
    week: i + 1,
    focus: i < 4 ? "Foundational Skills" : "Advanced Techniques",
    days: [
      {
        day: "Monday",
        workouts: ["yoga-meditation", "mental-imagery"],
      },
      {
        day: "Wednesday",
        workouts: ["tai-chi", "core-stabilization"],
      },
      {
        day: "Friday",
        workouts: i < 4 ? ["balance-beam", "flexibility-training"] : ["isometric-holds", "aerobic-conditioning"],
      }
    ],
  })),
};

