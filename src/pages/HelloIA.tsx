"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const HelloIA = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Olá IA</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg">Seja bem‑vindo(a) à sua nova aplicação!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelloIA;