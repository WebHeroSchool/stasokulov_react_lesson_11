import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class App extends React.Component {
  render() {
    const todos = [
      {
        value: 'Первое дело',
        isDone: true
      },
      {
        value: 'Второе дело',
        isDone: false
      },
      {
        value: 'Третье дело',
        isDone: true
      },
    ];
  
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <Header />
            <InputItem />
            <ItemsList items={todos} />
            <Footer count={3} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;