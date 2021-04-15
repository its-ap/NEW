import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation: { navigate } }) {
    return (

        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20 }}>
                    <MaterialCommunityIcons name="instagram" size={70} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Button color="#00008B" mode="contained" onPress={() => { navigate("CamHandler") }}> Click an Image with Camera</Button>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 20 }}>
                    <MaterialCommunityIcons name="image" size={70} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Button color="#00008B" mode="contained" onPress={() => { navigate("ImagePicker") }}> Pick an Image from Gallery</Button>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16ADEE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});
