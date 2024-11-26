import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addGoal(inputValue.trim());
      setInputValue(''); // Очистить поле ввода
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center' }}>Мои цели на день</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите цель"
        />
        <button type="submit">Добавить</button>
      </div>
    </form>
  );
};

export default GoalForm;
