import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../dryness_eye_bot-main/assets/d.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {}]}>Be Aware At The Earliest!</Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen')}>
                        <Text style={styles.textSign}>Get Started  </Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#000"
                            size={40}
                        />
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View >
    );
};


export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16ADEE'
    },
    header: {
        flex: 5,

        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 20
    },

    title: {
        color: '#205B74',
        fontSize: 25,
        fontWeight: 'bold',

    },
    text: {
        color: 'black',
        marginTop: 1
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 5
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22,
        alignItems: 'center',
        justifyContent: "center"
    }
});
