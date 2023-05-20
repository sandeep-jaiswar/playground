import React from 'react';
import { Tabs } from '@openlibrary/ui';

const App: React.FC = () => {
  const tabs = [
    {
      id: 'tab1',
      label: 'Tab 1',
      content: <div>Content of Tab 1</div>,
    },
    {
      id: 'tab2',
      label: 'Tab 2',
      content: <div>Content of Tab 2</div>,
    },
    {
      id: 'tab3',
      label: 'Tab 3',
      content: <div>Content of Tab 3</div>,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
