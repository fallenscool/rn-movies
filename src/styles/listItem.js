import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    width: '50%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,
    elevation: 5,
  },
  content: {
    width: '100%',
    height: 200,
    position: 'relative',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#FFFFFFE2',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  release: {
    fontWeight: '200',
    fontSize: 12,
  },
});
