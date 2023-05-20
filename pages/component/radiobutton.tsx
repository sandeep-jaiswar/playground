import React, { useState } from 'react';
import {RadioButton} from '@openlibrary/ui';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioButtonChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <h1>Radio Buttons</h1>
      <RadioButton
        label="Option 1"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={handleRadioButtonChange}
      />
      <RadioButton
        label="Option 3"
        value="option3"
        checked={selectedOption === 'option3'}
        onChange={handleRadioButtonChange}
      />
    </div>
  );
};

export default App;
