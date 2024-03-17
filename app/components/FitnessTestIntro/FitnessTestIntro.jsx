"use client";
import { Button, Typography, List, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

const FitnessTestIntroduction = ({ onComplete }) => {
  const onContinue = () => {
    onComplete();
  };

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Welcome to Your Fitness Adventure!</Title>
      <Text strong>Embark on a Journey to Discover Your Strengths</Text>
      <Paragraph>
        Welcome, brave adventurer, to the first step of your fitness quest in
        the mystical world of DungeonFit. Before you face the challenges ahead
        and embark on quests that test your might and wit, we need to gauge your
        current abilities.
      </Paragraph>
      <Paragraph>
        This is not just a test; it's the beginning of your journey to
        greatness.
      </Paragraph>
      <Title level={3}>What Is This Test?</Title>
      <Paragraph>
        Our Fitness Adventure Test is designed to assess your physical and
        mental prowess across various domains:
      </Paragraph>
      <List
        bordered
        dataSource={[
          {
            title: "Strength (STR)",
            description:
              "The Push-Up Test will tell if you can wield the mighty sword or draw the heavy bow.",
          },
          {
            title: "Dexterity (DEX)",
            description:
              "The Shuttle Run Test will show your speed and agility, essential for dodging the dragon's fire.",
          },
          {
            title: "Constitution (CON)",
            description:
              "The Plank Hold Test will reveal your endurance, necessary for enduring the longest battles.",
          },
          {
            title: "Intelligence (INT)",
            description:
              "The Fitness Knowledge Quiz will test your understanding of health and fitness, crucial for outsmarting foes.",
          },
        ]}
        renderItem={(item) => (
          <List.Item>
            <Text strong>{item.title}</Text>: {item.description}
          </List.Item>
        )}
      />
      <Title level={3} className="font-semibold">
        How Will This Help?
      </Title>
      <Paragraph>
        The results will guide you to a tailored path in DungeonFit, unlocking
        training programs designed to enhance your strengths and improve your
        weaknesses.
      </Paragraph>
      <Paragraph>
        Prepare yourself, focus on each task, and let's uncover the hero within
        you. Once you complete all four tests, you'll be ready to face the
        DungeonFit world with confidence and power.
      </Paragraph>
      <div className="text-center">
        <Button type="primary" onClick={onContinue}>
          Continue Onward
        </Button>
      </div>
    </Space>
  );
};

export default FitnessTestIntroduction;
