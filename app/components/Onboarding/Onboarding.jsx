"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import Image from "next/image";

const Onboarding = () => {
  const router = useRouter();

  const startFitnessTest = () => {
    router.push("/fitness-test");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="w-full">
        <Image
          src="/OnboardingHeaderImage.jpg"
          alt="Dungeon Adventure"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>

      <div className="max-w-2xl mt-8 ">
        <h1 className="text-4xl font-bold text-center">
          Embark on Your Fitness Quest
        </h1>
        <p className="mt-4">
          Welcome to DungeonFit, where your fitness journey transcends the
          ordinary, transforming it into an epic adventure. Brace yourself for a
          saga of strength, agility, and endurance.
        </p>
        <p className="mt-2">
          In DungeonFit, every workout is a step towards conquering mythical
          challenges. Navigate through enchanted forests, climb formidable
          peaks, and uncover hidden treasures, all while building your
          real-world fitness.
        </p>
        <div className="flex items-center justify-center">
          <Button
            type="primary"
            onClick={startFitnessTest}
            className="mt-6"
            size="large"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
