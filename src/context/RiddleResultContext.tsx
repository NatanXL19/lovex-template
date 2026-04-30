"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type ResultContextType = {
  correct: number;
  wrong: number;
  addCorrect: () => void;
  addWrong: () => void;
};

const ResultContext = createContext<ResultContextType | undefined>(undefined);

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const addCorrect = () => setCorrect((c) => c + 1);
  const addWrong = () => setWrong((w) => w + 1);

  return (
    <ResultContext.Provider value={{ correct, wrong, addCorrect, addWrong }}>
      {children}
    </ResultContext.Provider>
  );
};

export const useRiddleResult = (): ResultContextType => {
  const ctx = useContext(ResultContext);
  if (!ctx) {
    throw new Error("useRiddleResult must be used within a ResultProvider");
  }
  return ctx;
};