"use client";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TaskCard from "./components/TaskCard";
import AddTaskButton from "./components/AddTaskButton";
import EditTaskButton from "./components/EditTaskButton";

export default function Home() {
  interface Task {
    id: number;
    name: string;
    description: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <Button variant="contained">Get your chores done</Button>
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </TaskCard>
      ))}
      <AddTaskButton></AddTaskButton>
      <EditTaskButton></EditTaskButton>
    </div>
  );
}
