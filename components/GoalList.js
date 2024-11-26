import React from 'react';

const GoalList = ({ goals, toggleGoal, deleteGoal }) => {
  return (
    <div className="goal-container">
      <ul>
        {goals.map((goal) => (
          <li
            key={goal.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal)}  // Передаем весь объект goal
                style={{
                  marginRight: '10px',
                  cursor: 'pointer',
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  appearance: 'none',
                  border: '1px solid #ccc',
                  backgroundColor: goal.completed ? '#000' : '#fff',
                  display: 'inline-block',
                  transition: 'background-color 0.2s ease',
                }}
              />
              <span
                onClick={() => toggleGoal(goal)}  // Передаем весь объект goal
                style={{
                  textDecoration: goal.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                  flexGrow: 1,
                }}
              >
                {goal.text}
              </span>
            </div>
            <button
              onClick={() => deleteGoal(goal.id)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default GoalList;