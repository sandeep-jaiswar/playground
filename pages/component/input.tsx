import React, { useState } from 'react';
import {Input} from '@openlibrary/ui';


const InputComponent: React.FC = () => {
    const [movingLabelValue, setMovingLabelValue] = useState('');
    const handleMovingLabelChange = (val : string) => {
        setMovingLabelValue(val);
    };

    return (
        <Input
            label="Name"
            value={movingLabelValue}
            onChange={handleMovingLabelChange}
            placeholder="Enter your name"
            isMovingLabel={true}
        />
    );
};

export default InputComponent;
