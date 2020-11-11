import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { styles } from "./Styles";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoader] = useState(false);
  const [url, setUrl] = useState("");
  const [result, setResults] = useState([]);

  useEffect(() => {}, [result]);

  const onSearchRequest = () => {
    setLoader(true);
    if (!url.trim() || url === "" || typeof url === typeof undefined) {
      alert("Please enter text to search");
      setLoader(false);
      return;
    }
    fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data[1].length === 0) {
          alert("No results found");
          setLoader(false);
          return;
        }
        setLoader(false);
        setUrl("");
        setResults(data);
      });
  };

  const showDetails = (index) => {
    navigation.navigate("Details", {
      url: result[3][index],
      title: result[1][index],
    });
  };

  const renderList = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => showDetails(index)}>
        <Text style={HomeStyles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wikipedia App</Text>
      </View>
      <View style={styles.innerContainer}>
        {loading && (
          <ActivityIndicator style={HomeStyles.indicator} size="large" />
        )}
        <TextInput
          onChangeText={(url) => {
            setUrl(url);
          }}
          value={url}
          style={styles.input}
          placeholder="e.g Tiger"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSearchRequest()}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={result[1]}
          renderItem={renderList}
          extraData={result[1]}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const HomeStyles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  indicator: {
    top: -60,
    position: "absolute",
    alignSelf: "center",
  },
});
