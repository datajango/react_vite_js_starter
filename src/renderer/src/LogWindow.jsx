import React from 'react';

function LogWindow({ messages }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', height: '200px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    );
}

export default LogWindow;
