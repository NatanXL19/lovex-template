"use client";

import React, { useEffect, useState } from "react";

export const RandomMinecraftImage = () => {
  const [src, setSrc] = useState<string>("");

  // Gera uma URL única para forçar a troca da imagem
  const generateUrl = () =>
    `https://source.unsplash.com/featured/800x450/?minecraft&${Date.now()}`;

  useEffect(() => {
    // Define a primeira imagem
    setSrc(generateUrl());

    // Troca a imagem a cada 15 segundos
    const interval = setInterval(() => {
      setSrc(generateUrl());
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex justify-center">
      {src && (
        <img
          src={src}
          alt="Imagem aleatória de Minecraft"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      )}
    </div>
  );
};

export default RandomMinecraftImage;