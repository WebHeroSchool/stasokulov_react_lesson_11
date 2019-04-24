import React from 'react';

const element = (<h1>Hello World!</h1>);
const ItemList = () => (
<ul>
  <li>1</li>
  <li>2</li>
</ul>
);

const App = () => (
  <div>
    {element}
    <ItemList />
  </div>
);

export default App;