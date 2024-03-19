"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localForage from "localforage";
import { Carousel, Divider, Spin } from "antd";
import ContentContainer from "./components/shared/ContentContainer";
import workouts from "./data/workouts";
import { Typography, Progress, Flex } from "antd";
import Workout from "./components/Workout/Workout";
import { barbarianWorkoutProgram, rangerWorkoutProgram, monkWorkoutProgram, rogueWorkoutProgram, mageWorkoutProgram } from "./data/workoutPrograms";

const { Title } = Typography;

const workoutPrograms = {
  Barbarian: barbarianWorkoutProgram,
  Ranger: rangerWorkoutProgram,
  Monk: monkWorkoutProgram,
  Rogue: rogueWorkoutProgram,
  Mage: mageWorkoutProgram,
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedFitTest, setHasCompletedFitTest] = useState(false);
  const [userClass, setUserClass] = useState("");
  const [workoutProgram, setWorkoutProgram] = useState(null);


  const router = useRouter();

  useEffect(() => {
    localForage.getItem("userClass").then((value) => {
      if (value) {
        setUserClass(value);
        setWorkoutProgram(workoutPrograms[value]);
      }
    });

    localForage.getItem("hasCompletedFitTest").then((value) => {
      if (value) {
        setHasCompletedFitTest(true);
      }
      setIsLoading(false);
    });
  }, []);

  if (!isLoading && !hasCompletedFitTest) {
    router.push("/onboarding");
  }

  if (!workoutProgram) {
    return null;
  }

  const totalWorkouts = workoutProgram.weeks.flatMap((week) => week.days.flatMap((day) => day.workouts)).length;
  const completedWorkouts = 6;

  return (
    <main>
      <ContentContainer>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <div>
            <Title>{workoutProgram.name}</Title>
            <Flex justify="space-between" wrap="wrap">
              <span>Program Progress</span>
              <span>{completedWorkouts} / {totalWorkouts}</span>
            </Flex>
            <Progress percent={Math.round((completedWorkouts / totalWorkouts) * 100)} />
            <Carousel dotPosition="bottom" className="py-10">
              {workoutProgram.weeks.map((week, weekIndex) => (
                <div key={weekIndex}>
                  <Title level={3}>Week {weekIndex + 1}</Title>
                  {week.days.map((day, dayIndex) => (
                    <div key={dayIndex}>
                      <Title level={4}>Day {dayIndex + 1}</Title>
                      {day.workouts.map((workoutId) => {
                        const workout = workouts.find((workout) => workout.id === workoutId);
                        return (
                          <div key={workout.id}>
                            <Workout className="mx-4" key={workout.id} workout={workout} />
                            <Divider />
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </ContentContainer>
    </main>
  );
}
