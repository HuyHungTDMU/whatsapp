import moment from "moment";
import React from "react";
import { Image } from 'react-native'
import { User } from "../../types";
import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";

export type ChatListItemProps = {
    users: User;
}

const ContactListItem = (props: ChatListItemProps) => {
    const { users } = props;
    const user = users;

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.imageUri }} style={styles.avatar} />
            <Text style={styles.userName}>{user.name}</Text>
        </View>
    );
};

export default ContactListItem;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'gray'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});