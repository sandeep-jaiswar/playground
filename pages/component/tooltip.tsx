import React from 'react';
import {Tooltip} from '@openlibrary/ui';

const App: React.FC = () => {
  return (
    <div>
      <h1>
        Example Tooltip:{' '}
        <Tooltip text="This is a tooltip" position="bottom">
          <span className="text-blue-500 underline">Hover over me!</span>
        </Tooltip>
      </h1>
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
