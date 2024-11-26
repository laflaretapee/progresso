import React from "react";

const GoalItem = ({goal}) => {
  return(
    <li>
      <strong>{goal.title}</strong> - Прогресс: {goal.progress}%
    </li>
  );
};

export default GoalItem