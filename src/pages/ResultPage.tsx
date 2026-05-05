"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

type Task = {
  id: string;
  text: string;
  done: boolean;
};

const generateId = () => Math.random().toString(36).substring(2, 9);

const ResultPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: generateId(), text: newTask.trim(), done: false },
    ]);
    setNewTask("");
  };

  const toggleDone = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const updateText = (id: string, text: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <NavBar />
      <Card className="w-full max-w-lg rounded-xl border shadow-lg dark:shadow-none dark:border-muted">
        <CardHeader className="bg-primary/5 dark:bg-primary/20 p-6 rounded-t-xl">
          <CardTitle className="text-2xl font-bold text-center text-blue-900">
            Tarefas
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {/* Input para nova tarefa */}
          <div className="flex gap-2">
            <Input
              placeholder="Nova tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <Button onClick={addTask}>Adicionar</Button>
          </div>

          {/* Lista de tarefas */}
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-2 bg-muted rounded p-2"
              >
                <Checkbox
                  checked={task.done}
                  onCheckedChange={() => toggleDone(task.id)}
                />
                <Input
                  className="flex-1"
                  value={task.text}
                  onChange={(e) => updateText(task.id, e.target.value)}
                />
                <Button variant="destructive" size="icon" onClick={() => deleteTask(task.id)}>
                  ✕
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Footer />
    </section>
  );
};

export default ResultPage;