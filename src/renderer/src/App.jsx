import React, { useState } from 'react';
import LogWindow from './LogWindow';
import Banner from './Banner';
import Footer from './Footer';

function App() {
  const [logs, setLogs] = useState([]);

  const handleClick = () => {
    const newLog = "Button clicked!";
    console.log(newLog);
    setLogs(prevLogs => [...prevLogs, newLog]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minHeight: '100vh' }}>
      <Banner />
      <div>Hello World</div>
      <button onClick={handleClick}>Click Me</button>
      <LogWindow messages={logs} />
      <Footer />
    </div>
  );
}

export default App;
