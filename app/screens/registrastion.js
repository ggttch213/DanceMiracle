import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('錯誤', '密碼不一致');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.108:5000/registration', {
        name: name,
        email: email,
        account: account,
        password: password,
      });

      if (response.status === 201) {
        Alert.alert('註冊成功', '歡迎加入!');
        navigation.navigate('LoginScreen');  // 註冊成功後導向到 LoginScreen
      } else {
        Alert.alert('註冊失敗', response.data.message);
      }
    } catch (error) {
      Alert.alert('錯誤', '無法註冊，請稍後再試');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>會員註冊</Text>
      <TextInput
        style={styles.input}
        placeholder="名稱"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="帳號"
        value={account}
        onChangeText={setAccount}
      />
      <TextInput
        style={styles.input}
        placeholder="密碼"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="重新輸入密碼"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>註冊</Text>
      </TouchableOpacity>

      {/* 新增的登入按鈕 */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.linkText}>已經有帳號了？登入</Text>
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

export default RegisterScreen;
