import React, { useState } from 'react';
import {Switch} from '@openlibrary/ui';

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h1>Switch</h1>
      <Switch label="Toggle Switch" checked={isChecked} onChange={handleSwitchChange} />
    </div>
  );
};

export default App;
