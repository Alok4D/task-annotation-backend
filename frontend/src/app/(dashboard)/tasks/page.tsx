'use client';
import React, { useState } from 'react';
import { Board } from '@/components/tasks/Board';
import { DateSelector } from '@/components/tasks/DateSelector';
import { TaskModal } from '@/components/tasks/TaskModal';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import { Task } from '@/types/task';

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleCreateNew = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="h-full flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Kanban Board</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and organize your day seamlessly.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <DateSelector />
          <Button onClick={handleCreateNew} className="gap-2 shadow-md">
            <Plus className="w-5 h-5" />
            New Task
          </Button>
        </div>
      </div>

      <div className="flex-1 min-h-0 bg-transparent rounded-2xl">
        <Board onEditTask={handleEditTask} />
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        task={editingTask}
      />
    </div>
  );
}
