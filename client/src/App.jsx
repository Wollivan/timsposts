import { useState, useEffect } from "react";
import { API_URL } from "../config";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMessage(data);
  }

  return <div>{message}</div>;
}
