import { Text, View, StyleSheet } from "react-native";

export default function Header() {
    return <View style={styles.wrapper}>
        <Text style={{
            fontFamily: 'Inter', fontWeight: 600, fontSize: 32
        }}>SHOPPERS</Text>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
        paddingTop: 45
    }
})