// src/Sample.tsx
import React, { useState, ChangeEvent, FormEvent } from "react";

const Sample: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit=(e:FormEvent<HTMLElement>)=>{
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email} `);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Sample;
