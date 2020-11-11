import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 2,
    alignSelf: "stretch",
    paddingRight: 30,
    paddingLeft: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    height: 50,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    fontSize: 20,
  },
});

export { styles };
