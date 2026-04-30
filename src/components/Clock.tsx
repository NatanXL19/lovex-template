"use client";

import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState<string>("");

  // Atualiza a hora a cada segundo
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo",
      };
      setTime(now.toLocaleTimeString("pt-BR", options));
    };

    updateTime(); // valor inicial
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-mono text-blue-900 mt-4">
      {time}
    </div>
  );
};

export default Clock;