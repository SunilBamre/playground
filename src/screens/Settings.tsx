import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
  

function Settings() {

    const [photo, setPhoto] = useState('');

    const openGallery = async () => {
        const gallery = await launchImageLibrary({mediaType:'mixed'});
        console.log(gallery);
    }

    const openCamera = async () => {
        const camera = await launchCamera({mediaType:'photo', saveToPhotos: false});
        console.log(camera);
        setPhoto(camera.uri);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.boxView}>
                {photo !== '' && (
                    <Image
                        source={{ uri: photo }}
                        style={{ width: 200, height: 200, borderRadius: 5, marginBottom:15,}}
                    />
                )}
                <View style={styles.btnRow}>
                    <TouchableOpacity onPress={openGallery} style={styles.btn}>
                        <Text style={styles.btnTxt}>Open Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openCamera} style={styles.btn}>
                        <Text style={styles.btnTxt}>Open Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },

    boxView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },

    btnRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },

    btn: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#1f883d',
        flex: 1,
        margin: 10,
    },

    btnTxt: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
  });
 
export default Settings;