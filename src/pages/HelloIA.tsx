"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const HelloIA = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background p-4">
      <Card className="w-full max-w-lg rounded-xl border shadow-lg dark:shadow-none dark:border-muted">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-3xl font-bold text-center text-primary">
            Olá IA
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <p className="text-lg text-muted-foreground">
            Seja bem‑vindo(a) à sua nova aplicação! Explore e divirta‑se.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default HelloIA;