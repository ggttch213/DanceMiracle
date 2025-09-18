import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';

const EventItem = ({ item }) => (
  <View style={[styles.itemContainer, { backgroundColor: '#E2B5FF' }]}>
    <Image source={item.image ? { uri: item.image } : require('../assets/breaking2.jpg')} style={styles.itemImageSmall} resizeMode="cover" />
    <View style={styles.itemTextContainer}>
      <Text style={styles.itemText}>{item.cName}</Text>
      <Text style={styles.dateText}>{item.cTime}</Text>
      <Text style={styles.additionalText}>類型: {item.cType}</Text>
      <Text style={styles.additionalText}>地點: {item.cLocation}</Text>
    </View>
  </View>
);

const HeaderComponent = ({ latestEvent }) => (
  <View style={[styles.headerContainer, { backgroundColor: '#F19CFF' }]}>
    <Image source={latestEvent.image ? { uri: latestEvent.image } : require('../assets/breaking2.jpg')} style={styles.itemImageLarge} resizeMode="cover" />
    <Text style={styles.headerDate}>{latestEvent.cTime}</Text>
    <Text style={styles.headerText}>{latestEvent.cName}</Text>
  </View>
);

export default function EventInfoPage() {
  const [data, setData] = useState([]);
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchCompetitionData = async () => {
      try {
        const response = await axios.get('http://192.168.1.108:5000/competitions'); // 調整URL以符合後端伺服器地址
        const competitions = response.data;

        // 假設最新的事件是清單中的第一筆
        if (competitions.length > 0) {
          setLatestEvent(competitions[0]);
          setData(competitions.slice(1)); // 剩餘的事件顯示在列表中
        }
      } catch (error) {
        Alert.alert('Error', '無法獲取賽事資訊');
        console.error(error);
      }
    };

    fetchCompetitionData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/BG.gif')} style={styles.backgroundImage} />
      <FlatList
        data={data}
        renderItem={({ item }) => <EventItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={latestEvent && <HeaderComponent latestEvent={latestEvent} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2B5FF',
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
  headerContainer: {
    alignItems: 'center',
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImageLarge: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  itemImageSmall: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  additionalText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  headerDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
