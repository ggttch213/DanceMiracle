import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const email = await AsyncStorage.getItem('userEmail');
        if (!email) {
          navigation.replace('LoginScreen');
        } else {
          fetchUserProfile(email);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    const fetchUserProfile = async (email) => {
      try {
        const response = await fetch(`http://192.168.1.108:5000/query/userByEmail`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        const text = await response.text();
        console.log('Server response:', text);

        if (response.ok) {
          const data = JSON.parse(text);
          setUserData({
            id: data.id || 'N/A',
            name: data.name || '',
            account: data.account || '',
            email: data.email || '',
            phone: data.phone || '',
            age: data.age || 0,
            gender: data.gender || '',
            birthday: data.birthday || '',
            dance_age: data.dance_age || 0,
          });
          setEditableData({
            name: data.name || '',
            account: data.account || '',
            email: data.email || '',
            phone: data.phone || '',
            age: data.age || 0,
            gender: data.gender || '',
            birthday: data.birthday || '',
            dance_age: data.dance_age || 0,
          });
        } else {
          Alert.alert('Error', 'Failed to load profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      const response = await fetch('http://192.168.1.108:5000/updateProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editableData,
          email,
        }),
      });

      if (response.ok) {
        Alert.alert('成功', '個人資料已更新');
        setUserData(editableData);
        setIsEditing(false);
      } else {
        Alert.alert('錯誤', '更新失敗');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userEmail');
    navigation.replace('Main');  
  };

  if (!userData) {
    return null;
  }

  const safeValue = (value, fallback = '未填寫') => {
    return value !== undefined && value !== null ? String(value) : fallback;
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://example.com/avatar.png' }}
            style={styles.avatar}
          />
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditToggle}>
          <Text style={styles.editButtonText}>{isEditing ? '取消' : '編輯個人資料'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>ID: {safeValue(userData.id, 'N/A')}</Text>

        {[
          { label: '名稱', key: 'name' },
          { label: '帳號', key: 'account' },
          { label: 'Email', key: 'email' },
          { label: '電話', key: 'phone' },
          { label: '年齡', key: 'age' },
          { label: '性別', key: 'gender' },
          { label: '生日', key: 'birthday' },
          { label: '舞齡', key: 'dance_age' },
        ].map(({ label, key }) => (
          <View style={styles.infoRow} key={key}>
            <Text style={styles.infoLabel}>{label}:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={safeValue(editableData[key], '')}
                onChangeText={(text) =>
                  setEditableData({ ...editableData, [key]: key === 'age' || key === 'dance_age' ? parseInt(text) || 0 : text })
                }
              />
            ) : (
              <Text style={styles.infoText}>{safeValue(userData[key])}</Text>
            )}
          </View>
        ))}

        {isEditing && (
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>儲存</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>登出</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#333' },
  coverSection: { backgroundColor: '#e9d6f0', paddingVertical: 40, alignItems: 'center' },
  avatarContainer: { backgroundColor: '#ccc', width: 80, height: 80, borderRadius: 40, overflow: 'hidden' },
  avatar: { width: '100%', height: '100%' },
  editButton: { marginTop: 10, padding: 5, borderColor: '#000', borderWidth: 1, borderRadius: 5 },
  editButtonText: { color: '#000' },
  infoSection: { backgroundColor: '#fff', padding: 20, margin: 10, borderRadius: 8 },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  infoLabel: { fontSize: 16, color: '#000', width: 80 },
  infoText: { fontSize: 16, color: '#000' },
  input: { flex: 1, borderBottomWidth: 1, borderBottomColor: 'gray', padding: 5 },
  saveButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, marginTop: 10 },
  saveButtonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  logoutButton: { marginTop: 20, padding: 10, backgroundColor: '#FF3B30', borderRadius: 5, alignSelf: 'center' },
  logoutButtonText: { color: '#fff', fontSize: 16 },
});

export default ProfileScreen;