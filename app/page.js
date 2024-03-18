"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import localForage from "localforage";
import { Carousel, Divider, Spin } from "antd";
import ContentContainer from "./components/shared/ContentContainer";
import workouts from "./data/workouts";
import { Typography } from "antd";
import Workout from "./components/Workout/Workout";

const { Title } = Typography;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedFitTest, setHasCompletedFitTest] = useState(false);
  const [hasCompletedClassSelection, setHasCompletedClassSelection] =
    useState(false);

  const router = useRouter();

  useEffect(() => {
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

  return (
    <main>
      <ContentContainer>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <div>
            <Title>Your Current Workouts</Title>
            <Carousel dotPosition="bottom" className="py-10">
              {workouts.map((workout) => (
                <div key={workout.id}>
                  <Workout
                    className="mx-4"
                    key={workout.id}
                    workout={workout}
                  />
                  <Divider />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </ContentContainer>
    </main>
  );
}
