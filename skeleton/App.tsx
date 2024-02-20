import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.loaderWrapper}>
        <ContentLoader
          speed={2}
          height={175}
          viewBox={`0 0 ${width} 175`}
          backgroundColor="#eae9e7"
          foregroundColor="#f3f3f3"
          style={{ width: "100%" }}
        >
          <Circle cx="50" cy="38" r="38" />
          <Rect x="95" y="5" rx="4" ry="4" width="30%" height="14" />
          <Rect x="95" y="25" rx="4" ry="4" width="40%" height="14" />
          <Rect x="95" y="45" rx="4" ry="4" width="35%" height="14" />
          <Rect x="15" y="95" rx="4" ry="4" width="90%" height="14" />
          <Rect x="15" y="115" rx="4" ry="4" width="90%" height="14" />
          <Rect x="15" y="135" rx="4" ry="4" width="90%" height="14" />
          <Rect x="15" y="155" rx="4" ry="4" width="90%" height="14" />
        </ContentLoader>
      </View>

      <View style={styles.loaderWrapper}>
        <ContentLoader
          speed={2}
          height={360}
          viewBox={`0 0 ${width} 360`}
          backgroundColor="#eae9e7"
          foregroundColor="#f3f3f3"
          style={{ width: "100%" }}
        >
          <Circle cx="50" cy="38" r="38" />
          <Rect x="95" y="5" rx="4" ry="4" width="30%" height="14" />
          <Rect x="95" y="25" rx="4" ry="4" width="40%" height="14" />
          <Rect x="95" y="45" rx="4" ry="4" width="35%" height="14" />
          <Rect x="0" y="95" rx="0" ry="0" width="100%" height="250" />
        </ContentLoader>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6df",
    paddingTop: 44,
  },
  loaderWrapper: {
    backgroundColor: "#f5f4f2",
    paddingVertical: 6,
    marginTop: 16,
  },
  header: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  greeting: {
    color: "#fff",
    fontSize: 14,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
