import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.108:5000/login', {
        email: email,
        password: password,
      });
  
      if (response.status === 200) {
        const token = response.data.token;
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('userEmail', email); // 保存 userEmail
        Alert.alert('登入成功', '歡迎回來!');
        navigation.navigate('Main'); // 改用 navigate 而非 replace
      } else {
        Alert.alert('登入失敗', response.data.message);
      }
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response);
        Alert.alert('錯誤', `伺服器返回: ${error.response.status}`);
      } else if (error.request) {
        console.error('Request error:', error.request);
        Alert.alert('錯誤', '無法連接到伺服器');
      } else {
        console.error('Error:', error.message);
        Alert.alert('錯誤', '未知錯誤發生');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>會員登入</Text>
      <TextInput
        style={styles.input}
        placeholder="請輸入Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="請輸入密碼"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>登入</Text>
      </TouchableOpacity>

      {/* 新增的註冊按鈕 */}
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.linkText}>沒有帳號？註冊</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  linkText: { color: '#007BFF', textAlign: 'center', marginTop: 20 },
});

export default LoginScreen;
