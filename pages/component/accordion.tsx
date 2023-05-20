import React from 'react';
import { Accordion } from '@openlibrary/ui';

const App: React.FC = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <Accordion title="Section 1">
        <p>Content of section 1</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>Content of section 2</p>
      </Accordion>
    </div>
  );
};

export default App;
