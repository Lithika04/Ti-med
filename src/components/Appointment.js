import React, { useState } from "react";

function Appointment() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date} at ${time}.`);
    setName("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />
        <label>Time: </label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
