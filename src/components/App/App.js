import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import ItemsList from '../ItemsList/ItemsList';
import Footer from '../Footer/Footer';
import myStyles from './App.module.css'; 


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function PaperSheet(props) {
  const { classes } = props;

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
    <div className={myStyles.wrap}>
      <Paper className={classes.root} elevation={1}>
        <Header />
        <InputItem />
        <ItemsList items={todos} />
        <Footer count={3} />
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);