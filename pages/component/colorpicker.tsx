import React, { useState } from 'react';
import { ColorPicker } from '@openlibrary/ui';

const App: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState('#ff0000');

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <ColorPicker selectedColor={selectedColor} onChange={handleColorChange} />
            {/* Rest of your app content */}
        </div>
    );
};

export default App;
