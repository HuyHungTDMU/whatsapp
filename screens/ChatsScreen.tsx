import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem/ChatListItem';
import NewMessageButton from '../components/NewMessage/NewMessageButton';
import { View } from '../components/Themed';
import ChatRooms from '../Data/ChatRooms';


export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={styles.listItem} data={ChatRooms} renderItem={({ item }) => <ChatListItem chatRoom={item} />} />
      <NewMessageButton />
    </View>
  );
}

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
