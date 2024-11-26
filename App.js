import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([]);

  // Получение списка задач при загрузке
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://api-d1nero.amvera.io/tasks');
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error('Ошибка при получении задач:', error);
      }
    };
    fetchTasks();
  }, []);

  // Функция добавления задачи
  const addGoal = async (goal) => {
    try {
      const response = await fetch('https://api-d1nero.amvera.io/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: goal, completed: false }),  // Отправляем только текст и статус
      });
      const newGoal = await response.json();
      setGoals([...goals, newGoal]);  // Добавляем новую задачу в состояние
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };
  
  
  const toggleGoal = async (goal) => {
    try {
        const response = await fetch(`https://api-d1nero.amvera.io/tasks/${goal.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: goal.id,
                text: goal.text, // Текст задачи
                completed: !goal.completed, // Переключаем статус
            }),
        });

        if (!response.ok) {
            throw new Error('Ошибка при обновлении задачи');
        }

        const updatedGoal = await response.json();

        // Обновляем задачу на клиенте
        setGoals(
            goals.map((g) =>
                g.id === goal.id ? { ...g, completed: updatedGoal.completed } : g
            )
        );
    } catch (error) {
        console.error('Ошибка при обновлении задачи:', error);
    }
};
  
  
  
  // Функция для удаления задачи
  const deleteGoal = async (id) => {
    try {
      await fetch(`https://api-d1nero.amvera.io/tasks/${id}`, {
        method: 'DELETE',
      });
      setGoals(goals.filter((goal) => goal.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  };
  

  return (
    <div>
      <Header />
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} toggleGoal={toggleGoal} deleteGoal={deleteGoal} />
    </div>
  );
};

export default App;