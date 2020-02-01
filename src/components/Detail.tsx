// @ts-ignore
import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {NavigationInjectedProps} from 'react-navigation';

import {getMovieById, getSimilarMoviesById} from '../actions';
import styles from '../styles/detail';
import {IMAGE_URL} from '../axios/params';
import {Movie} from '../types';

interface Props extends NavigationInjectedProps {
  loading: boolean;
  movie: Movie;
  similarMovies: Movie[];
  getMovieById: any;
  getSimilarMoviesById: any;
  movieId: number;
}

class Detail extends Component<Props> {
  componentDidMount() {
    this.props.getMovieById(this.props.movieId);
    this.props.getSimilarMoviesById(this.props.movieId);
  }

  private _onItemPress = (id: number) => {
    this.props.getMovieById(id);
    this.props.getSimilarMoviesById(id);
  };

  private renderSimilarMovies = ({item}) => (
    <TouchableHighlight
      style={styles.similarItem}
      onPress={() => this._onItemPress(item.id)}>
      <View>
        <Image
          style={styles.similarItemImg}
          source={{uri: `${IMAGE_URL}${item.backdrop_path}`}}
        />
        <Text style={[styles.similarItemTitle, styles.white]}>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const {movie, similarMovies, loading} = this.props;
    return (
      <>
        {similarMovies.length === 0 && loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{uri: `${IMAGE_URL}${movie.backdrop_path}`}}
            />
            <View style={styles.info}>
              <View style={styles.vote}>
                <Text style={[styles.voteText, styles.white]}>
                  {movie.vote_average * 10}%
                </Text>
              </View>
              <Text style={[styles.year, styles.white]}>
                {movie.release_date ? movie.release_date.substring(0, 4) : ''}
              </Text>
              <Text style={[styles.title, styles.white]}>{movie.title}</Text>
              <Text style={[styles.subtitle, styles.white]}>Overview</Text>
              <Text
                style={[styles.desc, styles.white]}
                numberOfLines={4}
                ellipsizeMode="tail">
                {movie.overview}
              </Text>
              <Text style={[styles.subtitle, styles.white]}>
                Similar movies:
              </Text>
            </View>
            <FlatList
              horizontal
              keyExtractor={(item, index) => index.toString()}
              data={similarMovies}
              renderItem={this.renderSimilarMovies}
            />
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const movie = _.pick(state.movie, [
    'title',
    'release_date',
    'overview',
    'backdrop_path',
    'vote_average',
  ]);
  const similarMovies = _.map(state.similarMovies, item =>
    _.pick(item, ['backdrop_path', 'title', 'id']),
  );
  return {
    movie,
    similarMovies,
    loading: state.loading,
  };
};

export default connect(
  mapStateToProps,
  {
    getMovieById,
    getSimilarMoviesById,
  },
)(Detail);
