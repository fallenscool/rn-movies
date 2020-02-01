// @ts-ignore
import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import styles from './styles/appStyles';
import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';

const AppNavigator = createStackNavigator({
    // @ts-ignore
    Home: {screen: Home},
    MovieDetail: {screen: MovieDetail},
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
};
