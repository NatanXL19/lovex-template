"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Footer from "@/components/Footer";
import Clock from "@/components/Clock";
import RandomMinecraftImage from "@/components/RandomMinecraftImage";

const HelloIA = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-background p-4">
      <Card className="w-full max-w-lg rounded-xl border shadow-lg dark:shadow-none dark:border-muted mb-8">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-3xl font-bold text-center text-blue-900">
            Olá IA
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          <p className="text-lg text-muted-foreground">
            Seja bem‑vindo(a) à sua nova aplicação! Explore e divirta‑se.
          </p>
          {/* Relógio digital de Brasília */}
          <Clock />
          {/* Imagem aleatória de Minecraft a cada 15 s */}
          <RandomMinecraftImage />
        </CardContent>
      </Card>
      <Footer />
    </section>
  );
};

export default HelloIA;