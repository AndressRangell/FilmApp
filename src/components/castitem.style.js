import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 10
    },
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.2,
    shadowColor: '#000',
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 9,
    marginRight: 20,
    paddingRight: 10,
    minWidth: 200
  },
  imageActor: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5
  },
  character: {
    fontSize: 16,
    opacity: 0.5,
    marginLeft: 10
  }
})

export default styles