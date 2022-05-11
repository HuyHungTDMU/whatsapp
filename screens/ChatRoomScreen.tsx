import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Chats from "../Data/Chats";
import ChatMessage from "../components/ChatMessage/ChatMessage";
import { ImageBackground } from "react-native";
import { StyleSheet } from 'react-native';
import BG from '../assets/images/BG.png';
import InputBox from "../components/InputBox/InputBox";

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <ImageBackground style={styles.imageBackground} source={BG}>
            <FlatList style={styles.chatMessage} inverted data={Chats.messages} renderItem={({ item }) => <ChatMessage message={item} />} />
            <InputBox />
        </ImageBackground>
    );
}
export default ChatRoomScreen;

const styles = StyleSheet.create({
    imageBackground: {
        height: '100%',
        width: '100%',
    },
    chatMessage: {
    }
})