import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

export default function DanceGroupPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.108:5000/groups') // 確保端點正確
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const GroupItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={require('../assets/breaking2.jpg')} style={styles.itemImage} resizeMode="cover" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.groupName}>{item.name}</Text>
          <Text style={styles.groupIntro}>簡介: {item.intro}</Text>
          <Text style={styles.groupCommunity}>社群: {item.community}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/BG.gif')}
        style={styles.backgroundImage}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <GroupItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#8A2BE2',
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
  },
  groupName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  groupIntro: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  groupCommunity: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
