import React, { useState } from 'react';
import {Drawer} from '@openlibrary/ui';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <button onClick={handleToggleDrawer}>Toggle Drawer</button>
      <Drawer open={drawerOpen} onClose={handleToggleDrawer}>
        <h3>Drawer Content</h3>
        <p>This is the content of the drawer.</p>
      </Drawer>
    </div>
  );
};

export default App;
