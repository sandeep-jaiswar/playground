import React, { useState } from 'react';
import {Slider} from '@openlibrary/ui';

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div>
      <h1>Slider</h1>
      <Slider
        min={0}
        max={100}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Selected value: {sliderValue}</p>
    </div>
  );
};

export default App;
