// @ts-ignore
import React, {Component} from 'react';
import Detail from '../components/Detail';

class MovieDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title', 'Movie'),
    };
  };

  render() {
    // @ts-ignore
    const {navigation} = this.props;
    return (
      <Detail
        movieId={navigation.getParam('movieId', 'NO-ID')}
        navigation={navigation}
      />
    );
  }
}

export default MovieDetail;
