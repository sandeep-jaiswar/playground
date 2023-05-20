import React, { useState } from 'react';
import {Snackbar} from '@openlibrary/ui';

const App: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
      <button onClick={handleOpenSnackbar}>Show Snackbar</button>
      <Snackbar message="Snackbar message" onClose={handleCloseSnackbar} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
