import React, { useState } from 'react';
import Navbar from './Menu';
import Timer from './Timer';
import './style.scss';

const TabScreens = (tab) => {
  switch (tab) {
    case 1:
      return <Timer />;
    default: return '';
  }
};
const App = () => {
  const [tab, setTab] = useState(1);
  console.log(tab);
  return (
    <div>
      <Navbar tab={tab} callback={(e) => setTab({ tab: e })} />
      {TabScreens(tab)}
    </div>
  );
};

export default App;
