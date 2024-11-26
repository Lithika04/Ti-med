import React from "react";

function HealthTips() {
  const tips = ["Stay hydrated", "Exercise regularly", "Eat a balanced diet", "Get enough sleep"];

  return (
    <div>
      <h2>Health Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default HealthTips;
