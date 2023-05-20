import React from 'react';
import {ContextMenu} from '@openlibrary/ui';

const App: React.FC = () => {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Right-click here to open the context menu</h1>
      <ContextMenu triggerElementId="trigger-element" items={menuItems} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
