import React, { useState } from 'react';
import './App.css';

const Form = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '') {
            setMessage(`Bienvenido, ${name}!`);
            setName('');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingresa tu nombre..."
                    className="input-name"
                />
                <button type="submit" className="button-submit">
                    Enviar
                </button>
            </form>
            {message && <p className="welcome-message">{message}</p>}
        </div>
    );
};

export default Form;