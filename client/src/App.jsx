import { useState, useEffect } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const response = await fetch("http://localhost:8080/message");
    const data = await response.json();
    setMessage(data);
  }

  return <div>{message}</div>;
}
