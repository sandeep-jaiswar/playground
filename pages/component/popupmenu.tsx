import React from 'react';
import {PopupMenu} from '@openlibrary/ui';

const App: React.FC = () => {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <PopupMenu buttonLabel="Open Menu" items={menuItems} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
