import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

interface Item {
  id: number;
  full_name: string;
}

export default function App() {
  const baseURL = "https://api.github.com";
  const perPage = 20;

  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `${baseURL}/search/repositories?q=react&per_page=${perPage}&page=${page}`
    );
    const jsonData = await response.json();

    setData([...data, ...jsonData.items]);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 35 }}
        contentContainerStyle={{ marginHorizontal: 20 }}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        // setting up the infinite scroll
        onEndReached={loadApi}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
      />
    </View>
  );
}

function ListItem({ data }: { data: Item }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{data.full_name}</Text>
    </View>
  );
}

// Loading component
function FooterList({ load }: { load: boolean }) {
  return load ? (
    <View style={styles.loading}>
      <ActivityIndicator size={25} color="#121212" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listItem: {
    backgroundColor: "#121212",
    padding: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  listText: {
    fontSize: 16,
    color: "#FFF",
  },
  loading: {
    padding: 10,
  },
});
