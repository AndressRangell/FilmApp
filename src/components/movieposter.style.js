import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 20
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
})

export default styles