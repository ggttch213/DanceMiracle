import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

export default function DanceTeacherPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.108:5000/teachinfos') // 請確保端點與後端一致
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  const TeacherItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={require('../assets/breaking.jpg')} style={styles.itemImage} resizeMode="cover" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.teacherName}>{item.name}</Text>
          <Text style={styles.teacherType}>{item.type}</Text>
          <Text style={styles.teacherContact}>聯絡方式: {item.contact}</Text>
          <Text style={styles.teacherResume}>簡介: {item.resume}</Text>
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
        renderItem={({ item }) => <TeacherItem item={item} />}
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
    backgroundColor: '#8A2BE2', // 較深的背景色
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemImage: {
    width: 120,  // 調大圖片尺寸
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  itemTextContainer: {
    flex: 1,
  },
  teacherName: {
    fontSize: 22, // 調大文字大小
    fontWeight: 'bold',
    color: '#FFFFFF', // 白色字體
    marginBottom: 5,
  },
  teacherType: {
    fontSize: 18,
    color: '#FFD700', // 黃色字體
    marginBottom: 5,
  },
  teacherContact: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  teacherResume: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
