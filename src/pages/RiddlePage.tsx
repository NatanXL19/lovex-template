"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

type Riddle = {
  question: string;
  answer: string;
};

const riddles: Riddle[] = [
  {
    question: "O que tem cabeça, mas não tem cérebro?",
    answer: "cabeça de alho",
  },
  {
    question: "Quanto mais se tira, maior fica. O que é?",
    answer: "buraco",
  },
  {
    question: "O que sobe e desce sem sair do lugar?",
    answer: "escada",
  },
];

const RiddlePage = () => {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentRiddle = riddles[index];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === currentRiddle.answer.toLowerCase()) {
      setFeedback("✅ Correto! Próxima charada...");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % riddles.length);
        setUserAnswer("");
        setFeedback(null);
      }, 1500);
    } else {
      setFeedback("❌ Errado, tente novamente.");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md rounded-xl border shadow-lg dark:shadow-none dark:border-muted">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Charada
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4 text-center">
          <p className="text-lg">{currentRiddle.question}</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Sua resposta"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              Enviar
            </button>
          </form>
          {feedback && <p className="mt-2">{feedback}</p>}
        </CardContent>
      </Card>
      <Footer />
    </section>
  );
};

export default RiddlePage;