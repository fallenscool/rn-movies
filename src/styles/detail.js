import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    backgroundColor: '#1C1C1C',
  },
  img: {
    height: 240,
    backgroundColor: '#ccc',
  },
  info: {
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
    position: 'relative',
  },
  white: {
    color: '#FFFFFFE3',
  },
  year: {
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  desc: {
    fontSize: 18,
    fontWeight: '200',
    overflow: 'hidden',
    lineHeight: 22,
    marginBottom: 30,
  },
  vote: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    position: 'absolute',
    right: 30,
    top: -40,
    backgroundColor: '#484848',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3,
    elevation: 5,
  },
  voteText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  similarItem: {
    flex: 1,
    width: Dimensions.get('window').width - 48,
    marginRight: 24,
    marginLeft: 24,
  },
  similarItemImg: {
    width: '100%',
    height: 170,
    borderRadius: 17,
    backgroundColor: '#ccc',
  },
  similarItemTitle: {
    marginTop: 16,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
