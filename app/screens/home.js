import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import LearningScreen from '../screens/learn';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [isVideoVisible, setIsVideoVisible] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVideoVisible(false);
        }, 5000); // 5000 毫秒後關閉影片

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {/* 背景圖片 */}


            {/* 影片 */}
            {/* {isVideoVisible && (
                <View style={StyleSheet.absoluteFill}>
                    <Video
                        source={require('../assets/dm.gif')}
                        style={StyleSheet.absoluteFill}
                        resizeMode="cover"
                        onEnd={() => setIsVideoVisible(false)}
                        onError={(error) => console.error(error)}
                        repeat={false}
                    />
                </View>
            )} */}

<ScrollView >
                <View>
                    <Text style={{ fontSize: 48, margin: 10, fontWeight: "900" }}>探索</Text>
                    <View style={{ alignItems: 'center', }}>
                        
                <Card
                title='HELLO WORLD'
                >
    <View style={{ backgroundColor: '#D9D9D9', borderRadius: 20, overflow: 'hidden' }}>
        <Image style={{ width: 300, height: 200 }}
            source={require('../assets/breaking.jpg')}
        />
        <Text style={{ marginBottom: 10 }}>
            舞蹈資訊
        </Text>
        <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='查看更多'
            onPress={() => navigation.navigate('資訊中心')}
        />
    </View>
</Card>
                    </View>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <Card
                        title='HELLO WORLD'
                    >
                        <Image style={{ width: 300, height: 200 }}
                            source={require('../assets/breaking.jpg')}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            舞蹈教學
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='查看更多'
                            onPress={() => navigation.navigate('舞蹈學院')}
                        />
                    </Card>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Card
                        title='HELLO WORLD'
                    >
                        <Image style={{ width: 300, height: 200 }}
                            source={require('../assets/breaking.jpg')}
                        />
                        <Text style={{ marginBottom: 10 }}>
                            舞蹈資訊
                        </Text>
                        <Button
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='查看更多'
                            onPress={() => navigation.navigate('資訊中心')}
                        />
                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor:"#F9D2FF",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    content: {
        flex: 1,
    },
    
});

export default HomeScreen;
