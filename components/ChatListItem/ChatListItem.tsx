import moment from "moment";
import React from "react";
import { Image } from 'react-native'
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom } from "../../types";
import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[0];
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate("ChatRoom", { user });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: user.imageUri }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt.toString()).format('DD/MM/YYYY')}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ChatListItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    lefContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'gray',
        maxWidth: 200
    },
    time: {
        fontSize: 14,
        color: 'gray'
    }
});