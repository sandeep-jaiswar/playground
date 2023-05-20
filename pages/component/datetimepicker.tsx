import React, { useState } from 'react';
import {DateTimePicker} from '@openlibrary/ui';

const App: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const handleDateTimeChange = (dateTime: Date | null) => {
    setSelectedDateTime(dateTime);
  };

  return (
    <div>
      <DateTimePicker selectedDateTime={selectedDateTime} onChange={handleDateTimeChange} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
