import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { RadioButton,Checkbox } from 'react-native-paper';


const QUESTIONNAIRE_DATA = [
  
  {
    id: 1,
    question: '第一大題:個性與喜好分析 \n 1. 您的性別，個性與特質較為？',
    options: [
      { label: '生理男，個性較陽剛', value: '生理男，個性較陽剛' },
      { label: '生理男，個性較陰柔', value: '生理男，個性較陰柔' },
      { label: '生理女，個性較豪邁', value: '生理女，個性較豪邁' },
      { label: '生理女，個性較嬌柔', value: '生理女，個性較嬌柔' },
    ],
  },
  {
    id: 2,
    question: '2. 您的穿衣風格為',
    options: [
      { label: '襯衫、西裝褲，多為正裝', value: '襯衫、西裝褲，多為正裝' },
      { label: '工裝、寬褲、帽T，多為休閒裝扮', value: '工裝、寬褲、帽T，多為休閒裝扮' },
      { label: '短版上衣、熱褲，多為清涼裝扮', value: '短版上衣、熱褲，多為清涼裝扮' },
      { label: '洋裝、裙類，多為少女裝扮', value: '洋裝、裙類，多為少女裝扮' },
    ],
  },
  {
    id: 3,
    question: '3. 你覺得自己的動作靈活性如何？',
    options: [
      { label: '靈活性高', value: '靈活性高' },
      { label: '靈活性低', value: '靈活性低' },
    ],
  },
  {
    id: 4,
    question: '4. 你生活的步調與節奏為快或慢？',
    options: [
      { label: '快', value: '快' },
      { label: '慢', value: '慢' },
    ],
  },
  {
    id: 5,
    question: '5. 你的肌肉相當發達嗎？',
    options: [
      { label: '是', value: '是' },
      { label: '普通', value: '普通' },
      { label: '否', value: '否' },
    ],
  },
  {
    id: 7,
    question: '第二大題:個性與喜好分析 \n 1. 哪種街舞風格的表演較為吸引你？',
    options: [
      { label: '整齊劃一、律動感爆棚的Hip-hop', value: '整齊劃一、律動感爆棚的Hip-hop' },
      { label: '充滿歡笑、魅力也鎖入其中的Locking', value: '充滿歡笑、魅力也鎖入其中的Locking' },
      { label: '肌肉爆震、最強震央的Popping', value: '肌肉爆震、最強震央的Popping' },
      { label: '充滿神祕、展現手臂線條之美的Waacking', value: '充滿神祕、展現手臂線條之美的Waacking' },
      { label: '體態延伸、性感兼具優雅的Jazz', value: '體態延伸、性感兼具優雅的Jazz' },
      { label: '爭奇鬥艷、展現自信與魅力的Voguing', value: '爭奇鬥艷、展現自信與魅力的Voguing' },
      { label: '自由即興、清爽與活力的House', value: '自由即興、清爽與活力的House' },
      { label: '體能之巔、瘋狂炸地板的Breaking', value: '體能之巔、瘋狂炸地板的Breaking' },
      { label: '拉丁風情、熱情與火辣的Dancehall', value: '拉丁風情、熱情與火辣的Dancehall' },
    ],
  },
  {
    id: 8,
    question: '2. 你偏向於流暢柔和的動作還是力量與速度感強烈的動作？',
    options: [
      { label: '流暢柔和的動作', value: '流暢柔和的動作' },
      { label: '力量與速度感強烈的動作', value: '力量與速度感強烈的動作' },
    ],
  },
  {
    id: 9,
    question: '3. 你更喜歡在舞蹈中展示技巧和技巧性的動作還是表達個人風格和獨特性？',
    options: [
      { label: '展示技巧和技巧性的動作', value: '展示技巧和技巧性的動作' },
      { label: '表達個人風格和獨特性', value: '表達個人風格和獨特性' },
    ],
  },
  {
    id: 10,
    question: '4. 你偏好以戲劇性方式表演，還是更傾向於展示力量和能量？',
    options: [
      { label: '戲劇性方式表演', value: '戲劇性方式表演' },
      { label: '展示力量和能量', value: '展示力量和能量' },
    ],
  },
  
];

