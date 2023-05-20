import React, { useState } from 'react';
import { TextField } from '@openlibrary/ui';

const TextFieldC: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    return (
        <div>
            <h1>Text Fields</h1>
            <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
            />
            <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                type="email"
            />
        </div>
    );
};

export default TextFieldC;
