import React from 'react';
import {SimpleModal} from '@openlibrary/ui';

const App: React.FC = () => {
  return (
    <div>
      <SimpleModal
        triggerElement={<button>Open Modal</button>}
      >
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </SimpleModal>
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