const QuestionnaireScreen = () => {
  const [stylesScores, setStylesScores] = useState({
    hiphop: 0,
    breaking: 0,
    popping: 0,
    locking: 0,
    waacking: 0,
    jazz: 0,
    voguing: 0,
    house: 0,
    dancehall: 0,
  });
  const [answers, setAnswers] = useState({});

  const updateScores = (questionId, answer) => {
    const updatedScores = { ...stylesScores };
    const scoring = {
      '生理男，個性較陽剛': { breaking: 5, popping: 3, hiphop: 3, locking: 3, house: 3, dancehall: 3, waacking: 2, voguing: 1, jazz: 1 },
      '生理男，個性較陰柔': { jazz: 5, waacking: 4, voguing: 4, popping: 3, hiphop: 3, locking: 3, house: 3, dancehall: 3, breaking: 1 },
      '生理女，個性較豪邁': { hiphop: 5, breaking: 4, locking: 4, popping: 3, house: 3, dancehall: 3, waacking: 2, jazz: 2, voguing: 1 },
      '生理女，個性較嬌柔': { voguing: 5, jazz: 4, waacking: 4, popping: 3, house: 3, locking: 2, hiphop: 2, dancehall: 2, breaking: 1 },
      
      '襯衫、西裝褲，多為正裝': { jazz: 5, voguing: 4, waacking: 3, locking: 2, hiphop: 2, popping: 2, house: 1, dancehall: 1, breaking: 1 },
      '工裝、寬褲、帽T，多為休閒裝扮': { hiphop: 5, breaking: 4, popping: 3, locking: 3, house: 3, dancehall: 3, waacking: 2, jazz: 1, voguing: 1 },
      '短版上衣、熱褲，多為清涼裝扮': { dancehall: 5, hiphop: 4, waacking: 4, house: 3, voguing: 3, locking: 2, jazz: 2, popping: 1, breaking: 1 },
      '洋裝、裙類，多為少女裝扮': { voguing: 5, jazz: 4, waacking: 4, locking: 3, house: 3, popping: 2, hiphop: 2, breaking: 1, dancehall: 1 },

      '靈活性高': { hiphop: 4, locking: 4, breaking: 3, voguing: 3, jazz: 3, waacking: 3, popping: 2, dancehall: 2, house: 1 },
      '靈活性低': { breaking: 4, popping: 3, house: 3, locking: 2, jazz: 2, waacking: 2, dancehall: 1, voguing: 1, hiphop: 1 },

      '快': { hiphop: 4, house: 4, locking: 3, dancehall: 3, breaking: 2, popping: 2, waacking: 1, voguing: 1, jazz: 1 },
      '慢': { voguing: 4, jazz: 4, waacking: 3, popping: 3, house: 2, dancehall: 2, hiphop: 1, locking: 1, breaking: 1 },

      '是': { breaking: 5, popping: 4, hiphop: 3, locking: 3, waacking: 2, voguing: 2, dancehall: 2, house: 1, jazz: 1 },
      '普通': { hiphop: 3, locking: 3, house: 3, voguing: 2, waacking: 2, popping: 2, breaking: 2, jazz: 1, dancehall: 1 },
      '否': { voguing: 4, jazz: 4, waacking: 3, house: 2, locking: 1, popping: 1, breaking: 1, dancehall: 1, hiphop: 1 },

      "整齊劃一、律動感爆棚的Hip-hop ":{hiphop:5 },
      "充滿歡笑、魅力也鎖入其中的Locking ":{locking:5} ,
      "肌肉爆震、最強震央的Popping " :{popping:5 },
      "充滿神祕、展現手臂線條之美的Waacking ":{waacking:5},
      "體態延伸、性感兼具優雅的Jazz ":{jazz:5} ,
      "爭奇鬥艷、展現自信與魅力的Voguing ":{voguing:5 },
      "自由即興、清爽與活力的House ": {house:5 },
      "體能之巔、瘋狂炸地板的Breaking ":{breaking:5 },
       "拉丁風情、熱情與火辣的Dancehall ":{dancehal:5},

      "流暢柔和的動作":{jazz:5, waacking:4 ,house:4 ,voguing:3 ,hiphop:2 ,locking:1 ,popping:2 ,breaking:1 ,dancehall:2}, 
      "力量與速度感強烈的動作":{hiphop:5 ,locking:5 ,popping:5 ,breaking:5 ,dancehall:5 ,jazz:1 ,waacking:2 ,house:3 ,voguing:2   },

      "展示技巧和技巧性的動作": {popping:2 ,locking:2 ,breaking:2 ,waacking:2 },
      "表達個人風格和獨特性":{house:2 ,voguing:2 ,dancehall:2 ,jazz:2 ,hiphop:2 },

      "戲劇性方式表演":{jazz:2 ,voguing:2 ,house:2 },
      "展示力量和能量":{popping:2 ,locking:2 ,breaking:2 ,waacking:2 ,hiphop:2 ,dancehall:2}
};

    const effects = scoring[answer] || {};
    Object.keys(effects).forEach((style) => {
      updatedScores[style] += effects[style];
    });

    setStylesScores(updatedScores);
  };


    

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    updateScores(questionId, answer);
  };

  const handleSubmit = () => {
    const topStyle = Object.keys(stylesScores).reduce((a, b) => 
      stylesScores[a] > stylesScores[b] ? a : b
    );
    Alert.alert("最適合你的舞風為：", topStyle);
    console.log(stylesScores)
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>舞風適性問卷測驗</Text>

      {QUESTIONNAIRE_DATA.map((question) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option) => (
            <View key={option.value} style={styles.optionContainer}>
              <RadioButton
                value={option.value}
                status={answers[question.id] === option.value ? 'checked' : 'unchecked'}
                onPress={() => handleAnswerChange(question.id, option.value)}
              />
              <Text>{option.label}</Text>
            </View>
          ))}
        </View>
      ))}

      <Button title="提交問卷" onPress={handleSubmit} />
    <Text>123</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default QuestionnaireScreen;
