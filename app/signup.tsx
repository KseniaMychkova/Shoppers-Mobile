import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'

export default function Login() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const router = useRouter()

    function saveUserData(value: any, tag: any) {
        setUser(prevState => ({ ...prevState, [tag]: value }));
    }

    return (
        <View style={{ flex: 1, gap: 32, paddingHorizontal: 25, justifyContent: 'center', alignItems:'center', backgroundColor: '#FFFFFF' }}>
            <View style={{ paddingLeft: 15, alignItems:'center',paddingBottom: 87 }}>
                <Text style={{ fontWeight: 700, fontSize: 36 }}>Welcome!</Text>
                <Text style={{ fontWeight: 700, fontSize: 14, color: '#606060' }}>Create a new account</Text>
            </View>
            <View style={styles.signContainer}>
                <View style={{ gap: 12 }}>
                    <Text style={styles.textInput}>Name</Text>
                    <TextInput value={user.name} onChangeText={(value: any) => saveUserData(value, 'name')} style={styles.inputField}></TextInput>
                </View>
                <View style={{ gap: 12 }}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput value={user.email} onChangeText={(value: any) => saveUserData(value, 'email')} style={styles.inputField}></TextInput>
                </View>
                <View style={{ gap: 12 }}>
                    <Text style={styles.textInput}>Password</Text>
                    <TextInput value={user.password} onChangeText={(value: any) => saveUserData(value, 'password')} style={styles.inputField} secureTextEntry></TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setUser({ name: '', email: '', password: '' })
                        router.push("/(tabs)/profile");
                    }} 
                    style={{ backgroundColor: '#F9EF05', borderRadius: 40, height: 50 }}>
                    <Text style={styles.btnText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 3, alignSelf: 'center' }}>
                <Text style={{ fontWeight: 300, fontSize: 14 }}>Already have an account?</Text>
                <Link href={'/login'} style={{ color: '#120EDB' }}><Text style={{ fontWeight: 300, fontSize: 14 }}>Sign In</Text></Link>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    signContainer: {
        width: '100%',
        gap: 24,
        paddingVertical: 35,
        borderWidth: 1,
        borderColor: '#00000040',
        borderRadius: 20,
        padding: 36,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    textInput: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: 14,
        paddingLeft: 14
    },
    inputField: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#CECECE',
        borderRadius: 40,
        height: 50,
        paddingLeft: 15
    },
    btnText: {
        color: '#D04444',
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        verticalAlign: 'middle',
        paddingVertical: 16

    }
});
