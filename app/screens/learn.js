import * as React from 'react';
import { Text, View ,ScrollView,Image,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Video} from 'react-native-video'

import {useState} from 'react'

export default function LearningScreen(){
    return(
    <View style={{  flex: 1, alignItems: 'center' }}>
        <Image
                source={require('../assets/BG.gif')}
                style={styles.backgroundImage}
            />
        <View style={{flex:1}}>
        <Text style={{fontSize : 30 , textAlign : 'auto'}}>開啟你的舞蹈學習之旅</Text>
        </View>
        <View style={{flex:3}}>
        <Text style={{fontSize : 20 , textAlign : 'auto'}}>舞蹈學院</Text>
        </View>
        <View style={{flex:2}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flexDirection:'row',}}>
                <View>
                <Image
                source={require('../assets/dance1.jpg')}
                style={styles.scrollItemImage}/>
                <Text style={styles.scrollItemText}>舞蹈1</Text>
                </View>
                <View>
                <Image
                source={require('../assets/dance2.jpg')}
                style={styles.scrollItemImage}/>
                <Text style={styles.scrollItemText}>舞蹈2</Text>
                </View>
                <View>
                <Image
                source={require('../assets/dance3.jpg')}
                style={styles.scrollItemImage}/>
                <Text style={styles.scrollItemText}>舞蹈3</Text>
                </View>
                <View>
                <Image
                source={require('../assets/dance4.jpg')}
                style={styles.scrollItemImage}/>
                <Text style={styles.scrollItemText}>舞蹈4</Text>
                </View>
                <View>
                <Image
                source={require('../assets/dance5.jpg')}
                style={styles.scrollItemImage}/>
                <Text style={styles.scrollItemText}>舞蹈5</Text>
                </View>
            </ScrollView>
        </View>
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
        resizeMode: 'cover', // or 'stretch'
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    scrollItemImage: {
        width: 250, // 給一個確定的寬度
        height: 150, // 給一個確定的高度
        marginHorizontal: 5, // 加一些邊距
        borderRadius: 5, // 圓角
        // 不需要絕對定位和 flex: 1
    },
    scrollItemText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontFamily: ''
    },
    content: {
        flex: 1,
    },
});