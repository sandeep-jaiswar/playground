import React, { useState } from 'react';
import {Select} from '@openlibrary/ui';

const App: React.FC = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h1>Select</h1>
      <Select
        options={options}
        selectedValue={selectedOption}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default App;
