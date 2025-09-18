import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

const danceStyles = [
  { id: '1', title: 'HIPHOP', description: '嘻哈音樂及嘻哈文化首先在 1970 年代美國貧民區的青年中出現，其中大多數是紐約的美國黑人。嘻哈文化包含饒舌、DJ、塗鴉、街舞及節奏口技(Beatbox)五大要素。', image: require('../assets/hiphop.jpg') },
  { id: '2', title: 'LOCKING', description: 'Locking 是一種源自於70年代的街舞風格，以其獨特的節奏感和強烈的表演特徵而聞名。', image: require('../assets/locking.jpg') },
  { id: '3', title: 'POPPING', description: 'Popping 舞蹈通常搭配多樣化的音樂曲風進行表演，如Funk、Electro、Hip-hop等。', image: require('../assets/popping.jpg') },
  { id: '4', title: 'WAACKING', description: 'Waacking 舞蹈通常搭配多樣化的音樂曲風進行表演，如Disco、Funk、Soul等。', image: require('../assets/waacking.jpg') },
  { id: '5', title: 'HOUSE', description: 'House 起源於美國芝加哥和紐約，靈感來源於當時流行的音樂風格，如Disco、Funk 和 Soul。', image: require('../assets/house.jpg') },
  { id: '6', title: 'DANCEHALL', description: 'Dancehall 源自中美洲牙買加，有著獨特風味的律動。', image: require('../assets/dancehall.jpg') },
  { id: '7', title: 'JAZZ', description: 'Jazz Dance 的歷史漫長，搭配多樣的音樂曲風，如Jazz、Swing、Blues等。', image: require('../assets/jazz.jpg') },
  { id: '8', title: 'BREAKING', description: 'Breaking 的主要音樂類型包括 Break Beats、Funk、rap 和 Soul。', image: require('../assets/breaking.jpg') },
];

const DanceStyleItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={styles.imageWrapper}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
    <View style={styles.textWrapper}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

export default function DanceStylePage() {
  return (
    <FlatList
      data={danceStyles}
      renderItem={({ item }) => <DanceStyleItem item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#E2B5FF',
  },
  itemContainer: {
    backgroundColor: '#F0C8FF',
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  imageWrapper: {
    backgroundColor: '#8A2BE2',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  textWrapper: {
    padding: 15,
    backgroundColor: '#F0C8FF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#900',
    textAlign: 'right',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});
