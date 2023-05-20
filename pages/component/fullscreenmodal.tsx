import React from 'react';
import {FullscreenModal} from '@openlibrary/ui';

const App: React.FC = () => {
  return (
    <div>
      <FullscreenModal
        triggerElement={<button>Open Fullscreen Modal</button>}
      >
        <h2>Fullscreen Modal Content</h2>
        <p>This is the content of the fullscreen modal.</p>
      </FullscreenModal>
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
