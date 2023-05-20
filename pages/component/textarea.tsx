import React, { useState } from 'react';
import {TextArea} from '@openlibrary/ui';

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  return (
    <div>
      <h1>Text Area</h1>
      <TextArea
        label="Message"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      />
    </div>
  );
};

export default App;
