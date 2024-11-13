import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchInput: { 
    color: '#fff',
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flex: 1,
  },
  searchButton: { 
    padding: 4,
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
