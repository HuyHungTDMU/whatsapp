import React from "react";
import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate("Contacts");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClick}>
                <MaterialCommunityIcons name="message-reply-text" size={24} color='white' />
            </TouchableOpacity>
        </View>
    );
}

export default NewMessageButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});