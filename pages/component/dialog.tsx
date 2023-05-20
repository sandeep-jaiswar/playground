import React, { useState } from 'react';
import {Dialog} from '@openlibrary/ui';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <Dialog title="My Dialog" isOpen={isOpen} onClose={handleCloseDialog}>
        <p>This is the content of the dialog.</p>
        <button onClick={handleCloseDialog}>Close</button>
      </Dialog>
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
