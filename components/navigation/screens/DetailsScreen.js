import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { styles } from "./Styles";
import { WebView } from "react-native-webview";

const DetailsScreen = ({ route, navigation }) => {
  const [loading, setLoader] = useState(true);

  const { url, title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={DetailsStyles.indicatorContainer}>
          <ActivityIndicator style={DetailsStyles.indicator} size="large" />
        </View>
      )}
      <View style={styles.innerContainer}>
        <WebView
          onLoadStart={() => setLoader(true)}
          onLoadEnd={() => setLoader(false)}
          source={{ uri: url }}
          style={{ marginTop: 0 }}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const DetailsStyles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    alignSelf: "center",
  },
});
