import React, { useState, useEffect } from 'react';
import { Image, View, Platform, Alert, TouchableOpacity, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
export default function ImagePickerScreen() {
    const [image, setImage] = useState(null);
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                } else {
                    setHasPermission(true);
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            {image === null && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={pickImage}>
                    <View style={styles.addproductImage}>
                        <Ionicons name="md-add-circle" size={40} color="lightgray" />
                    </View>
                </TouchableOpacity>
                <Text>Click "+" to add image from the Gallery</Text>
            </View>}
            {image && <TouchableOpacity onLongPress={() => {
                Alert.alert(
                    "Delete Image",
                    "Do you wanna Delete this Image Permanantely",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: "Delete", onPress: () => {
                                setImage(null);

                            }
                        }
                    ],
                    { cancelable: false }
                )
            }}>
                <Image source={{ uri: image }} style={{ width: 250, height: 250, borderRadius: 10 }} />
            </TouchableOpacity>
            }
            {image !== null && <View style={{ flexDirection: 'row' }}>
                <View style={styles.ImageView}>
                    <Button color="#00008B" mode="contained" onPress={() => {
                        axios.get('http://127.0.0.1:5000/evaluate_ed')
                            .then(function (response) {
                                // handle success
                                console.log(response.data);
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                    }}>Submit
                                </Button>

                </View>
                <View style={styles.ImageView}>
                    <Button color="#00008B" mode="contained" onPress={pickImage} >Re-Select</Button>
                </View>
            </View>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16ADEE',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageView: {
        margin: 10
    },
    addproductImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginBottom: 30,
        backgroundColor: '#121212',
        borderRadius: 5,
        overflow: 'hidden'
    },
});