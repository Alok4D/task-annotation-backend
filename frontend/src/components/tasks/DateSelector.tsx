import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setSelectedDate } from '@/features/tasks/taskSlice';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const DateSelector = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state: RootState) => state.tasks.selectedDate);

  const handlePrevDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() - 1);
    dispatch(setSelectedDate(date.toISOString().split('T')[0]));
  };

  const handleNextDay = () => {
    const date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    dispatch(setSelectedDate(date.toISOString().split('T')[0]));
  };

  const handleToday = () => {
    dispatch(setSelectedDate(new Date().toISOString().split('T')[0]));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDate(e.target.value));
  };

  return (
    <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100 w-fit">
      <Button variant="ghost" size="sm" onClick={handlePrevDay} className="px-2">
        <ChevronLeft className="w-5 h-5 text-gray-500" />
      </Button>
      
      <div className="flex items-center gap-2 px-2 border-x border-gray-100">
        <Calendar className="w-4 h-4 text-blue-500" />
        <input 
          type="date" 
          value={selectedDate}
          onChange={handleDateChange}
          className="bg-transparent border-none outline-none text-sm font-semibold text-gray-700 cursor-pointer"
        />
      </div>

      <Button variant="ghost" size="sm" onClick={handleNextDay} className="px-2">
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </Button>
      
      <Button variant="secondary" size="sm" onClick={handleToday} className="ml-2">
        Today
      </Button>
    </div>
  );
};
