import React from "react";
import { Flex, Progress, Typography } from "antd";
import Exercise from "../Exercise/Exercise";
import exercises from "@/app/data/exercises";

const { Title } = Typography;

const Workout = ({ workout }) => {
  const xpTotal = workout.exercises
    ? Math.round(workout.exercises.reduce(
        (total, exerciseId) => total + exercises.find((exercise) => exercise.id === exerciseId).xpOnCompletion,
        0
      ))
    : 50;
  let xpPercent = Math.round((75 / xpTotal) * 100);
  const exerciseMap = workout.exercises
    ? workout.exercises.map((exerciseId) =>
        exercises.find((exercise) => exercise.id === exerciseId)
      )
    : [];

  return (
    <div>
      <Title level={2}>{workout.name} Workout</Title>
      <Title level={5}>{workout.description}</Title>
      <br />
      {exerciseMap && (
        <Flex
          justify="center"
          wrap="wrap"
          style={{ height: "100%", gap: "20px" }}
        >
          {exerciseMap.map((exercise) => (
            <Exercise className="mx-4" key={exercise.id} exercise={exercise} />
          ))}
        </Flex>
      )}
      <br />
      <Flex
        justify="space-between"
        wrap="wrap"
      >
        <span>XP Completed: TBD</span>
        <span>XP Total: {xpTotal ?? 0}</span>
      </Flex>

      <Progress percent={xpPercent} />
    </div>
  );
};

export default Workout;
