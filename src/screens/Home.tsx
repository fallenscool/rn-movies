// @ts-ignore
import React, {Component} from 'react';
import List from '../components/List';

class Home extends Component {
  static navigationOptions = {
    title: 'Movies',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
      textTransform: 'uppercase',
    },
  };

  render() {
    return <List />;
  }
}

export default Home;
