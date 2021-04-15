import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    StyleSheet,
    StatusBar,
    TextInput,
    CheckBox
} from 'react-native';
import * as Animatable from 'react-native-animatable';


const SignInScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>DRYEYE BOT</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                }]}
            >
                <Text style={[styles.text_footer]}>Name</Text>
                <TextInput placeholder="Enter Name Here" style={styles.Input} />

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Age</Text>
                <TextInput placeholder="Enter Age Here" style={styles.Input} />

                <Text style={[styles.text_footer, { marginTop: 40 }]}>Gender</Text>

                <View style={styles.checkboxContainer}>
                    <CheckBox

                        style={styles.checkbox}
                    />
                    <Text style={styles.label, { marginTop: 10 }}>Male</Text>

                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label, { marginTop: 10 }}>Female</Text>

                </View>


                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16ADEE'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    Input: {
        fontSize: 12,
    },

    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        marginTop: 3

    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});