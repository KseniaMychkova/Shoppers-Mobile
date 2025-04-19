import Header from "../../components/Header"
import { useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

function Profile() {
    const router = useRouter();

    return <>
        <Header />
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center', gap: 86 }}>
            <Text style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 32 }}>Hello SIlva</Text>
            <TouchableOpacity 
            onPress={()=> router.push('/')}
                style={{ backgroundColor: '#F9EF05', borderRadius: 40, width: 269, height: 50 }}>
                <Text style={styles.btnText}>SIGN OUT</Text>
            </TouchableOpacity>
        </View>
    </>
}

export default Profile

const styles = StyleSheet.create({
    btnText: {
        color: '#000000',
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 16

    }
})