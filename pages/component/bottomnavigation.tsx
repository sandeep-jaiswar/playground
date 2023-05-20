import React, { useState } from 'react';
import {BottomNavigation} from '@openlibrary/ui';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <svg /* Home icon SVG */ />,
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: <svg /* Explore icon SVG */ />,
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <svg /* Profile icon SVG */ />,
    },
  ];

  return (
    <div>
      {/* Your app content */}
      <BottomNavigation
        items={navigationItems}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default App;
