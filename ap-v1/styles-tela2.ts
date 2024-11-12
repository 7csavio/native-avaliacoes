import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleRow: { 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8, 
  },
  subTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  simulcastRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  simulcastImage: {
    width: 180, 
    height: 260, 
    borderRadius: 8,
  },
});

export default styles;