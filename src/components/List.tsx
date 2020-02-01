// @ts-ignore
import React, {Component} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {getAllMovies} from '../actions';
import ListItem from './ListItem';
import {Movie} from '../types';

interface IProps {
  loading: boolean;
  movies: Movie[];
  getAllMovies: any;
}

class List extends Component<IProps> {
  componentDidMount() {
    this.props.getAllMovies();
  }

  private renderItem = ({item}) => <ListItem item={item}/>;

  render() {
    const {loading, movies} = this.props;
    return (
      <>
        {!loading ? (
          <FlatList
            style={styles.container}
            data={movies}
            horizontal={false}
            numColumns={2}
            renderItem={this.renderItem}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff"/>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  const movies = _.map(state.movies, item =>
    _.pick(item, ['id', 'release_date', 'poster_path', 'title']),
  );
  return {movies, loading: state.loading};
};

export default connect(
  mapStateToProps,
  {getAllMovies},
)(List);
