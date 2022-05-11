import moment from "moment";
import React from "react";
import { Text } from "react-native";
import { Message } from "../../types";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { View } from "../Themed";

export type ChatMessageProps = {
    message: Message,
}
const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;
    const iMyMessage = () => {
        return message.user.id === 'u1';
    }
    return (
        <View style={styles.container}>
            <View style={iMyMessage() ? styles.messageBoxRight : styles.messageBoxLeft}>
                <Text style={styles.name}>{message.user.name}</Text>
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt.toString()).format('DD/MM/YYYY')}</Text>
            </View>
        </View>
    );
}
export default ChatMessage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    messageBoxLeft: {
        backgroundColor: 'white',
        marginRight: 50,
        borderRadius: 5,
        padding: 10,
    },
    messageBoxRight: {
        backgroundColor: '#DCF8C5',
        marginLeft: 50,
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message: {
        fontSize: 14,
        color: 'gray'
    },
    time: {
        alignSelf: 'flex-end',
        fontSize: 12,
        color: 'gray',
        marginTop: 5
    }
});