// @ts-ignore
import React, {Component} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {IMAGE_URL} from '../axios/params';
import {NavigationInjectedProps, withNavigation} from 'react-navigation';
import styles from '../styles/listItem';
import {Movie} from '../types';

interface Props extends NavigationInjectedProps {
  item: Movie;
}

class ListItem extends Component<Props> {
  private _onItemPress(id: number, title: string) {
    this.props.navigation.navigate('MovieDetail', {
      movieId: id,
      title,
    });
  }

  render() {
    const {item} = this.props;
    return (
      <View style={styles.item}>
        <TouchableHighlight
          style={styles.content}
          onPress={() => this._onItemPress(item.id, item.title)}>
          <View>
            <Image
              style={styles.img}
              source={{uri: `${IMAGE_URL}${item.poster_path}`}}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.release}>
                {item.release_date.substring(0, 4)}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default withNavigation(ListItem);
