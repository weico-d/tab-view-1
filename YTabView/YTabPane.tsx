import { View, StyleSheet, Text } from "react-native";
import { YTabPaneType } from "./type";




export default function YTabpane(props: { children: JSX.Element, label: string, id: string }) {

    if (props.children) {
        return props.children
    }
    return <View><Text>请在Panel内部写入子元素！</Text></View>
}


