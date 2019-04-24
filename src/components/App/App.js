import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';

const App = () => (
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemsList />
    <Footer />
  </div>
);

export default App;