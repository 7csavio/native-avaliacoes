import { StyleSheet, Dimensions  } from 'react-native';
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  banner: {
    position: 'relative',
  },
  bannerContainer: {
    width: '100%',
    //height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rating: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 16,
  },
  watchButton: {
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },
  recommendationsContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recommendationImage: {
    width: (screenWidth - 40) / 3, 
    height: 150,
    borderRadius: 8,
  },
});

export default styles;