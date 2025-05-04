'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TaskItem from '@/components/TaskItem';

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const handleAddTask = async () => {
    if (!newTask.trim()) return;

    const res = await fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTask, completed: false }),
    });

    const data = await res.json();
    setTasks(prev => [...prev, data]);
    setNewTask('');
  };

  const handleToggle = async (task: Task) => {
    const res = await fetch(`http://localhost:8080/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, completed: !task.completed }),
    });

    const data = await res.json();
    setTasks(prev => prev.map(t => (t.id === data.id ? data : t)));
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: 'DELETE',
    });

    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <main className="max-w-lg mx-auto mt-10 px-4">
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Lista de Tarefas</h1>

          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Digite uma tarefa..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button onClick={handleAddTask}>Adicionar</Button>
          </div>

          <div className="space-y-2">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
