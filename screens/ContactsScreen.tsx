import React from "react";
import { FlatList, View } from "react-native";
import { StyleSheet } from 'react-native';
import ContactListItem from "../components/ContactListItem/ContactListItem";
import Users from '../Data/Users';

const ContactsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList style={styles.listItem} data={Users} renderItem={({ item }) => <ContactListItem users={item} />} />
        </View>
    );
}
export default ContactsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        width: '100%',
    }
});
