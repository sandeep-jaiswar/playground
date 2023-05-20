import React from 'react';
import {BottomSheet} from '@openlibrary/ui';

const App: React.FC = () => {
  return (
    <div>
      <BottomSheet
        triggerElement={<button>Open Bottom Sheet</button>}
      >
        <h2>Bottom Sheet Content</h2>
        <p>This is the content of the bottom sheet.</p>
      </BottomSheet>
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
