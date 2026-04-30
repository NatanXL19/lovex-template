"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { useRiddleResult } from "@/context/RiddleResultContext";

const ResultPage = () => {
  const { correct, wrong } = useRiddleResult();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md rounded-xl border shadow-lg dark:shadow-none dark:border-muted">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Resultado das Charadas
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center space-y-4">
          <p className="text-lg">
            ✅ Acertos: <span className="font-medium">{correct}</span>
          </p>
          <p className="text-lg">
            ❌ Erros: <span className="font-medium">{wrong}</span>
          </p>
        </CardContent>
      </Card>
      <Footer />
    </section>
  );
};

export default ResultPage;