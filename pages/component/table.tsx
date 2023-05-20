import React from 'react';
import {Table} from '@openlibrary/ui';

const App: React.FC = () => {
  const columns = ['Name', 'Age', 'Email'];
  const data = [
    { Name: 'John Doe', Age: 30, Email: 'johndoe@example.com' },
    { Name: 'Jane Smith', Age: 25, Email: 'janesmith@example.com' },
    { Name: 'Bob Johnson', Age: 35, Email: 'bobjohnson@example.com' },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
      {/* Rest of your app content */}
    </div>
  );
};

export default App;
