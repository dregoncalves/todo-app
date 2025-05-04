'use client';

import { Task } from '@/app/page';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

type Props = {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: number) => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-md">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task)}
        />
        <span
          className={`select-none ${
            task.completed ? 'line-through text-muted-foreground' : ''
          }`}
          onClick={() => onToggle(task)}
        >
          {task.title}
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="text-red-500 hover:text-red-700"
        onClick={() => onDelete(task.id)}
      >
        Remover
      </Button>
    </div>
  );
}
