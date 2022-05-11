import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../Themed";
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto } from '@expo/vector-icons'
import { TextInput } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const InputBox = () => {
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='gray' />
                <TextInput value={message} onChangeText={setMessage} placeholder="Type a message" style={styles.textInput} multiline />
                <Entypo style={styles.icon} name='attachment' size={24} color='gray' />
                <Fontisto style={styles.icon} name='camera' size={24} color='gray' />
            </View>
            <View style={styles.button}>
                {message ? <MaterialCommunityIcons name="send" size={24} color='white' /> :
                    <MaterialCommunityIcons name="microphone" size={24} color='white' />}

            </View>
        </View>
    );
}

export default InputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 50,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        minHeight: 25,
    },
    icon: {
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }
});