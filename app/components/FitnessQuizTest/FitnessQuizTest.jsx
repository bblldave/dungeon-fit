"use client";
import { useState } from "react";
import { Button, Typography, Space } from "antd";
import { questions } from "@/app/data/initialFitQuizQuestions";

const { Title, Paragraph, Text } = Typography;

const FitnessQuizTest = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
      onComplete(score);
    }
  };

  const onFinishTest = () => {
    onComplete(score);
  };

  return (
    <Space direction="vertical" size="middle">
      <Title level={2}>Fitness Knowledge Quiz</Title>
      <Paragraph>
        Answer the following questions to test your knowledge on fitness-related
        topics.
      </Paragraph>

      {currentQuestionIndex + 1 <= questions.length ? (
        <Paragraph>
          {currentQuestionIndex + 1} / {questions.length}
        </Paragraph>
      ) : null}

      {currentQuestionIndex < questions.length ? (
        <>
          <Text strong>{questions[currentQuestionIndex].question}</Text>
          <Space direction="vertical">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <Button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </Button>
            ))}
          </Space>
        </>
      ) : (
        <Paragraph>Your score: {score}</Paragraph>
      )}
    </Space>
  );
};

export default FitnessQuizTest;
