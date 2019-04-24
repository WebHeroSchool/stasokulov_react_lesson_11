import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 



const App = () => {
  const todos = [
    {value: 'Первое дело'},
    {value: 'Второе дело'},
    {value: 'Третье дело'},
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem />
      <ItemsList items={todos} />
      <Footer count={3} />
    </div>
  );
};

export default App;