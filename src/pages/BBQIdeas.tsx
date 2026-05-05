"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const suggestions = [
  "Carne bovina (picanha, alcatra, maminha)",
  "Carne suína (costelinha, linguiça)",
  "Frango (asa, coxa, coração)",
  "Espetinhos de legumes (pimentão, cebola, abobrinha)",
  "Queijo coalho na brasa",
  "Pão de alho",
  "Farofa temperada",
  "Vinagrete",
  "Salada de maionese",
  "Arroz à grega",
  "Cervejas artesanais",
  "Refrigerantes e água",
  "Caipirinha ou drinks com frutas",
  "Música e playlist animada",
  "Jogos de quintal (futebol, peteca, dominó)",
];

const BBQIdeas = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <NavBar />
      <Card className="w-full max-w-2xl rounded-xl border shadow-lg dark:shadow-none dark:border-muted">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Ideias para um Churrasco com Amigos
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p className="text-lg text-muted-foreground text-center">
            Confira uma lista de itens que vão deixar seu churrasco ainda mais
            gostoso e divertido!
          </p>
          <ul className="list-disc list-inside space-y-2 text-base">
            {suggestions.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Badge variant="secondary">{idx + 1}</Badge>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Footer />
    </section>
  );
};

export default BBQIdeas;