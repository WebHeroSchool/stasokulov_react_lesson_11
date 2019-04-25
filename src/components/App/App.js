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
  state = {
    todos: [
      {
        value: 'Первое дело',
        isDone: true,
        id: 1,
      },
      {
        value: 'Второе дело',
        isDone: false,
        id: 2,
      },
      {
        value: 'Третье дело',
        isDone: true,
        id: 3,
      },
    ],
    count: 6,
  };

  onClickDone = id => {
    const newItemList = this.state.todos.map(item => {
      const newItem = {...item};
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      };
      return newItem;
    });
    this.setState({todos: newItemList});
  };

  render() {
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <Header />
            <InputItem />
            <ItemsList items={this.state.todos} onClickDone={this.onClickDone} />
            <Footer count={this.state.count} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;