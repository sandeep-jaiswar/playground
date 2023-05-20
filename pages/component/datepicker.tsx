import React, { useState } from 'react';
import {DatePicker} from '@openlibrary/ui';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
