import React, { useState } from 'react';
import { Chips } from '@openlibrary/ui';

interface Chip {
    id: string;
    label: string;
  }

const App: React.FC = () => {
    const [chips, setChips] = useState<Chip[]>([
        { id: '1', label: 'React' },
        { id: '2', label: 'TypeScript' },
        { id: '3', label: 'Tailwind CSS' },
    ]);

    const handleDeleteChip = (id: string) => {
        setChips(chips.filter(chip => chip.id !== id));
    };

    return (
        <div>
            <Chips chips={chips} onDelete={handleDeleteChip} />
            {/* Rest of your app content */}
        </div>
    );
};

export default App;
