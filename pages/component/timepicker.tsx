import React, { useState } from 'react';
import { TimePicker } from '@openlibrary/ui';

const App: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

  return (
    <div>
      <TimePicker selectedTime={selectedTime} onChange={handleTimeChange} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
