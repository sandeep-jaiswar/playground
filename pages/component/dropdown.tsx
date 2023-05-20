import React, { useState } from 'react';
import {Dropdown} from '@openlibrary/ui';

const App: React.FC = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h1>Dropdown</h1>
      <Dropdown
        options={options}
        selectedValue={selectedOption}
        onChange={handleDropdownChange}
      />
    </div>
  );
};

export default App;
