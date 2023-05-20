import React from 'react';
import {DropdownMenu} from '@openlibrary/ui';

const App: React.FC = () => {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <DropdownMenu items={menuItems} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
