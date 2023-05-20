import React, { useState } from 'react';
import {Checkbox} from '@openlibrary/ui';

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h1>Checkbox</h1>
      <Checkbox
        label="Remember me"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default App;
