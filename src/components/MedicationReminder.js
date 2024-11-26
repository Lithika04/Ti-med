import React, { useState } from "react";

function MedicationReminder() {
  const [medication, setMedication] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reminder set for ${medication} at ${time}.`);
    setMedication("");
    setTime("");
  };

  return (
    <div>
      <h2>Medication Reminder</h2>
      <form onSubmit={handleSubmit}>
        <label>Medication: </label>
        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          required
        />
        <br />
        <label>Time: </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <br />
        <button type="submit">Set Reminder</button>
      </form>
    </div>
  );
}

export default MedicationReminder;
