import React from 'react';
import {Stepper} from '@openlibrary/ui';

const App: React.FC = () => {
  const steps = [
    { id: 'step1', label: 'Step 1' },
    { id: 'step2', label: 'Step 2' },
    { id: 'step3', label: 'Step 3' },
  ];

  return (
    <div>
      <Stepper steps={steps} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
