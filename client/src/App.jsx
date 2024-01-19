import { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const response = await fetch(
      "https://timsposts-server.onrender.com/message"
    );
    const data = await response.json();
    setMessage(data);
  }

  return <div>{message}</div>;
}

export default App;
