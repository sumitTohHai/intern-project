// Frontend (React) - Module Based
import React, { useState } from 'react';
import './App.css';

const GreetingComponent = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const getGreeting = async () => {
        const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
        const data = await response.json();
        setMessage(data.message || data.error);
    };

    return (
        <div className="container">
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="input"
            />
            <button className="button" onClick={getGreeting}>Get Greeting</button>
            <p className="message">{message}</p>
        </div>
    );
};

export default GreetingComponent;