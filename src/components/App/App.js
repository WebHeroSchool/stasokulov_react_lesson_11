import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';

const todos = [
  {value: 'Первое дело'},
  {value: 'Второе дело'},
  {value: 'Третье дело'},
];

const App = () => (
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemsList items={todos} />
    <Footer count={3} />
  </div>
);

export default App;