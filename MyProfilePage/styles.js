import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  header: {
    height: 120,
    backgroundColor: '#A7C7E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D3E0EE',
  },
  headerText: {
    fontSize: 26,
    color: '#5A7D9A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  infoSection: {
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#6A7F98',
    lineHeight: 28,
    marginBottom: 12,
    textAlign: 'center',
  },
  form: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#D3E0EE',
  },
  input: {
    height: 50,
    borderColor: '#A7C7E7',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#A7C7E7',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    overflow: 'hidden',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
