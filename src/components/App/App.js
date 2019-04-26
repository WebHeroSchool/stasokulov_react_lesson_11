import React from 'react';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  state = {
    todos: [
      {
        value: 'Первое дело',
        isDone: false,
        id: 1,
      },
      {
        value: 'Второе дело',
        isDone: false,
        id: 2,
      },
      {
        value: 'Третье дело',
        isDone: false,
        id: 3,
      },
    ],

    input: {
      value: '',
      error: false,
    },

    count: 6,
    numTask: 3,
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

  onClickDelete = id => {
    const newItemList = this.state.todos.filter(item => {
      return item.id !== id;
    });
    this.setState({todos: newItemList});
  }

  onChangeInput = event => {
    const newInput = {...this.state.input};
    newInput.value = event.target.value.toUpperCase();
    this.setState({input: newInput});
  }

  addTask = () => {
    //Проверяем не пуст ли инпут
    if (this.state.input.value === '') {
      const newInput = {...this.state.input};
      newInput.label = 'Введите что-нибудь';
      newInput.error = true;
      this.setState({input: newInput});
    } else {
      //Создаем новый объект задачи
      const newItem = {};
      newItem.value = this.state.input.value;
      newItem.isDone = false;
      newItem.id = ++this.state.numTask;
      //Клонируем массив задач, добавляем в конец новую задачу и переписываем массив в state
      const newTodos = this.state.todos.slice();
      newTodos.push(newItem);
      this.setState({todos: newTodos});
      //Обновляем инпут
      const newInput = {...this.state.input};
      newInput.value = '';
      newInput.label = 'Добавить задачу';
      newInput.error = false;
      this.setState({input: newInput});
    }
  }

  render() {
    return (
      <div className={styles.wrap}>
        <Card>
          <CardContent>
            <Header />
            <InputItem
              value={this.state.input.value}
              error={this.state.input.error}
              onChange={this.onChangeInput}
            />
            <Button
              variant="contained"
              color="primary"
              className={styles.width100}
              onClick={ () => this.addTask() }
            >
              Добавить
            </Button>
            <ItemsList
              items={this.state.todos}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />
            <Footer count={this.state.count} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;