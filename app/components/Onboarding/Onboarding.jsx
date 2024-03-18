"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Space, Typography } from "antd";
import Image from "next/image";

const { Title, Paragraph, Text } = Typography;

const Onboarding = () => {
  const router = useRouter();

  const startFitnessTest = () => {
    router.push("/onboarding/fitness-test");
  };

  return (
    <Space direction="vertical" size="middle">
      <div className="flex justify-center items-center">
        <Image
          src="/OnboardingHeaderImage.jpg"
          alt="Dungeon Adventure"
          className="rounded-lg"
          width={1024}
          height={500}
        />
      </div>

      <Space direction="vertical" size="middle" className="w-full text-center">
        <Title level={1}>Embark on Your Fitness Quest</Title>
        <Paragraph>
          Welcome to DungeonFit, where your fitness journey transcends the
          ordinary, transforming it into an epic adventure. Brace yourself for a
          saga of strength, agility, and endurance.
        </Paragraph>
        <Paragraph>
          In DungeonFit, every workout is a step towards conquering mythical
          challenges. Navigate through enchanted forests, climb formidable
          peaks, and uncover hidden treasures, all while building your
          real-world fitness.
        </Paragraph>
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
      </Space>
    </Space>
  );
};

export default Onboarding;
